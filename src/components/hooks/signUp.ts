import kyClient from "@/lib/ky/kyClient";
import { Data, DirectusResponse, SignupFormType } from "@/lib/type";
import { HTTPError } from "ky";

const signUp = async (sInfo: SignupFormType) => {
	try {
		const { data } = await kyClient
			.get(`users`, {
				next: { tags: ["signUp"] },
				searchParams: {
					filter: JSON.stringify({
						email: {
							_eq: sInfo.email,
						},
					}),
				},
			})
			.json<DirectusResponse<Data[]>>();

		if (data.length === 0) {
			await kyClient.post(`users/register`, {
				json: sInfo,
			});

			return {
				success: true,
				message: "User Successfully SignUp",
			};
		} else {
			return {
				success: false,
				message: `${sInfo.email} already exists`,
			};
		}
	} catch (error) {
		if (error instanceof HTTPError) {
			const respos = await error.response.json<{
				error: { message: string }[];
			}>();

			if (error.response.status === 400 || error.response.status === 401) {
				return {
					success: false,
					message: "Unauthorized User",
				};
			}

			return {
				success: false,
				message: respos.error[0].message,
			};
		} else {
			return {
				success: false,
				message: "Network Error. Please check your connection.",
			};
		}
	}
};

export default signUp;

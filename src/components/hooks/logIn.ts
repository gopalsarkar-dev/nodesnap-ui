import kyClient from "@/lib/ky/kyClient";
import { Data, DirectusResponse, LoginFormType } from "@/lib/type";
import { HTTPError } from "ky";

const logIn = async (lInfo: LoginFormType) => {
	try {
		const { data } = await kyClient
			.get(`users`, {
				next: { tags: ["signIn"] },
				searchParams: {
					filter: JSON.stringify({
						email: {
							_eq: lInfo.email,
						},
					}),
				},
			})
			.json<DirectusResponse<Data[]>>();
		if (data.length !== 0) {
			await kyClient.post(`auth/login`, {
				json: {
					email: lInfo.email,
					password: lInfo.password,
					mode: "session",
				},
			});

			return {
				success: true,
				message: "User Successfully login",
			};
		} else {
			return {
				success: false,
				message: `${lInfo.email} Don&apos;t exists`,
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
					message: "Invalid user credentials",
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

export default logIn;

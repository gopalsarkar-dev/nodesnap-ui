import kyServer from "@/lib/ky/kyServer";
import { DirectusResponse, UserProfileType } from "@/lib/type";
import { HTTPError } from "ky";

const singleUserId = async (userId: string) => {
	try {
		const { data } = await kyServer
			.get(`users/${userId}`, {
				searchParams: {
					fields: "*",
				},
			})
			.json<DirectusResponse<UserProfileType>>();

		return {
			data: data,
		};
	} catch (error) {
		if (error instanceof HTTPError) {
			const resError = await error.response.json<{
				error: { message: string }[];
			}>();
			return {
				error: resError?.error?.[0]?.message,
				isError: true,
				data: null,
			};
		} else {
			return {
				error: "Network Error. Please check your connection.",
				isError: true,
				data: null,
			};
		}
	}
};

export default singleUserId;

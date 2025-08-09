import kyServer from "@/lib/ky/kyServer";
import { DirectusResponse, UserProfileType } from "@/lib/type";

import { HTTPError } from "ky";
import { cookies } from "next/headers";

const getAuthProfile = async () => {
	try {
		const token = (await cookies()).get("directus_session_token")
			?.value as string;

		const { data } = await kyServer
			.get(`users/me`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				next: { tags: ["getAuthProfile"] },
				searchParams: {
					fields: "id,first_name,last_name,description,title,avatar,tags",
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

export default getAuthProfile;

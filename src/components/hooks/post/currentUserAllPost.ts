import kyServer from "@/lib/ky/kyServer";
import { DirectusResponse, PostType } from "@/lib/type";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const currentUserAllPost = async () => {
	try {
		const token = (await cookies()).get("directus_session_token")
			?.value as string;

		const { data } = await kyServer
			.get(`items/post`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				next: { tags: ["getAllPost"] },
				searchParams: {
					filter: JSON.stringify({
						user_created: {
							_eq: "$CURRENT_USER",
						},
					}),
				},
			})
			.json<DirectusResponse<PostType[]>>();

		return {
			data: data,
			isError: false,
			error: null,
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

export default currentUserAllPost;

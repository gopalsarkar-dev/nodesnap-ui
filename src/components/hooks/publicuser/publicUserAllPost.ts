import kyClient from "@/lib/ky/kyClient";
import { DirectusResponse, PostType } from "@/lib/type";
import { HTTPError } from "ky";

const publicUserAllPost = async (pId: string) => {
	try {
		const { data } = await kyClient
			.get(`items/post`, {
				next: { tags: ["getAllPost"] },

				searchParams: {
					filter: JSON.stringify({
						user_created: {
							_eq: pId,
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

export default publicUserAllPost;

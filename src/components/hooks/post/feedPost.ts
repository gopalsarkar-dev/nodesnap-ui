import kyClient from "@/lib/ky/kyClient";
import { DirectusResponse, UserpostType } from "@/lib/type";
import { HTTPError } from "ky";

const feedPost = async (pInfo: UserpostType, postImg: File) => {
	try {
		const formData = new FormData();

		formData.append("file", postImg);

		const {
			data: { id },
		} = await kyClient
			.post(`files`, {
				next: { tags: ["feedPost"] },
				body: formData,
			})
			.json<DirectusResponse<{ id: string }>>();

		const postData = {
			post_title: pInfo.post_title,
			post_img: id,
		};

		await kyClient.post(`items/post`, {
			next: { tags: ["postNode"] },

			json: postData,
		});

		return {
			success: true,
			message: "Post Node-Snap Successfully",
		};
	} catch (error) {
		if (error instanceof HTTPError) {
			const respos = await error.response.json<{
				error: { message: string }[];
			}>();

			if (error.response.status === 400 || error.response.status === 401) {
				return {
					success: false,
					message: "Post Node-Snap Faill",
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

export default feedPost;

import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

const deleteAvatar = async (avatarImgId: null | string) => {
	try {
		if (avatarImgId !== null) {
			await kyClient.delete(`files/${avatarImgId}`, {
				next: { tags: ["deleteAvatar"] },
			});
		}

		await kyClient.patch(`users/me`, {
			next: { tags: ["deleteAvatar"] },
			json: {
				avatar: null,
			},
		});

		return {
			success: true,
			message: "Avatar Delet Successfully",
		};
	} catch (error) {
		if (error instanceof HTTPError) {
			const respos = await error.response.json<{
				error: { message: string }[];
			}>();

			if (error.response.status === 400 || error.response.status === 401) {
				return {
					success: false,
					message: "Avatar Delet Faill",
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

export default deleteAvatar;

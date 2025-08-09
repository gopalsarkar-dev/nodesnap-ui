import kyClient from "@/lib/ky/kyClient";
import { DirectusResponse } from "@/lib/type";
import { HTTPError } from "ky";

const updateProfileAvater = async (
	previousAvatarId: null | string,
	avatarImg: File,
) => {
	try {
		if (previousAvatarId !== null) {
			await kyClient.delete(`files/${previousAvatarId}`, {
				next: { tags: ["delet-ProfileAvater"] },
			});
		}

		const formData = new FormData();

		formData.append("fill", avatarImg);

		const {
			data: { id },
		} = await kyClient
			.post(`files`, {
				next: { tags: ["Uplode-ProfileAvater"] },
				body: formData,
			})
			.json<DirectusResponse<{ id: string }>>();

		await kyClient.patch(`users/me`, {
			next: { tags: ["update-ProfileAvater"] },
			json: {
				avatar: id,
			},
		});

		return {
			success: true,
			message: "Avatar Update Successfully",
		};
	} catch (error) {
		if (error instanceof HTTPError) {
			const respos = await error.response.json<{
				error: { message: string }[];
			}>();

			if (error.response.status === 400 || error.response.status === 401) {
				return {
					success: false,
					message: "Avatar Update Faill",
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

export default updateProfileAvater;

import kyClient from "@/lib/ky/kyClient";
import { EditProfileType } from "@/lib/type";
import { HTTPError } from "ky";

const profileAccountUpdate = async (eInfo: EditProfileType) => {
	try {
		await kyClient.patch(`users/me`, {
			next: { tags: ["profileAccountUpdate"] },
			json: eInfo,
		});

		return {
			success: true,
			message: "Profile Account update Successfully",
		};
	} catch (error) {
		if (error instanceof HTTPError) {
			const respos = await error.response.json<{
				error: { message: string }[];
			}>();

			if (error.response.status === 400 || error.response.status === 401) {
				return {
					success: false,
					message: "Profile Account update Faill",
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

export default profileAccountUpdate;

import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

const logOut = async () => {
	try {
		await kyClient.post(`auth/logout`, {
			next: { tags: ["logOut"] },

			json: {
				refresh_token: "",
				mode: "session",
			},
		});

		return {
			success: true,
			message: "User Logout successfully",
		};
	} catch (error) {
		if (error instanceof HTTPError) {
			const respos = await error.response.json<{
				error: { message: string }[];
			}>();

			if (error.response.status === 400 || error.response.status === 401) {
				return {
					success: false,
					message: " User already logout",
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

export default logOut;

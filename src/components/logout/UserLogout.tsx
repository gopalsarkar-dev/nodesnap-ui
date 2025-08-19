"use client";

import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import logOut from "../hooks/authn/logOut";
import { redirectToLogin } from "../hooks/action/actions";

const UserLogout = () => {
	const handelOgoutFn = async () => {
		const { message, success } = await logOut();
		if (!success) {
			toast.error(message);
		}

		if (success) {
			toast.success(message);

			await redirectToLogin();
		}
	};

	return (
		<>
			<div
				className="flex cursor-pointer items-center gap-2 font-semibold text-red-500"
				onClick={handelOgoutFn}>
				<LogOut className="text-red-500" />
				<span>LogOut</span>
			</div>
		</>
	);
};

export default UserLogout;

"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const UserLogout = () => {
	const { push } = useRouter();

	return (
		<>
			<div
				className="flex cursor-pointer items-center gap-2 font-semibold text-red-500"
				onClick={() => push("/auth/login")}>
				<LogOut className="text-red-500" />
				<span>LogOut</span>
			</div>
		</>
	);
};

export default UserLogout;

"use server";

import { redirect } from "next/navigation";

export const redirectToLogin = async () => {
	redirect("/auth/login");
};

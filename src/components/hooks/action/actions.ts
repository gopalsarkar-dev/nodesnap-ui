"use server";

import { redirect } from "next/navigation";

export const redirectToLogin = async () => {
	redirect("/auth/login");
};

export const redirectToHomepage = async () => {
	redirect("/");
};

"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const redirectToLogin = async () => {
	redirect("/auth/login");
};

export const redirectToHomepage = async () => {
	redirect("/");
};

export const reValidateTageProfile = async () => {
	revalidatePath("/profile");
	revalidateTag("update-ProfileAvater");
};

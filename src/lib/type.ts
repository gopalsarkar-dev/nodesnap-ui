import z from "zod";
import {
	editProfileSchema,
	loginFormSchema,
	signupFormSchema,
	userPostSchema,
} from "./zodSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type SignupFormType = z.infer<typeof signupFormSchema>;
export type EditProfileType = z.infer<typeof editProfileSchema>;
export type UserpostType = z.infer<typeof userPostSchema>;

export type DirectusResponse<D> = {
	data: D;
};

export type Data = {
	data: string;
};

export type UserProfileType = {
	id: string;

	first_name: string;

	last_name: null | string;

	title: null | string;

	description: null | string;

	tags: null | string;

	avatar: null | string;
};

export type PostType = {
	id: string;

	user_created: string;

	post_title: string;

	post_img: string;
};

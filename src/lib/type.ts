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

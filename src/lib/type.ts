import z from "zod";
import {
	editProfileSchema,
	loginFormSchema,
	signupFormSchema,
} from "./zodSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type SignupFormType = z.infer<typeof signupFormSchema>;
export type EditProfileType = z.infer<typeof editProfileSchema>;

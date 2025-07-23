import z from "zod";
import { loginFormSchema, signupFormSchema } from "./zodSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type SignupFormType = z.infer<typeof signupFormSchema>;

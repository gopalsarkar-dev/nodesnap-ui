import z from "zod";
import { loginFormSchema } from "./zodSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;

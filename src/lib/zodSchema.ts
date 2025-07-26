import z from "zod";

export const loginFormSchema = z.object({
	email: z.email({ error: "email is required!" }).toLowerCase(),

	password: z
		.string()
		.min(6, {
			error: "Password must have 6 characters or more.",
		})
		.max(20, { error: "Password Maximum have 20 characters or short." }),
});

export const signupFormSchema = z.object({
	first_name: z
		.string()
		.min(3, { error: "first_name must have 3 characters or more." }),
	email: z.email({ error: "email is required!" }).toLowerCase(),

	password: z
		.string()
		.min(6, {
			error: "Password must have 6 characters or more.",
		})
		.max(20, { error: "Password Maximum have 20 characters or short." }),
});

export const editProfileSchema = z.object({
	first_name: z
		.string()
		.min(3, { error: "first_name must have 3 characters or more." }),
	last_name: z.optional(z.string()),
	description: z.optional(z.string()),
	tags: z.optional(z.string()),
});

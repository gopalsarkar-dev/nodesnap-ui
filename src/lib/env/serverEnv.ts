import z from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const serverEnv = createEnv({
	server: {
		DATABASE_API_URL: z.url({ error: "Invalide Url" }),
		API_SECRET_KEY: z.string({ error: "Invalide Api Key" }),
	},

	experimental__runtimeEnv: process.env,

	emptyStringAsUndefined: true,
});

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
	client: {
		NEXT_PUBLIC_DATABASE_API_URL: z.url({ error: "Invalide Url " }),
	},
	runtimeEnv: {
		NEXT_PUBLIC_DATABASE_API_URL: process.env.NEXT_PUBLIC_DATABASE_API_URL,
	},
	emptyStringAsUndefined: true,
});

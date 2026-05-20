import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z
        .enum([
            "development",
            "production",
            "test",
        ])
        .default("development"),

    PORT: z.coerce.number().default(4000),

    DATABASE_URL: z.url(),

    API_PREFIX: z
        .string()
        .default("/api"),
});

const parsedEnv =
    envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error(
        "❌ Invalid environment variables"
    );

    console.error(
        parsedEnv.error.format()
    );

    process.exit(1);
}

export const env = parsedEnv.data;
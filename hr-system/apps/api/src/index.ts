import { createApp } from "./app";
import { env } from "./core/config/env";

async function start() {
    const app = await createApp();

    try {
        await app.listen({
            port: env.PORT,
            host: "0.0.0.0",
        });

        console.log(`API running on port ${env.PORT}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
}

start();
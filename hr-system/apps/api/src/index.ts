import { createApp } from "./app";
import { env } from "./core/config/env";

async function start() {
    const app = await createApp();

    try {
        await app.listen({
            port: Number(env.PORT),
            host: "0.0.0.0",
        });

        app.log.info(`🚀 API running on port ${env.PORT}`);
    } catch (error) {
        app.log.error(error);

        process.exit(1);
    }
}

start();
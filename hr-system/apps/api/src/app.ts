import Fastify from "fastify";

import { loggerConfig } from "./core/server/logger";
import { registerCors } from "./core/plugins/cors";
import { healthRoute } from "./routes/health.route";

export async function createApp() {
    const app = Fastify({
        logger: loggerConfig,
    });

    await registerCors(app);

    await app.register(healthRoute);

    return app;
}
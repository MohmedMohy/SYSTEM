import Fastify from "fastify";

import { loggerConfig } from "./core/server/logger";
import { registerCors } from "./core/plugins/cors";
import { healthRoute } from "./routes/health.route";
import { jobsRoutes } from "./modules/jobs/jobs.route";
export async function createApp() {
    const app = Fastify({
        logger: loggerConfig,
    });

    await registerCors(app);

    await app.register(healthRoute);
    await app.register(jobsRoutes);
    return app;
}
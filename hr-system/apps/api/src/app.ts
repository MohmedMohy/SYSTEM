import Fastify from "fastify";

import { loggerConfig } from "./core/server/logger";
import { registerCors } from "./core/plugins/cors";
import { healthRoute } from "./routes/health.route";
import { jobsRoutes } from "./modules/jobs/jobs.route";
import { templatesRoutes } from "./modules/templates/templates.routes";
import { errorHandlerPlugin } from "./core/plugins/error-handler";
export async function createApp() {
    const app = Fastify({
        logger: loggerConfig,
    });
    await errorHandlerPlugin(app);

    await registerCors(app);

    await app.register(healthRoute);
    await app.register(jobsRoutes);
    app.register(templatesRoutes, {
        prefix: "/templates",
    });
    return app;
}
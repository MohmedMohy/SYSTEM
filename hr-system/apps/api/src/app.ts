import Fastify, { FastifyInstance } from "fastify";

import { loggerConfig } from "./core/server/logger";
import { registerCors } from "./core/plugins/cors";
import { errorHandlerPlugin } from "./core/plugins/error-handler";

import { healthRoute } from "./routes/health.route";
import { jobsRoutes } from "./modules/jobs/jobs.route";
import { templatesRoutes } from "./modules/templates/templates.routes";
import { authRoutes } from "./modules/auth/auth.routes";

export async function createApp() {
    const app = Fastify({
        logger: loggerConfig,
    });

    // ======================
    // Core Plugins
    // ======================
    await errorHandlerPlugin(app);
    await registerCors(app);

    // ======================
    // Routes
    // ======================
    await app.register(healthRoute);

    await app.register(authRoutes, {
        prefix: "/auth",
    });

    await app.register(jobsRoutes, {
        prefix: "/jobs",
    });

    await app.register(templatesRoutes, {
        prefix: "/templates",
    });

    // ======================
    // Auth Decorator (Guard ready)
    // ======================
    app.decorate("authenticate", async (req: any, reply: any) => {
        try {
            await req.jwtVerify();
        } catch (err) {
            return reply.code(401).send({
                message: "Unauthorized",
            });
        }
    });

    return app;
}
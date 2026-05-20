import Fastify from "fastify";
import jwt from "@fastify/jwt";

import { loggerConfig } from "./core/server/logger";
import { registerCors } from "./core/plugins/cors";
import { errorHandlerPlugin } from "./core/plugins/error-handler";
import { jwtOptions } from "./core/utils/jwt";

import { healthRoute } from "./routes/health.route";
import { jobsRoutes } from "./modules/jobs/jobs.route";
import { templatesRoutes } from "./modules/templates/templates.routes";
import { authRoutes } from "./modules/auth/auth.routes";

declare module "fastify" {
    interface FastifyInstance {
        authenticate: any;
    }
}

export async function createApp() {
    const app = Fastify({
        logger: loggerConfig,
    });

    // ======================
    // Core Plugins
    // ======================

    await errorHandlerPlugin(app);

    await registerCors(app);

    await app.register(jwt, jwtOptions);

    // ======================
    // Auth Guard Decorator
    // ======================

    app.decorate(
        "authenticate",
        async function (req: any, reply: any) {
            try {
                await req.jwtVerify();
            } catch (error) {
                return reply.code(401).send({
                    success: false,
                    error: {
                        type: "UNAUTHORIZED",
                        message: "Unauthorized access",
                    },
                });
            }
        }
    );

    // ======================
    // Public Routes
    // ======================

    await app.register(healthRoute);

    await app.register(authRoutes, {
        prefix: "/auth",
    });

    // ======================
    // Protected Routes
    // ======================

    await app.register(async function (protectedApp) {
        protectedApp.addHook(
            "preHandler",
            protectedApp.authenticate
        );

        await protectedApp.register(jobsRoutes, {
            prefix: "/jobs",
        });

        await protectedApp.register(templatesRoutes, {
            prefix: "/templates",
        });
    });

    // ======================
    // Debug Routes
    // ======================

    console.log(app.printRoutes());

    return app;
}
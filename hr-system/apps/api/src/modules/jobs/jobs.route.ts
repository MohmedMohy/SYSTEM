import { FastifyInstance } from "fastify";

import { JobsController } from "./jobs.controller";

const controller = new JobsController();

export async function jobsRoutes(app: FastifyInstance) {
    app.get("/jobs", controller.findAll);

    app.post("/jobs", controller.create);
}
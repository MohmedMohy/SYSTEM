import { FastifyInstance } from "fastify";

import {
    createJobHandler,
    getJobsHandler,
    getJobHandler,
    updateJobHandler,
    deleteJobHandler,
} from "./jobs.controller";

export async function jobsRoutes(app: FastifyInstance) {
    app.post("/", createJobHandler);
    app.get("/", getJobsHandler);
    app.get("/:id", getJobHandler);
    app.put("/:id", updateJobHandler);
    app.delete("/:id", deleteJobHandler);
}
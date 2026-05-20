import { FastifyReply, FastifyRequest } from "fastify";

import { JobsService } from "./jobs.service";
import { createJobSchema } from "./jobs.schema";

const jobsService = new JobsService();

export class JobsController {
    async create(
        request: FastifyRequest,
        reply: FastifyReply
    ) {
        const body = createJobSchema.parse(request.body);

        const job = await jobsService.createJob(body);

        return reply.status(201).send(job);
    }

    async findAll() {
        return jobsService.getJobs();
    }
}
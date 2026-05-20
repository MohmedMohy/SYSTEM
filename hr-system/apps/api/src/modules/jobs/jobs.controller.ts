import { FastifyRequest, FastifyReply } from "fastify";
import {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob,
} from "./jobs.service";

import { createJobSchema } from "./jobs.schema";

export const createJobHandler = async (
    req: FastifyRequest,
    reply: FastifyReply
) => {
    const data = createJobSchema.parse(req.body);

    const job = await createJob(data);

    return reply.send({
        success: true,
        data: job,
    });
};

export const getJobsHandler = async (_req: FastifyRequest, reply: FastifyReply) => {
    const jobs = await getJobs();

    return reply.send({
        success: true,
        data: jobs,
    });
};

export const getJobHandler = async (req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as any;

    const job = await getJobById(id);

    return reply.send({
        success: true,
        data: job,
    });
};

export const updateJobHandler = async (req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as any;
    const data = req.body as any;

    const job = await updateJob(id, data);

    return reply.send({
        success: true,
        data: job,
    });
};

export const deleteJobHandler = async (req: FastifyRequest, reply: FastifyReply) => {
    const { id } = req.params as any;

    await deleteJob(id);

    return reply.send({
        success: true,
        message: "Job deleted",
    });
};
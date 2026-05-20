import { prisma } from "@hr/db";

import { CreateJobInput } from "./jobs.schema";

export class JobsRepository {
    async create(data: CreateJobInput) {
        return prisma.job.create({
            data,
        });
    }

    async findAll() {
        return prisma.job.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }
}
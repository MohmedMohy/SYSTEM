import { prisma } from "../../lib/prisma";

export const createJob = async (data: any) => {
    return prisma.job.create({
        data,
    });
};

export const getJobs = async () => {
    return prisma.job.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};

export const getJobById = async (id: string) => {
    return prisma.job.findUnique({
        where: { id },
    });
};

export const updateJob = async (id: string, data: any) => {
    return prisma.job.update({
        where: { id },
        data,
    });
};

export const deleteJob = async (id: string) => {
    return prisma.job.delete({
        where: { id },
    });
};
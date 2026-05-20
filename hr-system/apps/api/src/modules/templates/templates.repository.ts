import { prisma } from "@hr/db";

import {
    CreateTemplateInput,
    UpdateTemplateInput,
} from "./templates.schema";

export class TemplatesRepository {
    async findAll() {
        return prisma.template.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async findById(id: string) {
        return prisma.template.findUnique({
            where: {
                id,
            },
        });
    }

    async create(data: CreateTemplateInput) {
        return prisma.template.create({
            data,
        });
    }

    async update(
        id: string,
        data: UpdateTemplateInput
    ) {
        return prisma.template.update({
            where: {
                id,
            },

            data,
        });
    }

    async delete(id: string) {
        return prisma.template.delete({
            where: {
                id,
            },
        });
    }
}
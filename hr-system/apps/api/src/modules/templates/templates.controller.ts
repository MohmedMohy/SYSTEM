import {
    FastifyReply,
    FastifyRequest,
} from "fastify";

import { TemplatesService } from "./templates.service";
import { successResponse } from "../../shared/response";

import {
    createTemplateSchema,
    updateTemplateSchema,
} from "./templates.schema";

const service = new TemplatesService();

export class TemplatesController {
    async getAll(
        request: FastifyRequest,
        reply: FastifyReply
    ) {
        const templates =
            await service.getTemplates();

        return reply.send(successResponse(templates));
    }

    async getOne(
        request: FastifyRequest<{
            Params: {
                id: string;
            };
        }>,
        reply: FastifyReply
    ) {
        const template =
            await service.getTemplate(
                request.params.id
            );

        return reply.send(successResponse(template));
    }

    async create(
        request: FastifyRequest,
        reply: FastifyReply
    ) {
        const body =
            createTemplateSchema.parse(
                request.body
            );

        const template =
            await service.createTemplate(body);

        return reply.code(201).send(successResponse(template));
    }

    async update(
        request: FastifyRequest<{
            Params: {
                id: string;
            };
        }>,
        reply: FastifyReply
    ) {
        const body =
            updateTemplateSchema.parse(
                request.body
            );

        const template =
            await service.updateTemplate(
                request.params.id,
                body
            );

        return reply.send(successResponse(template));
    }

    async delete(
        request: FastifyRequest<{
            Params: {
                id: string;
            };
        }>,
        reply: FastifyReply
    ) {
        await service.deleteTemplate(
            request.params.id
        );

        return reply.code(204).send(successResponse(null)   );
    }
}
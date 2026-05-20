import {
    FastifyError,
    FastifyInstance,
    FastifyReply,
    FastifyRequest,
} from "fastify";

import { ZodError } from "zod";
import { errorResponse } from "../../shared/response";

export async function errorHandlerPlugin(app: FastifyInstance) {
    app.setErrorHandler(
        (
            error: FastifyError,
            request: FastifyRequest,
            reply: FastifyReply
        ) => {
            // Log structured error (Fastify logger instead of console)
            request.log.error(
                {
                    err: error,
                    url: request.url,
                    method: request.method,
                },
                "Request error"
            );

            /**
             * =========================
             * ZOD VALIDATION ERROR
             * =========================
             */
            if (error instanceof ZodError) {
                return reply.status(400).send(
                    errorResponse("VALIDATION_ERROR", "Validation failed", {
                        fields: error.issues.map((issue) => ({
                            field: issue.path.join("."),
                            message: issue.message,
                        })),
                    })
                );
            }

            /**
             * =========================
             * NOT FOUND ERROR
             * =========================
             */
            if (error.statusCode === 404) {
                return reply.status(404).send(
                    errorResponse("NOT_FOUND", "Resource not found")
                );
            }

            /**
             * =========================
             * AUTH / JWT ERRORS
             * =========================
             */
            if (error.statusCode === 401) {
                return reply.status(401).send(
                    errorResponse("UNAUTHORIZED", "Unauthorized access")
                );
            }

            /**
             * =========================
             * DEFAULT ERROR
             * =========================
             */
            return reply.status(500).send(
                errorResponse(
                    "INTERNAL_SERVER_ERROR",
                    error.message || "Something went wrong"
                )
            );
        }
    );
}
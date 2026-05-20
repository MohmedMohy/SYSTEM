import {
    FastifyError,
    FastifyInstance,
    FastifyReply,
    FastifyRequest,
} from "fastify";

import { ZodError } from "zod";

import { errorResponse } from "../../shared/response";

export async function errorHandlerPlugin(
    app: FastifyInstance
) {
    app.setErrorHandler(
        (
            error: FastifyError,
            request: FastifyRequest,
            reply: FastifyReply
        ) => {
            console.error(error);

            // ZOD VALIDATION ERRORS
            if (error instanceof ZodError) {
                return reply.status(400).send(
                    errorResponse(
                        "VALIDATION_ERROR",

                        "Validation failed",

                        error.issues.map((issue) => ({
                            field: issue.path.join("."),

                            message: issue.message,
                        }))
                    )
                );
            }

            // NOT FOUND
            if (error.statusCode === 404) {
                return reply.status(404).send(
                    errorResponse(
                        "NOT_FOUND",

                        "Resource not found"
                    )
                );
            }

            // GENERIC ERRORS
            return reply.status(500).send(
                errorResponse(
                    "INTERNAL_SERVER_ERROR",

                    error.message ||
                    "Something went wrong"
                )
            );
        }
    );
}
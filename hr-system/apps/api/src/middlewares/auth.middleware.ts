import { FastifyRequest, FastifyReply } from "fastify";

export async function authMiddleware(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {
        await request.jwtVerify();
    } catch (err) {
        return reply.status(401).send({
            success: false,
            error: {
                type: "UNAUTHORIZED",
                message: "Unauthorized access",
            },
        });
    }
}
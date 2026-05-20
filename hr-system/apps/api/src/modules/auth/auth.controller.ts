import { FastifyRequest, FastifyReply } from "fastify";
import { createUser, validateUser } from "./auth.service";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = req.body as any;

    const user = await createUser(email, password);

    return reply.send(user);
};

export const login = async (req: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = req.body as any;

    const user = await validateUser(email, password);

    if (!user) {
        return reply.code(401).send({ message: "Invalid credentials" });
    }

    const token = req.server.jwt.sign({
        userId: user.id,
    });

    return reply.send({ token });
};
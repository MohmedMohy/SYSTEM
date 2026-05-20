import { FastifyInstance } from "fastify";

export async function authPlugin(app: FastifyInstance) {
    app.decorate("authenticate", async (req: any, reply: any) => {
        try {
            await req.jwtVerify();
        } catch (err) {
            reply.code(401).send({ message: "Unauthorized" });
        }
    });
}
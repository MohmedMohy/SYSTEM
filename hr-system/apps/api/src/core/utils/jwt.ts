import jwt from "@fastify/jwt";

export const jwtOptions = {
    secret: process.env.JWT_SECRET || "secret",
};
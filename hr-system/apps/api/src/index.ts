import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

app.register(cors);

app.get("/health", async () => {
    return { status: "ok", service: "hr-api" };
});

app.listen({ port: 4000, host: "0.0.0.0" }, () => {
    console.log("API running on http://localhost:4000");
});
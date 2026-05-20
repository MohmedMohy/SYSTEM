import { FastifyInstance } from "fastify";

import { TemplatesController } from "./templates.controller";

const controller = new TemplatesController();

export async function templatesRoutes(
    app: FastifyInstance
) {
    app.get("/", controller.getAll);

    app.get("/:id", controller.getOne);

    app.post("/", controller.create);

    app.patch("/:id", controller.update);

    app.delete("/:id", controller.delete);
}
import { z } from "zod";

export const createTemplateSchema = z.object({
    name: z
        .string()
        .min(3, "Name is too short"),

    platform: z
        .string()
        .min(2, "Platform is required"),

    content: z
        .string()
        .min(10, "Content is too short"),
});

export const updateTemplateSchema =
    createTemplateSchema.partial();

export type CreateTemplateInput =
    z.infer<typeof createTemplateSchema>;

export type UpdateTemplateInput =
    z.infer<typeof updateTemplateSchema>;
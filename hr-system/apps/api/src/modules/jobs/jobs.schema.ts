import { z } from "zod";

export const createJobSchema = z.object({
    title: z.string().min(3),
    company: z.string().optional(),
    location: z.string().optional(),
});

export type CreateJobInput = z.infer<typeof createJobSchema>;
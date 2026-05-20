import { z } from "zod";

export const createJobSchema = z.object({
    title: z.string().min(2),
    department: z.string().optional(),
    location: z.string().optional(),
    type: z.string(),
    description: z.string().min(10),
});
export interface Job {
    id: string;
    title: string;
    company?: string;
    location?: string;
    createdAt: string;
}

export interface CreateJobInput {
    title: string;
    company?: string;
    location?: string;
}
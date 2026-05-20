import { CreateJobInput, Job } from "../types/jobs.types";

const API_URL = "http://localhost:4000";

export async function getJobs(): Promise<Job[]> {
    const response = await fetch(`${API_URL}/jobs`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch jobs");
    }

    return response.json();
}

export async function createJob(
    data: CreateJobInput
): Promise<Job> {
    const response = await fetch(`${API_URL}/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to create job");
    }

    return response.json();
}
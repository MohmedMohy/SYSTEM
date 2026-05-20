import { CreateJobInput } from "./jobs.schema";
import { JobsRepository } from "./jobs.repository";

export class JobsService {
    private repository = new JobsRepository();

    async createJob(data: CreateJobInput) {
        return this.repository.create(data);
    }

    async getJobs() {
        return this.repository.findAll();
    }
}
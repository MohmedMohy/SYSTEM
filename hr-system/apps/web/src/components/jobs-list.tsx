import { Job } from "../types/jobs.types";
import { JobCard } from "./job-card";

interface Props {
    jobs: Job[];
}

export function JobsList({ jobs }: Props) {
    if (!jobs.length) {
        return (
            <div className="rounded-xl border border-dashed border-gray-600 p-10 text-center text-gray-400">
                No jobs found
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}
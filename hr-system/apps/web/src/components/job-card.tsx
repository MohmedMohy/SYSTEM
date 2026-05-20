import { Job } from "../types/jobs.types";

interface Props {
    job: Job;
}

export function JobCard({ job }: Props) {
    return (
        <div className="rounded-xl border border-gray-700 bg-[#16213b] p-5">
            <h3 className="text-xl font-bold text-white">
                {job.title}
            </h3>

            <div className="mt-3 space-y-1 text-sm text-gray-300">
                <p>
                    <span className="font-semibold">Company:</span>{" "}
                    {job.company || "N/A"}
                </p>

                <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {job.location || "N/A"}
                </p>
            </div>
        </div>
    );
}
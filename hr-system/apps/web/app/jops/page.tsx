import { CreateJobForm } from "../../src/components/create-job-form";
import { JobsList } from "../../src/components/jobs-list";

import { getJobs } from "../../src/services/jobs.service";
import { DashboardShell } from "../../src/layout/dashboard-shell";
export default async function JobsPage() {
    const jobs = await getJobs();

    return (
        <DashboardShell>
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Jobs Dashboard
                    </h1>

                    <p className="mt-2 text-gray-400">
                        Manage recruitment opportunities
                    </p>
                </div>

                <CreateJobForm />

                <JobsList jobs={jobs} />
            </div>
        </DashboardShell>
    );
}
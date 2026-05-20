import { CreateJobForm } from "../../web/src/components/create-job-form";
import { JobsList } from "../../web/src/components/jobs-list";

import { getJobs } from "../../web/src/services/jobs.service";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-[#0b1120] p-10">
      <div className="mx-auto max-w-7xl space-y-10">
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
    </main>
  );
}
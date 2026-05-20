import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { CreateJobForm } from "../src/components/create-job-form";
import { JobsList } from "../src/components/jobs-list";
import { getJobs } from "../src/services/jobs.service";
import { DashboardShell } from "../src/layout/dashboard-shell";
import { Job } from "../src/types/jobs.types";

/**
 * AUTH GUARD (Server Component safe)
 */
async function checkAuth(): Promise<string> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/");
  }

  return token;
}

/**
 * PAGE
 */
export default async function JobsPage() {
  await checkAuth();

  let jobs: Job[] = [];

  try {
    jobs = await getJobs();
  } catch (err) {
    console.error("Jobs fetch failed:", err);
    jobs = [];
  }

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
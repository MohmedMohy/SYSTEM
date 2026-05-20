"use client";

import { useState } from "react";

import { createJob } from "../services/jobs.service";

export function CreateJobForm() {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        try {
            setLoading(true);

            await createJob({
                title,
                company,
                location,
            });

            setTitle("");
            setCompany("");
            setLocation("");

            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Failed to create job");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-gray-700 bg-[#16213b] p-6"
        >
            <h2 className="text-2xl font-bold text-white">
                Create Job
            </h2>

            <input
                type="text"
                placeholder="Job Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-[#0f172a] px-4 py-3 text-white outline-none"
            />

            <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-[#0f172a] px-4 py-3 text-white outline-none"
            />

            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-[#0f172a] px-4 py-3 text-white outline-none"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
                {loading ? "Creating..." : "Create Job"}
            </button>
        </form>
    );
}
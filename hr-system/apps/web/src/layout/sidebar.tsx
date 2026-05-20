import { Navigation } from "./navigation";

export function Sidebar() {
    return (
        <aside className="hidden w-[260px] border-r border-[#1e293b] bg-[#0f172a] p-6 lg:block">
            <div className="space-y-8">
                <div>
                    <h1 className="text-2xl font-bold text-white">
                        HR System
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        Recruitment Platform
                    </p>
                </div>

                <Navigation />
            </div>
        </aside>
    );
}
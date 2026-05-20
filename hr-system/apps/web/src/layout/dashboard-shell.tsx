import { ReactNode } from "react";

import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

interface Props {
    children: ReactNode;
}

export function DashboardShell({
    children,
}: Props) {
    return (
        <div className="flex min-h-screen bg-[#020817]">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Topbar />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
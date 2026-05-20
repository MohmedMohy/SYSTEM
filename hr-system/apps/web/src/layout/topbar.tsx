export function Topbar() {
    return (
        <header className="flex h-[72px] items-center justify-between border-b border-[#1e293b] bg-[#0b1120] px-6">
            <div>
                <h2 className="text-xl font-semibold text-white">
                    Dashboard
                </h2>

                <p className="text-sm text-gray-400">
                    HR Operations Panel
                </p>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    M
                </div>
            </div>
        </header>
    );
}
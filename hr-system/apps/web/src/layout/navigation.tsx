import Link from "next/link";

const navigationItems = [
    {
        label: "Dashboard",
        href: "/",
    },
    {
        label: "Jobs",
        href: "/jobs",
    },
    {
        label: "Candidates",
        href: "/candidates",
    },
    {
        label: "Templates",
        href: "/templates",
    },
    {
        label: "Settings",
        href: "/settings",
    },
];

export function Navigation() {
    return (
        <nav className="space-y-2">
            {navigationItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-[#1b2942] hover:text-white"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
}
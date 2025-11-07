import Link from "next/link";

const navItems = [
    {name: 'Home', href: '/'},
    {name: 'Blog', href: 'blog'},
    {name: 'Projects', href: '/projects'},
    {name: 'About', href: '/about'},
    {name: 'Misc', href: '/misc'},
];

export default function Sidebar() {
    return (
        <aside className="w-48 p-6 border-r border-gray-800">
            <h1 className="mb-8 text-x1 font-bold">BLOGIFY</h1>
            <nav className="space-y-3">
                {navItems.map((item) => (
                    <Link
                    key={item.href}
                    href={item.href}
                    className="block hover:text-cyan-400 transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}

            </nav>
        </aside>
    );
}
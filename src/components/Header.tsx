import Link from "next/link";
import { NavLinks } from "@/components/NavLinks";

const headerLinks = [
  { href: "/", label: "Home" },
  { href: "/signup", label: "Signup" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-xl font-semibold text-gray-900 dark:text-white">NextApp</span>
        </Link>
        <NavLinks links={headerLinks} />
      </div>
    </header>
  );
};

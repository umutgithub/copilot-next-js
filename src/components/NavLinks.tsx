import Link from "next/link";

type NavLinkItem = {
  href: string;
  label: string;
};

interface NavLinksProps {
  links: NavLinkItem[];
  className?: string;
  linkClassName?: string;
}

export const NavLinks = ({ links, className = "flex gap-6", linkClassName = "" }: NavLinksProps) => {
  return (
    <nav className={className}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${linkClassName}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

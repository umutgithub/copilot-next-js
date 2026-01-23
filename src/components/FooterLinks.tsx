type FooterLinkItem = {
  href: string;
  label: string;
};

interface FooterLinksProps {
  links: FooterLinkItem[];
  className?: string;
  linkClassName?: string;
}

export const FooterLinks = ({ links, className = "flex gap-6", linkClassName = "" }: FooterLinksProps) => {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={`${link.href}-${link.label}`}
          href={link.href}
          className={`text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors ${linkClassName}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

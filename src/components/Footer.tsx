import { FooterLinks } from "@/components/FooterLinks";

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} NextApp. All rights reserved.
          </p>
          <FooterLinks links={footerLinks} />
        </div>
      </div>
    </footer>
  );
};

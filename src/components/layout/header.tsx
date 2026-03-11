import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-heading text-lg font-bold text-primary-400 transition-colors hover:text-primary-300"
        >
          SV
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_ITEMS.map(({ label, href }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary-400"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border/50 md:hidden"
            role="list"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

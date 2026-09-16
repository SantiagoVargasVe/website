import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useActiveSection } from "@/hooks/use-active-section";
import { socialLinks } from "@/data/social";

const items = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = useActiveSection();
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <nav className="shell nav" aria-label="Main navigation">
        <a
          className="wordmark"
          href="#hero"
          onClick={() => setOpen(false)}
          aria-label="Santiago Vargas, home"
        >
          sv<span>✳</span>
        </a>
        <div className="desktop-nav">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href={socialLinks[2].url}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="nav-controls">
          <ThemeSwitcher />
          <button
            ref={toggle}
            className="menu-toggle icon-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className="mobile-nav" hidden={!open}>
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href={socialLinks[2].url} onClick={() => setOpen(false)}>
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}

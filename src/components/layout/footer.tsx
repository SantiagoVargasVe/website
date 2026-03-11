import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/social";

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Santiago Vargas
        </p>

        <ul className="flex items-center gap-4" role="list" aria-label="Social links">
          {socialLinks.map(({ label, url, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <li key={label}>
                <a
                  href={url}
                  target={url.startsWith("mailto") ? undefined : "_blank"}
                  rel={url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground transition-colors hover:text-primary-400"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

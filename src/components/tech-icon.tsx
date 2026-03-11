import { cn } from "@/lib/utils";
import { Bot } from "lucide-react";

const ICON_URLS: Record<string, string> = {
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className }: TechIconProps) {
  if (name === "claude") {
    return <Bot className={cn("select-none text-primary-400", className)} />;
  }

  const url = ICON_URLS[name];
  if (!url) return null;

  return (
    <img
      src={url}
      alt={name}
      loading="lazy"
      className={cn("select-none", className)}
    />
  );
}

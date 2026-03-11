import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "about",
  "tech-stack",
  "experience",
  "education",
  "projects",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

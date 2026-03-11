import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, ChevronDown, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { educationList } from "@/data/education";
import { cn } from "@/lib/utils";

export function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <Section id="education" title="Education">
      <div className="space-y-5">
        {educationList.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-xl border border-border/50 bg-card"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between p-6 text-left"
              aria-expanded={openIndex === i}
            >
              <div className="flex items-start gap-3">
                <GraduationCap
                  size={20}
                  className="mt-0.5 shrink-0 text-primary-400"
                />
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="mt-0.5 text-xs font-mono text-primary-400">
                    {edu.startYear} &mdash; {edu.endYear}
                  </p>
                </div>
              </div>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-muted-foreground transition-transform duration-200",
                  openIndex === i && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 border-t border-border/50 px-6 pb-6 pt-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {edu.description}
                    </p>
                    {edu.courses && (
                      <ul className="grid gap-2 sm:grid-cols-2" role="list">
                        {edu.courses.map((course) => (
                          <li
                            key={course}
                            className="text-sm text-muted-foreground before:mr-2 before:text-primary-500 before:content-['▸']"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    )}
                    {edu.link && (
                      <a
                        href={edu.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
                      >
                        {edu.link.label}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

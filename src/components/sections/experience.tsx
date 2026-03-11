import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Section } from "@/components/layout/section";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative ml-4 border-l-2 border-primary-700/40 pl-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="relative mb-14 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary-500 ring-4 ring-background" />

            <div className="flex items-start gap-3">
              <Briefcase size={18} className="mt-0.5 shrink-0 text-primary-400" />
              <div className="min-w-0">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {exp.company}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {exp.type}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {exp.roles.map((role) => (
                <div key={role.title} className="rounded-lg border border-border/50 bg-card p-5">
                  <p className="font-medium text-foreground">{role.title}</p>
                  <p className="mt-0.5 text-xs font-mono text-primary-400">
                    {role.startDate} &mdash; {role.endDate}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

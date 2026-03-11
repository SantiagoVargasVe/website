import { motion } from "motion/react";
import { Section } from "@/components/layout/section";
import { techStack } from "@/data/tech-stack";
import { TechIcon } from "@/components/tech-icon";

export function TechStack() {
  return (
    <Section id="tech-stack" title="Tech Stack">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center gap-4 rounded-xl border border-border/50 bg-card px-6 py-8 transition-colors hover:border-primary-500/50"
          >
            <TechIcon name={tech.icon} className="h-10 w-10" />
            <span className="text-sm font-medium text-foreground">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

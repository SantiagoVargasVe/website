import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("py-20 md:py-28", className)}
    >
      {title && (
        <h2 className="mb-12 font-heading text-2xl font-bold text-primary-400 md:text-3xl">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}

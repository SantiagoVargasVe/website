import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/layout/section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-7 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-xl border border-border/50 bg-card p-7 transition-colors hover:border-primary-500/50"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {project.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-950/50 px-2.5 py-0.5 text-xs font-medium text-primary-300 ring-1 ring-primary-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-4 border-t border-border/30 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary-400"
                  aria-label={`Visit ${project.title} live site`}
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary-400"
                  aria-label={`View ${project.title} source code`}
                >
                  <Github size={14} />
                  Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

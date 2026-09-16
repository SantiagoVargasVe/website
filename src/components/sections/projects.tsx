import { ArrowUpRight, Github, LockKeyhole, Server } from "lucide-react";
import { Section } from "@/components/layout/section";
import { ProjectArt } from "@/components/project-art";
import { projects, earlierProjects, hostedServices } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      label="01 / Selected work"
      title="Made to be used."
      description="Personal projects that started with a simple thought: this could be a little easier."
    >
      <div className="project-grid">
        {projects.map((project, i) => (
          <article className="project-card" key={project.title}>
            {project.visual && <ProjectArt kind={project.visual} />}
            <div className="project-copy">
              <p className="eyebrow project-category">
                0{i + 1} / {project.category}
              </p>
              <h3>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                  <ArrowUpRight size={24} />
                </a>
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  Open project <ArrowUpRight size={15} />
                </a>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github size={15} /> Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="homelab">
        <div className="homelab-intro">
          <span className="eyebrow">
            <Server size={15} /> The home server
          </span>
          <h3>A small cloud of my own.</h3>
          <p>
            I also run a collection of open-source services for everyday life.
            Built by their communities, self-hosted and maintained by me.
          </p>
        </div>
        <div className="service-list">
          {hostedServices.map((service) => (
            <a
              key={service.host}
              href={`https://${service.host}.santiagovargas.co/`}
              target="_blank"
              rel="noopener noreferrer"
              className="service"
            >
              <div>
                <strong>{service.title}</strong>
                <span>{service.description}</span>
              </div>
              <span className="service-access">
                <LockKeyhole size={12} />
                {service.access}
                <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>
      <details className="archive">
        <summary>
          Earlier explorations{" "}
          <span>
            {earlierProjects.length} projects <span aria-hidden="true">＋</span>
          </span>
        </summary>
        <div className="archive-grid">
          {earlierProjects.map((project) => (
            <article key={project.title}>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.repoUrl && (
                <a
                  className="text-link"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code <ArrowUpRight size={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </details>
    </Section>
  );
}

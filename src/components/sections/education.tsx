import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { educationList } from "@/data/education";

export function Education() {
  return (
    <Section
      id="education"
      label="04 / Education"
      title="A foundation to build on."
    >
      <div className="education-grid">
        {educationList.map((edu) => (
          <article className="education-card" key={edu.institution}>
            <p className="eyebrow">
              {edu.startYear} — {edu.endYear}
            </p>
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p>{edu.description}</p>
            <details>
              <summary>
                Selected coursework <span aria-hidden="true">＋</span>
              </summary>
              <ul>
                {edu.courses?.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </details>
            {edu.link && (
              <a
                className="text-link"
                href={edu.link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {edu.link.label} <ArrowUpRight size={14} />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

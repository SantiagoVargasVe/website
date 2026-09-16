import { Section } from "@/components/layout/section";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      label="03 / Experience"
      title="Where I’ve contributed."
      description="From early-stage products to established teams. Always something new to learn."
    >
      <div className="experience-list">
        {experiences.map((exp) => (
          <article className="experience-row" key={exp.company}>
            <div className="experience-company">
              <h3>{exp.company}</h3>
              <p>{exp.type}</p>
              {exp.location && <p>{exp.location}</p>}
            </div>
            <div className="experience-roles">
              {exp.roles.map((role) => (
                <div key={role.title}>
                  <div className="role-heading">
                    <h4>{role.title}</h4>
                    <span>
                      {role.startDate} — {role.endDate}
                    </span>
                  </div>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

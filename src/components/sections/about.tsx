import { Section } from "@/components/layout/section";
import { techStack } from "@/data/tech-stack";

export function About() {
  return (
    <Section
      id="about"
      label="02 / A little about me"
      title="Curiosity, put to work."
    >
      <div className="about-grid">
        <p className="about-lead">
          I like understanding how things work.
          <br />
          <span className="serif">Then making them work better.</span>
        </p>
        <div className="about-copy">
          <p>
            I’m a software engineer based in Bogotá, Colombia, with a degree in
            Systems & Computer Engineering from Universidad de los Andes. My
            work centers on React and TypeScript, with an eye for the details
            that make an interface feel right.
          </p>
          <p>
            I’ve built products across consulting, fintech, and full-stack
            development. I enjoy connecting a clear user experience to the
            systems that make it possible.
          </p>
          <p>
            Outside work, that same curiosity shows up in personal apps and a
            home server. I’m also exploring AI-assisted development as part of a
            hands-on process: build, try it, refine it.
          </p>
          <div id="tech-stack" className="toolbox">
            <p className="eyebrow">Tools I work with</p>
            <div className="tags">
              {techStack.map((tech) => (
                <span key={tech.name}>{tech.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

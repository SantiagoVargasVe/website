import { Section } from "@/components/layout/section";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-2xl space-y-5 text-base text-muted-foreground leading-relaxed">
        <p>
          My name is Santiago Vargas and I enjoy building technological
          solutions. Software development has been my passion since I was a
          child&mdash;back then I liked to hack things like video games and
          install keyloggers so I could get access to my parents&apos; accounts
          and play more games.
        </p>
        <p>
          I&apos;m a systems and computer engineer from{" "}
          <a
            href="https://www.topuniversities.com/universities/universidad-de-los-andes"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-400 underline decoration-primary-400/30 underline-offset-4 transition-colors hover:text-primary-300"
          >
            Universidad de los Andes
          </a>
          . I specialize in frontend development with React and TypeScript, and
          I love creating clean, performant, and accessible web experiences.
        </p>
        <p>
          Lately I&apos;ve been diving deep into the AI-assisted development
          space&mdash;leveraging tools like{" "}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary-400 underline decoration-primary-400/30 underline-offset-4 transition-colors hover:text-primary-300"
          >
            Claude Code
          </a>{" "}
          and AI-powered workflows to ship faster and explore new ways of
          building software. I&apos;m passionate about the intersection of
          developer experience and artificial intelligence.
        </p>
      </div>
    </Section>
  );
}

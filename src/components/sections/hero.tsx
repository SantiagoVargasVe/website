import { motion } from "motion/react";
import { useTypewriter } from "@/hooks/use-typewriter";
import avatarUrl from "@/assets/avatar.webp";

const WORDS = [
  "software engineer",
  "problem solver",
  "team player",
  "frontend specialist",
  "lifelong learner",
];

export function Hero() {
  const typedText = useTypewriter({ words: WORDS });

  return (
    <section
      id="hero"
      className="flex min-h-[80vh] flex-col items-center justify-center gap-10 py-20 md:flex-row md:gap-16"
    >
      <motion.img
        src={avatarUrl}
        alt="Santiago Vargas"
        width={220}
        height={220}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="aspect-square w-44 rounded-full object-cover ring-4 ring-primary-500/30 md:w-56"
      />

      <div className="text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-2 text-sm font-medium tracking-wider text-primary-400 uppercase"
        >
          Hi there, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl"
        >
          Santiago Vargas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-lg text-muted-foreground md:text-xl"
        >
          I&apos;m a{" "}
          <span className="font-mono font-medium text-primary-400">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
        >
          <a
            href="#projects"
            className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-500"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary-500 hover:text-foreground"
          >
            My Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
}

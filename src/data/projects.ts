import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Speaking Samba",
    description:
      "A science-based language learning app for Brazilian Portuguese featuring a 12-month roadmap, daily tasks, progress tracking, and spaced repetition flashcards.",
    tags: ["React", "TypeScript", "Language Learning", "Spaced Repetition"],
    liveUrl: "https://samba.santiagovargas.co/",
  },
  {
    title: "Truever",
    description:
      "A browser extension that detects fake news using AI. Built during a hackathon at Universidad de los Andes, it crawls news content and categorizes articles as fake, biased, or clickbait.",
    tags: ["JavaScript", "Django", "PostgreSQL", "AI", "Browser Extension"],
  },
  {
    title: "Community App",
    description:
      "A Flutter mobile app that helps first-semester university students form support networks through interest-based communities with real-time chat, feeds, and event calendars.",
    tags: ["Flutter", "Firebase", "Dart", "Material Design", "Real-time"],
  },
  {
    title: "Twitter-Spotify Bot",
    description:
      "A Node.js bot that automatically updates your Twitter bio with the song currently playing on Spotify, mimicking the classic MSN Messenger feature.",
    tags: ["Node.js", "Express", "Twitter API", "Spotify API"],
    repoUrl: "https://github.com/santiagovargasve/spotify-twitter-bot",
  },
];

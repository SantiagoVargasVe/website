import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Cuadre",
    category: "Shared expenses",
    visual: "cuadre",
    description:
      "Enjoy the trip. Settle up simply. A shared ledger for group expenses, with flexible splits, multiple currencies, and fewer transfers at the end.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://cuadre.santiagovargas.co/",
    repoUrl: "https://github.com/SantiagoVargasVe/cuadre",
  },
  {
    title: "Stillroom",
    category: "Creative tools",
    visual: "stillroom",
    description:
      "A little room for your images. Crop and adjust photos, develop RAW files, or capture a frame from a video. Your media stays in your browser.",
    tags: ["React", "WebAssembly", "Browser-local"],
    liveUrl: "https://stillroom.santiagovargas.co/",
    repoUrl: "https://github.com/SantiagoVargasVe/stillroom",
  },
  {
    title: "Wishlist",
    category: "Thoughtful gifting",
    visual: "wishlist",
    description:
      "Less guessing, better gifts. Collect things you love, share a list, and coordinate with friends and family without spoiling the surprise.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://wish.santiagovargas.co/",
    repoUrl: "https://github.com/SantiagoVargasVe/wishlist",
  },
  {
    title: "Viajes",
    category: "Travel planning",
    visual: "trips",
    description:
      "The right place, at the right time. Explore a month-by-month guide to 30 regions across nine destinations, then find flights from your home airport.",
    tags: ["Interactive guide", "JavaScript", "Self-hosted"],
    liveUrl: "https://trips.santiagovargas.co/",
  },
];

export const earlierProjects: Project[] = [
  {
    title: "Truever",
    category: "Hackathon project",
    description:
      "An AI-assisted browser extension exploring how to identify misleading news, built at Universidad de los Andes.",
    tags: ["JavaScript", "Django"],
  },
  {
    title: "Community App",
    category: "University project",
    description:
      "A Flutter app helping new university students find their people through shared interests, chat, and events.",
    tags: ["Flutter", "Firebase"],
  },
  {
    title: "Twitter–Spotify Bot",
    category: "API experiment",
    description:
      "A small nod to MSN Messenger: a bot that shared your currently playing Spotify track in your Twitter bio.",
    tags: ["Node.js", "Spotify API"],
    repoUrl: "https://github.com/santiagovargasve/spotify-twitter-bot",
  },
];

export const homelabCapabilities = [
  {
    title: "Private cloud",
    description: "Files, collaboration & family photo storage",
  },
  {
    title: "Document tools",
    description: "Useful workflows that keep documents at home",
  },
  {
    title: "Observability",
    description: "Health, resource metrics & container logs",
  },
  {
    title: "Platform",
    description: "Docker, private networking & automated deployments",
  },
];

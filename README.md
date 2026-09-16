# Santiago Vargas · Personal website

A personal portfolio built with React, TypeScript, TanStack Router, and Vite. Warm editorial typography, responsive layouts, light/dark themes, and lightweight CSS project illustrations.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
npx playwright install chromium
npm test
npm run format:check
```

The browser suite runs against a production build on desktop and mobile. It checks project destinations, navigation, expandable content, theme persistence, horizontal overflow, keyboard behavior, reduced motion, and automated WCAG accessibility rules. External service uptime is not part of this suite.

## Content

- `src/data/projects.ts`: four public personal apps, earlier explorations, and a capability-level overview of the private home server. Private service names and hostnames are deliberately omitted.
- `src/data/experience.ts`, `education.ts`, and `social.ts`: biography and contact details.
- `src/components/project-art.tsx` and `src/project-art.css`: decorative illustrations with fictional sample content, not product screenshots or user data.
- `src/index.css`: layout, responsive breakpoints, theme tokens, and reduced-motion rules.

`npm run build` produces the static site in `dist/`. Deploy through the repository's existing hosting workflow. The portfolio does not require a backend or environment secrets.

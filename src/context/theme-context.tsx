import { createContext, useCallback, useContext, useState } from "react";
import type { Palette } from "@/types";

interface ThemeContextValue {
  palette: Palette;
  setPalette: (palette: Palette) => void;
  cyclePalette: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const PALETTES: Palette[] = ["blue", "teal", "green"];
const STORAGE_KEY = "portfolio-palette";

function getInitialPalette(): Palette {
  if (typeof window === "undefined") return "blue";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && PALETTES.includes(stored as Palette)) return stored as Palette;
  return "blue";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<Palette>(getInitialPalette);

  const setPalette = useCallback((p: Palette) => {
    setPaletteState(p);
    document.documentElement.setAttribute("data-palette", p);
    localStorage.setItem(STORAGE_KEY, p);
  }, []);

  const cyclePalette = useCallback(() => {
    setPaletteState((prev) => {
      const nextIndex = (PALETTES.indexOf(prev) + 1) % PALETTES.length;
      const next = PALETTES[nextIndex]!;
      document.documentElement.setAttribute("data-palette", next);
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ palette, setPalette, cyclePalette }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

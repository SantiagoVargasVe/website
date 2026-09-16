import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";
export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="icon-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

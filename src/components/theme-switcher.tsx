import { Palette } from "lucide-react";
import { useTheme } from "@/context/theme-context";

const PALETTE_LABELS = {
  blue: "Blue",
  teal: "Teal",
  green: "Green",
} as const;

export function ThemeSwitcher() {
  const { palette, cyclePalette } = useTheme();

  return (
    <button
      onClick={cyclePalette}
      className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary-400"
      aria-label={`Current palette: ${PALETTE_LABELS[palette]}. Click to switch.`}
      title={`Theme: ${PALETTE_LABELS[palette]}`}
    >
      <Palette size={16} />
      <span className="hidden sm:inline">{PALETTE_LABELS[palette]}</span>
    </button>
  );
}

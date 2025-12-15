import { useTheme } from "@/contexts/theme";
import { Moon, Sun } from "phosphor-react";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Troca de tema"
      className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition text-gray-800 dark:text-gray-200"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

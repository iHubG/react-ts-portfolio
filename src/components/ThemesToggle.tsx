import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemesToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-6 flex items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors cursor-pointer hover:outline hover:dark:outline-white"
    >
      {/* Circle slider */}
      <span
        className={`absolute top-1 left-1 w-4 h-4 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-gray-400" />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" />
        )}
      </span>
    </button>
  )
};

export default ThemesToggle;

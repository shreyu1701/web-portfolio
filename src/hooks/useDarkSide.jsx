import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    const oppositeTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(oppositeTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}
  
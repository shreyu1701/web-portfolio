import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [theme, setTheme] = useDarkSide();
  const isDarkMode = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <DarkModeSwitch
      style={{ display: "flex", justifyContent: "center" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
}

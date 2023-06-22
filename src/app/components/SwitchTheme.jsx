"use client";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { FiMoon, FiSun } from "react-icons/fi";

const SwitchTheme = () => {
  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <button
      className="btn btn-circle"
      onClick={toggleTheme}
      data-toggle-theme="night, light"
      data-act-class="ACTIVECLASS"
    >
      {theme === "dark" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchTheme;

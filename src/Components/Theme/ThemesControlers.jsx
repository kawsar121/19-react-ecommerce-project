import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ThemesControlers = () => {

    // Theme All funcanality
const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");
  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle between themes
  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };


// theme end


    return (
        <div>
            {/* Theme Controll start */}
      <div>
        <button
        onClick={toggleTheme}
        className="p-2 rounded-full shadow-md bg-[#a1b1c2]  transition hover:scale-110"
      >
        {theme === "light" && <Sun size={12} className="text-yellow-700" />}
        {theme === "dark" && <Moon size={12} className="text-gray-700" />}
      </button>
      </div>
      {/* Theme Controll end */}
        </div>
    );
};

export default ThemesControlers;
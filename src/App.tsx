import React, { useState, useEffect } from "react";
import TopBar from "./Components/TopBar/TopBar";
import DrawingToolComponent from "./Components/DrawingToolComponent/DrawingToolComponent";

const themes = ["light", "dark", "solarized", "ocean"];

const App: React.FC = () => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    document.documentElement.className = themeMode;
  }, [themeMode]);

  const toggleThemeMode = (theme: string) => {
    if (themes.includes(theme)) {
      setThemeMode(theme);
    }
  };

  return (
    <div className={`${themeMode} bg-bg-color text-text-color min-h-screen px-4 py-2`}>
      <TopBar themeMode={themeMode} setThemeMode={toggleThemeMode} />
      <main className="flex min-h-screen flex-col">
        <DrawingToolComponent />
        <div className="mt-4 space-x-2">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => toggleThemeMode(theme)}
              className="p-2 border rounded"
            >
              {theme}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

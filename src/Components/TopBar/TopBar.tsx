import React from "react";

interface TopBarProps {
  themeMode: string;
  setThemeMode: (mode: "dark" | "light" | "solarized" | "ocean") => void;
}

const TopBar: React.FC<TopBarProps> = ({ themeMode, setThemeMode }) => {
  const toggleDMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <div className="flex w-full h-min justify-between  items-center dark:text-neutral-100">
      <img className="h-9" src="/logo.png" alt="Logo" />
      <button
        onClick={toggleDMode}
        className="h-9 w-9 rounded-sm p-2 hover:bg-card-color "
      >
        <svg
          className={`fill-violet-700 ${
            themeMode === "light" ? "hidden" : "block"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          className={`fill-yellow-500 ${
            themeMode === "light" ? "block" : "hidden"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default TopBar;

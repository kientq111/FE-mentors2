import { useEffect, useState } from "react";

const useSideBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode,
  };
};

export default useSideBar;

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const ModeToggle = () => {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="p-2 rounded-full"
    >
      <Sun className="w-[1.2rem] h-[1.2rem] transition-all dark:-rotate-90 dark:scale-0 rotate-0 scale-100" />
      <Moon className="absolute w-[1.2rem] h-[1.2rem] transition-all dark:rotate-0 dark:scale-100 rotate-90 scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;

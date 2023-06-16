"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <BsSun
          className="cursor-pointer text-gray-300"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsMoonStars
          className="cursor-pointer text-gray-800"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

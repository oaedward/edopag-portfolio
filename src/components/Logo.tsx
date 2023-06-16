"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Logo() {
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
        <Image
          src="assets/logo/logo_white.svg"
          width={24}
          height={20}
          alt="logo"
          priority={true}
        />
      ) : (
        <Image
          src="assets/logo/logo_black.svg"
          width={24}
          height={20}
          alt="logo"
          priority={true}
        />
      )}
    </div>
  );
}

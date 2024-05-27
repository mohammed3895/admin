"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Switch
      checked={theme === "dark"}
      onCheckedChange={() => {
        if (theme === "light") setTheme("dark");
        if (theme === "dark") setTheme("light");
      }}
    />
  );
}

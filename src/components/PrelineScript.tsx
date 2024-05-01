"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { type IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline/preline");

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      typeof window !== "undefined" && window.HSStaticMethods.autoInit();
    };

    void loadPreline();
  }, [path]);

  return null;
}

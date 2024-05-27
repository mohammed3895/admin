import React from "react";
import { ModeToggle } from "~/components/ToggleTheme";

const SettingsPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex h-full w-full flex-col items-start justify-start p-3.5">
        <div className="flex h-full w-full flex-col items-start justify-start border-b">
          <div className="flex h-full w-full items-center justify-between py-3.5">
            <p className="text-sm font-normal capitalize">Dark Mode</p>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

import React from "react";
import Navbar from "~/components/shared/header/Navbar";
import MobileSidebar from "~/components/shared/MobileSidebar";
import Sidebar from "~/components/shared/Sidebar";
import SidePanel from "~/components/shared/SidePanel";

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-dvh w-full">
      <MobileSidebar />
      <Sidebar />
      <SidePanel />
      <section className="h-full w-full overflow-hidden p-4">
        <Navbar />
        {children}
      </section>
    </div>
  );
};

export default MessagesLayout;

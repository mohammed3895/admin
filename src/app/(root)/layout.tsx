import { type Metadata } from "next";
import React from "react";
import Navbar from "~/components/shared/header/Navbar";
import Sidebar from "~/components/shared/Sidebar";
import SidePanel from "~/components/shared/SidePanel";
import { ScrollArea } from "~/components/ui/scroll-area";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Admin - Modern Dashboard",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-screen w-full overflow-hidden bg-gray-50">
      <div className="hidden h-screen border-r lg:flex">
        <Sidebar />
      </div>
      <SidePanel />
      <ScrollArea className="lg:max-w-[clac(100% - 40rem)] w-full p-4">
        <Navbar />
        {children}
      </ScrollArea>
    </section>
  );
};

export default MainLayout;

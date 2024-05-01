import { type Metadata } from "next";
import React from "react";
import Navbar from "~/components/shared/header/Navbar";
import MobileSidebar from "~/components/shared/MobileSidebar";
import Sidebar from "~/components/shared/Sidebar";
import SidePanel from "~/components/shared/SidePanel";
import { ScrollArea } from "~/components/ui/scroll-area";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Admin - Modern Dashboard",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-screen w-full overflow-y-hidden bg-gray-50">
      <MobileSidebar />
      <div className="hidden h-screen border-r md:flex">
        <Sidebar />
      </div>
      <SidePanel />
      <ScrollArea className="flex w-full p-0 md:p-4">
        <Navbar />
        {children}
      </ScrollArea>
    </section>
  );
};

export default MainLayout;

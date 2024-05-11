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
    <section className="flex h-screen w-full">
      <MobileSidebar />
      <div className="hidden h-dvh w-20 items-center md:flex md:flex-col">
        <Sidebar />
      </div>
      <SidePanel />
      <ScrollArea className="m-0 flex h-full w-full p-0 md:container md:p-4">
        <div className="m-0 h-full w-full p-0">
          <Navbar />
          {children}
        </div>
      </ScrollArea>
    </section>
  );
};

export default MainLayout;

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
    <section className="relative flex h-screen w-full">
      <MobileSidebar />
      <div className="hidden h-dvh w-20 items-center md:flex md:flex-col">
        <Sidebar />
      </div>
      <SidePanel />
      <ScrollArea className="m-0 block h-full w-full p-0 md:container md:p-4">
        <Navbar />
        {children}
      </ScrollArea>
    </section>
  );
};

export default MainLayout;

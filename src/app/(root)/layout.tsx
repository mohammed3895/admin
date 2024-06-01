import { type Metadata } from "next";
import React from "react";
import Navbar from "~/components/shared/header/Navbar";
import MobileSidebar from "~/components/shared/MobileSidebar";
import Sidebar from "~/components/shared/Sidebar";
import { ScrollArea } from "~/components/ui/scroll-area";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Admin - Modern Dashboard",
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative flex h-screen w-full">
      <MobileSidebar />
      <div className="hidden h-dvh w-16 items-center md:flex md:flex-col">
        <Sidebar />
      </div>
      <ScrollArea className="m-0 block h-full w-full p-0 md:p-4">
        <Navbar />
        {children}
      </ScrollArea>
    </section>
  );
};

export default MainLayout;

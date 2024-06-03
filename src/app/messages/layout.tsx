import { Metadata } from "next";
import React from "react";
import Navbar from "~/components/shared/header/Navbar";
import MobileSidebar from "~/components/shared/MobileSidebar";
import Sidebar from "~/components/shared/Sidebar";

export const metadata: Metadata = {
  title: "Admin - Messages",
};

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-dvh w-full">
      <MobileSidebar />
      <div className="hidden h-dvh w-20 items-center md:flex md:flex-col">
        <Sidebar />
      </div>
      <section className="h-full w-full overflow-hidden overflow-y-scroll bg-accent md:p-4">
        <Navbar />
        <div className="flex h-full w-full items-start justify-start">
          {children}
        </div>
      </section>
    </div>
  );
};

export default MessagesLayout;

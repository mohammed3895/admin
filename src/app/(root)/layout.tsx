import React from "react";
import Navbar from "~/components/shared/header/Navbar";
import Sidebar from "~/components/shared/Sidebar";
import SidePanel from "~/components/shared/SidePanel";
import "~/styles/globals.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex min-h-screen w-screen flex-1 bg-gray-50">
      <div className="hidden h-screen border-r lg:flex">
        <Sidebar />
      </div>
      <SidePanel />
      <div className="lg:max-w-[clac(100vw - 40rem)] w-full p-4">
        <Navbar />
        {children}
      </div>
    </section>
  );
};

export default MainLayout;

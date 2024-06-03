import Image from "next/image";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import About from "~/components/profile/About";
import Contact from "~/components/profile/Contact";
import ProfileProjects from "~/components/profile/ProfileProjects";
import Skills from "~/components/profile/Skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const PROFILETABS = [
  {
    id: 1,
    title: "About",
    icon: <FaBriefcase className="text-2xl" />,
    page: About,
  },
  {
    id: 2,
    title: "Contact",
    icon: <IoMdMail className="text-2xl" />,
    page: Contact,
  },
  {
    id: 3,
    title: "Projects",
    icon: <FaBriefcase className="text-2xl" />,
    page: ProfileProjects,
  },
  {
    id: 4,
    title: "Skills",
    icon: <FaBriefcase className="text-2xl" />,
    page: Skills,
  },
];

const ProfilePage = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="flex h-full w-full flex-col items-center gap-6">
        {/*  */}
        <div className="flex h-64 w-full flex-col items-center justify-center rounded-xl bg-profile bg-cover p-0 shadow-lg shadow-gray-1 dark:shadow-zinc-900">
          <div className="flex h-full w-full flex-col items-center justify-end rounded-xl border-none outline-none ring-0 ring-offset-0">
            <div className="mb-8 flex w-full flex-col items-center gap-2">
              <div className="h-20 w-20 rounded-full border-2 border-background ">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="profile-pic"
                  width={100}
                  height={100}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h1 className="text-base font-medium text-background">
                Sam Smith
              </h1>
            </div>
            <div className="flex w-full items-center justify-between gap-3 rounded-b-xl bg-background p-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <IoMdMail className=" text-primary" />
                <p className="text-sm font-medium ">Sam@Smith.com</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <FaBriefcase className=" text-primary" />
                <p className="text-sm font-medium ">FrontEnd Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <Tabs
          className="w-full rounded-xl border bg-background p-0 shadow-xl shadow-gray-1 dark:shadow-zinc-900"
          defaultValue="about"
        >
          <TabsList className="flex w-full justify-between gap-0 rounded-none bg-transparent p-0">
            {PROFILETABS.map((tab) => (
              <TabsTrigger
                value={tab.title.toLowerCase()}
                key={tab.id}
                className="w-full rounded-none border-b bg-transparent text-sm text-foreground data-[state=active]:border-b data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {PROFILETABS.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.title.toLowerCase()}
              className="mb-16 p-4"
            >
              {<tab.page />}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;

import Image from "next/image";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const PROFILETABS = [
  {
    id: 1,
    title: "About",
    icon: <FaBriefcase className="text-2xl" />,
  },
  {
    id: 2,
    title: "Contact",
    icon: <IoMdMail className="text-2xl" />,
  },
  {
    id: 3,
    title: "Projects",
    icon: <FaBriefcase className="text-2xl" />,
  },
  {
    id: 4,
    title: "Skills",
    icon: <FaBriefcase className="text-2xl" />,
  },
];

const ProfilePage = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="flex h-full w-full flex-col items-center gap-6">
        {/*  */}
        <div className="bg-profile flex h-64 w-full flex-col items-center justify-center rounded-xl bg-cover p-0 shadow-lg">
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
        <div className="flex w-full items-center justify-between rounded-xl p-4 shadow-lg">
          <div className="flex w-full flex-col items-center justify-center border-r">
            <h1 className="text-2xl font-medium tracking-wide text-black-1 dark:text-white">
              3K
            </h1>
            <p className="text-sm font-normal text-muted-foreground">
              Followers
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="text-2xl font-medium tracking-wide text-black-1 dark:text-white">
              4.3K
            </h1>
            <p className="text-sm font-normal text-muted-foreground">
              Following
            </p>
          </div>
        </div>

        {/*  */}
        <Tabs className="w-full" defaultValue="about">
          <TabsList className="flex w-full justify-between gap-1.5">
            {PROFILETABS.map((tab) => (
              <TabsTrigger
                value={tab.title.toLowerCase()}
                key={tab.id}
                className="w-full"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;

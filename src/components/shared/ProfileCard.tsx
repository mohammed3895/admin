import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex h-64 w-full rounded-2xl bg-background p-4 shadow-xl shadow-gray-50 dark:shadow-zinc-900 md:h-80 md:w-96 md:px-12">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <div className="h-20 w-20 rounded-full">
          <Image
            src="https://randomuser.me/api/portraits/men/64.jpg"
            alt=""
            width={80}
            height={80}
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col items-center">
          <h1 className="text-lg font-medium tracking-wide text-black-1 dark:text-white">
            Jane Smith
          </h1>
          <p className="text-sm font-normal text-muted-foreground">
            jane@smith.com
          </p>
        </div>

        <div className="flex w-full items-center justify-center gap-5">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-medium tracking-wide text-black-1 dark:text-white">
              3K
            </h1>
            <p className="text-sm font-normal text-muted-foreground">
              Followers
            </p>
          </div>
          <div className="h-full w-px bg-muted-foreground" />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-medium tracking-wide text-black-1 dark:text-white">
              4.3K
            </h1>
            <p className="text-sm font-normal text-muted-foreground">
              Following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

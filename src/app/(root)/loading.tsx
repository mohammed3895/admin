import { Loader2 } from "lucide-react";
import React from "react";
import { STATS } from "~/components/dashboard/StatusCardWrapper";
import Navbar from "~/components/shared/header/Navbar";
import { Skeleton } from "~/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex h-dvh w-full p-4">
      <div className="mb-16 h-full w-full">
        <div className="mb-8 flex w-full flex-col items-center gap-5 border-b pb-8 md:flex-row">
          <Skeleton className="h-64 w-full rounded-xl bg-purple-2 md:h-80" />
          <Skeleton className="flex h-64 w-full rounded-lg bg-accent p-4 md:h-80 md:w-96 md:px-12" />
        </div>
        <div className="w-full">
          <div className="grid w-full grid-cols-1 gap-4 pb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {STATS.map((stat, i) => (
              <Skeleton
                key={i}
                className="flex h-36 w-full items-center justify-between rounded-lg bg-accent px-4 py-6"
              />
            ))}
          </div>
        </div>
        <div className="md:px0 grid h-full w-full  grid-cols-1 gap-3.5  md:px-0 lg:grid-cols-3">
          <Skeleton className="col-span-3 h-[28rem] w-full rounded-md bg-accent md:h-full" />
          <Skeleton className="h-[28rem] w-full rounded-md bg-accent md:h-full" />
          <Skeleton className="h-[28rem] w-full rounded-md bg-accent md:h-full" />
          <Skeleton className="col-span-3 h-[28rem] w-full rounded-md bg-accent md:h-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

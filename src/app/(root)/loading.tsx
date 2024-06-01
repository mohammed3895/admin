import React from "react";
import { STATS } from "~/components/dashboard/StatusCardWrapper";
import { Skeleton } from "~/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex h-full min-h-dvh w-full flex-col px-4 py-4 md:px-0">
      <div className="mb-16 flex h-full w-full flex-col gap-6">
        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <Skeleton className="h-64 w-full rounded-xl bg-gray-50 dark:bg-zinc-800 md:h-80" />
          <Skeleton className="flex h-64 w-full rounded-xl bg-gray-50 p-4 dark:bg-zinc-800 md:h-80 md:w-96 md:px-12" />
        </div>
        <div className="w-full">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {STATS.map((stat, i) => (
              <Skeleton
                key={i}
                className="flex h-32 w-full items-center justify-between rounded-xl bg-gray-50 px-4 py-6 dark:bg-zinc-800"
              />
            ))}
          </div>
        </div>
        <div className="md:px0 grid h-full w-full  grid-cols-1 gap-3.5  md:grid-cols-2 md:px-0 lg:grid-cols-3">
          <Skeleton className="col-span-1 min-h-[28rem] w-full rounded-md bg-gray-50 dark:bg-zinc-800 md:h-full lg:col-span-2" />
          <Skeleton className="min-h-[28rem] w-full rounded-md bg-gray-50 dark:bg-zinc-800 md:h-full" />
          <Skeleton className="min-h-[28rem] w-full rounded-md bg-gray-50 dark:bg-zinc-800 md:h-full" />
          <Skeleton className="col-span-3 min-h-[28rem] w-full rounded-md bg-gray-50 dark:bg-zinc-800 md:h-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

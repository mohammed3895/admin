import { Loader2 } from "lucide-react";
import React from "react";
import Navbar from "~/components/shared/header/Navbar";
import { Skeleton } from "~/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex h-dvh w-full">
      {/* <Navbar /> */}
      <div className="mb-16 h-full w-full p-4">
        <div className="mb-8 mt-4 w-full">
          <Skeleton className="h-64 w-full rounded-xl bg-purple-2 md:h-80" />
        </div>
        <div className="md:px0 grid h-full w-full  grid-cols-1 gap-3.5  md:px-0 lg:grid-cols-2">
          <Skeleton className="h-[28rem] w-full rounded-md bg-accent md:h-full" />
          <Skeleton className="h-[28rem] w-full rounded-md bg-accent md:h-full" />
          <Skeleton className="h-[28rem] w-full rounded-md bg-accent md:h-full" />
          <Skeleton className="h-[28rem] w-full rounded-md bg-accent md:h-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

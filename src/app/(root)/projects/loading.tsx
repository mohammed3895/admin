import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="mt-8 h-screen w-full">
      <div className="mb-16 flex h-full w-full p-4">
        <div className="grid w-full grid-cols-1 gap-2.5 rounded-lg md:grid-cols-2 xl:grid-cols-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, i) => (
            <Skeleton key={i} className="h-80 rounded-md bg-accent" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;

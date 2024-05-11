import React from "react";
import { cn } from "~/lib/utils";

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={cn("flex h-full w-full p-4 md:p-6", className)}>
      {children}
    </div>
  );
};

export default PageWrapper;

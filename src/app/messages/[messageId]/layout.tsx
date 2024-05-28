import React from "react";

const MessageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-start overflow-hidden md:mt-4 md:h-[90%]">
      <div className="flex h-full w-full items-center justify-start">
        {children}
      </div>
    </div>
  );
};

export default MessageLayout;

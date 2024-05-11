import React from "react";

const MessageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col justify-center overflow-hidden">
      {children}
    </div>
  );
};

export default MessageLayout;

import React from "react";

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-full w-full">{children}</div>;
};

export default MessagesLayout;

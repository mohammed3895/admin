import { Pen } from "lucide-react";
import React from "react";
import MessageCard from "~/components/messages/MessageCard";

const MessagesPage = () => {
  return (
    <div className="h-full w-full rounded-lg p-4 md:bg-card">
      <div className="flex flex-col justify-start">
        <div className="mb-5 flex w-fit items-center justify-center gap-1.5 rounded-md bg-purple-2 px-2.5 py-1.5 text-purple-1">
          <Pen size={16} className="h-3 w-3" />
          <span className="text-xs font-medium tracking-tight">
            Add Coversation
          </span>
        </div>

        <div className="flex w-full flex-col gap-2">
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;

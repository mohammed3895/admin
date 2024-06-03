import { Inbox, Pen } from "lucide-react";
import { type Metadata } from "next";
import React from "react";
import MessageCard from "~/components/messages/MessageCard";
import { CONVERSATIONS } from "~/constants/conversations";

export const metadata: Metadata = {
  title: "Admin - Messages",
};

const MessagesPage = () => {
  return (
    <div className="h-full w-full rounded-lg">
      <div className="flex flex-col justify-start px-0 md:px-4">
        {/*  */}
        <div className="fixed top-14 z-50 mb-2 flex h-14 w-full items-center justify-between gap-1.5 border-t bg-background p-4 text-purple-1 md:relative md:top-4 md:rounded-lg md:border-none">
          <div className="flex items-center justify-start gap-2">
            <div className="flex h-9 w-9 min-w-9 items-center justify-center rounded-md border">
              <Inbox className="h-4 w-4 min-w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-sm font-medium capitalize text-black-1 dark:text-white">
                All Messages
              </h2>
              <p className="truncate text-xs font-light capitalize text-muted-foreground">
                You have new messages
              </p>
            </div>
          </div>
          <span className="flex h-6 w-6 min-w-6 items-center justify-center rounded-full bg-green-2 text-sm text-green-1">
            5
          </span>
        </div>

        <div className="my-16 flex w-full flex-col gap-1.5 p-4 md:my-6">
          {CONVERSATIONS.map((conversation) => (
            <MessageCard conversation={conversation} key={conversation.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;

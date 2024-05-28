"use client";
import React from "react";
import MessagePreview from "~/components/messages/MessagePreview";
import { CONVERSATIONS } from "~/constants/conversations";
interface ParamsProp {
  params: {
    messageId: string;
  };
}

const MessageDetailsPage = ({ params }: ParamsProp) => {
  const message = CONVERSATIONS.find((el) => {
    return el.id === params.messageId;
  });

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex h-full w-full items-center justify-center">
        <MessagePreview message={message!} />
      </div>
    </div>
  );
};

export default MessageDetailsPage;

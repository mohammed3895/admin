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
    <div className="relative flex h-full w-full flex-col justify-center overflow-hidden rounded-lg pb-20">
      <div className="my-auto h-full w-full">
        <MessagePreview message={message!} />
      </div>
    </div>
  );
};

export default MessageDetailsPage;

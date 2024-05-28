"use client";
import { Link2, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import MoreBtn from "../buttons/MoreBtn";
import { CONVERSATIONS } from "~/constants/conversations";
import dayjs from "dayjs";
import Link from "next/link";

const LIST_DATA = [
  {
    btnTitle: "replay",
    onClick: () => console.log("clicked"),
  },
  {
    btnTitle: "archive",
    onClick: () => console.log("clicked"),
  },
  {
    btnTitle: "delete",
    variant: "destructive",
    onClick: () => console.log("clicked"),
  },
];

interface ConversationProps {
  conversation: (typeof CONVERSATIONS)[number];
}

const MessageCard = ({ conversation }: ConversationProps) => {
  return (
    <div className="flex h-full w-full items-start justify-between gap-2.5 rounded-xl border-[0] bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-purple-2 dark:border-border md:flex-row md:items-center">
      <div className="flex w-3/4 flex-col items-start justify-start gap-1 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-start gap-2.5">
          {/* <Star size={16} strokeWidth={1} className="h-3 w-3" /> */}
          <div className="relative h-10 w-10 min-w-10 rounded-md">
            <Image
              src={conversation.sender.avatarUrl}
              alt=""
              width={30}
              height={30}
              className="h-full w-full rounded-md object-cover md:h-6 md:w-6"
            />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background bg-green-1" />
          </div>
          <Link
            href={`/messages/${conversation.id}`}
            className="flex flex-col items-start justify-start"
          >
            <h2 className="text-base font-medium capitalize text-black-1 dark:text-white">
              {conversation.sender.name}
            </h2>
            <p className="text-xs font-medium text-muted-foreground md:hidden">
              {conversation.messages[0]?.content}
            </p>
          </Link>
        </div>

        {/*  */}
        <div className="hidden items-center justify-start gap-3 truncate md:flex">
          <h3 className="text-sm font-normal text-muted-foreground">
            {conversation.messages[0]?.content}
          </h3>
        </div>
      </div>

      {/*  */}
      <div className="flex w-fit flex-col items-end justify-end gap-3.5 text-purple-1 md:flex-row md:items-center">
        <Link2 size={16} className="hidden h-4 w-4 md:block" />
        <span className="text-xs">
          {dayjs(conversation.messages[0]?.timestamp)
            .format("HH:MM")
            .toString()}
        </span>
        <MoreBtn className="hidden md:flex" />
      </div>
    </div>
  );
};

export default MessageCard;

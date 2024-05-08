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
    <Link
      href={`/messages/${conversation.id}`}
      className="flex w-full items-start justify-between gap-2.5 rounded-lg border-[0] p-4 transition-colors duration-200 ease-in-out hover:bg-purple-2 dark:border-border md:flex-row md:items-center md:border"
    >
      <div className="flex w-3/4 flex-col items-start justify-start gap-1 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-start gap-2.5">
          <Star size={16} strokeWidth={1} className="h-3 w-3" />
          <Image
            src={conversation.sender.avatarUrl}
            alt=""
            width={30}
            height={30}
            className="h-9 w-9 rounded-md object-cover md:h-6 md:w-6"
          />
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-sm font-medium capitalize text-black-1 dark:text-white">
              {conversation.sender.name}
            </h2>
            <p className="text-xs font-medium text-purple-1 md:hidden">
              {conversation.messages[0]?.content}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="hidden items-center justify-start gap-3 truncate md:flex">
          <h3 className="text-sm font-medium text-purple-1">
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
    </Link>
  );
};

export default MessageCard;

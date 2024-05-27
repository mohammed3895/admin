import Image from "next/image";
import React from "react";
import { type CONVERSATIONS } from "~/constants/conversations";
import { ScrollArea } from "../ui/scroll-area";
import Message from "./Message";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowLeft, ImageIcon, Mic } from "lucide-react";
import Link from "next/link";

export interface MessageProps {
  message: (typeof CONVERSATIONS)[number];
}

const MessagePreview = ({ message }: MessageProps) => {
  return (
    <div className="relative my-auto mt-6 flex h-full w-full flex-col items-center justify-between">
      <div className="flex h-full w-full grow flex-col justify-start gap-4">
        <div className="flex h-fit w-full items-center justify-between">
          <div className="flex items-start justify-start gap-3.5">
            <Link
              href="/messages"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-accent"
            >
              <ArrowLeft className="h-4 w-4 text-muted-foreground" />
            </Link>
            <div className="relative h-9 w-9 rounded-md md:h-12 md:w-12">
              <Image
                src={message.sender.avatarUrl}
                alt=""
                width={30}
                height={30}
                className="h-full w-full rounded-md object-cover"
              />
              <div className="absolute -right-[1px] bottom-0 h-3 w-3 rounded-full border-2 border-card bg-green-1" />
            </div>
            <div className="flex flex-col justify-start">
              <h1 className="text-base font-semibold capitalize tracking-tight text-black-1 dark:text-white">
                {message.sender.name}
              </h1>
              <h1 className="text-xs font-medium capitalize tracking-tight text-muted-foreground">
                {message.sender.email}
              </h1>
            </div>
          </div>
        </div>

        {/* CONVERSATION BODY */}
        <ScrollArea className="flex h-full w-full flex-col-reverse justify-end self-start">
          {message.messages.reverse().map((message, i) => (
            <Message reversed message={message} key={i} />
          ))}
        </ScrollArea>

        {/* TOOL BAR */}
        <div className="mb-16 h-14 w-full flex-initial md:h-16">
          <div className="flex h-full w-full items-center justify-between rounded-md bg-accent px-2">
            <Input
              className="w-1/2 border-none bg-transparent px-2 tracking-wide"
              placeholder="Type a Message ..."
            />
            <div className="flex items-center justify-end gap-3 text-muted-foreground">
              <ImageIcon />
              <Mic />
              <Button type="submit" className="dark:text-white">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;

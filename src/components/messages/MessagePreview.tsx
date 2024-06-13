import Image from "next/image";
import React from "react";
import { type CONVERSATIONS } from "~/constants/conversations";
import { ScrollArea } from "../ui/scroll-area";
import Message from "./Message";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowLeft, ImageIcon, Mic, SendHorizonal } from "lucide-react";
import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";
import { BsInfoLg } from "react-icons/bs";
export interface MessageProps {
  message: (typeof CONVERSATIONS)[number];
}

const MessagePreview = ({ message }: MessageProps) => {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center rounded-xl">
      <div className="relative flex h-full w-full grow flex-col justify-start gap-0 md:rounded-xl md:bg-background">
        <div className="fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-between border-t bg-background md:relative md:top-0 md:rounded-t-md md:border-b md:border-t-0 ">
          <div className="flex items-start justify-start gap-1.5 p-4">
            <Link
              href="/messages"
              className="flex h-6 w-6 items-center justify-center rounded-md bg-accent"
            >
              <ArrowLeft className="h-4 w-4 text-muted-foreground" />
            </Link>
            <div className="relative h-9 w-9 rounded-md md:h-10 md:w-10">
              <Image
                src={message.sender.avatarUrl}
                alt=""
                width={30}
                height={30}
                className="h-full w-full rounded-md object-cover"
              />
              <div className="absolute -right-[1px] bottom-0 h-3 w-3 rounded-full border-2 border-card bg-green-1" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-sm font-medium capitalize tracking-tight text-black-1 dark:text-white">
                {message.sender.name}
              </h1>
              <h1 className="text-xs font-light capitalize tracking-tight text-muted-foreground">
                {message.sender.email}
              </h1>
            </div>
          </div>
          <div className="mr-2 flex items-center justify-end gap-2.5">
            <Button
              variant="secondary"
              className="flex items-center justify-center rounded-md p-2.5"
            >
              <AiFillPhone className="h-4 w-4 text-muted-foreground" />
            </Button>
            <Button
              variant="secondary"
              className="flex items-center justify-center rounded-md p-2.5"
            >
              <BsInfoLg className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* CONVERSATION BODY */}
        <ScrollArea className="my-auto flex h-full w-full flex-col-reverse justify-end self-start pb-28 md:pb-0 md:pt-0">
          {[...message.messages].reverse().map((message, i) => (
            <Message reversed message={message} key={i} />
          ))}
        </ScrollArea>

        {/* TOOL BAR */}
        <div className="fixed bottom-14 left-0 right-0 h-12 w-full flex-initial bg-background md:relative md:bottom-0 md:h-16  md:rounded-b-xl md:border-t">
          <div className="flex h-full w-full items-center justify-between p-2">
            <Input
              className="w-1/2 border-none bg-transparent px-2 tracking-wide"
              placeholder="Type a Message ..."
            />
            <div className="flex items-center justify-end gap-3 text-muted-foreground">
              <ImageIcon className="h-5 w-5" />
              <Mic className="h-5 w-5" />
              <Button type="submit" className="p-2 dark:text-white">
                <SendHorizonal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;

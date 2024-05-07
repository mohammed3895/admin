import Image from "next/image";
import React from "react";
import { type CONVERSATIONS } from "~/constants/conversations";
import { ScrollArea } from "../ui/scroll-area";
import Message from "./Message";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ImageIcon, Mic, Mic2 } from "lucide-react";

export interface MessageProps {
  message: (typeof CONVERSATIONS)[number];
}

const MessagePreview = ({ message }: MessageProps) => {
  return (
    <div className="relative m-auto flex h-auto w-full flex-col items-center justify-center gap-4 rounded-md bg-card p-4">
      <div className="mt-auto flex h-[72vh] w-full grow flex-col justify-start gap-4 md:h-[80vh]">
        <div className="flex h-20 w-full flex-initial items-center justify-between">
          <div className="flex items-center justify-start gap-3.5">
            <div className="relative h-12 w-12 rounded-md">
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
        <ScrollArea className="absolute bottom-0 top-0 flex h-full w-full flex-auto grow flex-col-reverse justify-start py-4">
          {message.messages.map((message, i) => (
            <Message message={message} key={i} />
          ))}
        </ScrollArea>

        {/* TOOL BAR */}
        <div className="h-16 w-full flex-initial rounded-md bg-accent">
          <div className="flex h-full w-full items-center justify-between px-4">
            <Input
              className="w-1/2 border-none bg-transparent px-2 tracking-wide"
              placeholder="Type a Message ..."
            />
            <div className="flex items-center justify-end gap-3 text-muted-foreground">
              <ImageIcon />
              <Mic />
              <Button type="submit">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePreview;

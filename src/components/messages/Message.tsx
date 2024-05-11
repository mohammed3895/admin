"use client";
import React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import dayjs from "dayjs";

export interface MessageProps {
  message:
    | {
        type: string;
        content: string;
        sender: {
          name: string;
          avatarUrl: string;
          email: string;
        };
        isRead: boolean;
        isMe: boolean;
        timestamp: Date;
        url?: string;
      }
    | {
        type: string;
        content?: string;
        sender: {
          name: string;
          avatarUrl: string;
          email: string;
        };
        isRead: boolean;
        isMe: boolean;
        timestamp: Date;
        url?: string;
      };
  reversed: boolean;
}

const Message = ({ message, reversed }: MessageProps) => {
  return (
    <div className="my-2.5 flex h-full w-full items-center justify-start self-end py-2 duration-300 animate-in fade-in-0">
      <div
        className={cn("flex w-full items-center justify-start gap-3", {
          "justify-end": message.isMe,
        })}
      >
        <div
          className={cn("flex w-max items-center gap-3", {
            "flex-row-reverse": message.isMe,
          })}
        >
          <div className="h-6 w-6 rounded-full">
            <Image
              src={message.sender.avatarUrl}
              className="h-full w-full rounded-full object-cover"
              width={30}
              height={30}
              alt=""
            />
          </div>
          <div
            className={cn("flex w-full flex-col items-start justify-start", {
              "items-end justify-end": message.isMe,
            })}
          >
            <div
              className={cn(
                "flex w-full rounded-full rounded-bl-none bg-accent px-4 py-3 text-sm font-normal tracking-wide text-black-1 dark:text-gray-100",
                {
                  "flex-row-reverse rounded-bl-full rounded-br-none bg-primary text-white":
                    message.isMe,
                },
                { "rounded-lg px-0 py-0": message.type === "image" },
                {
                  "items-center justify-center bg-transparent":
                    message.type === "image",
                },
              )}
            >
              {message.type === "text" ? <p>{message.content}</p> : null}
              {message.type === "image" ? (
                <div className="h-40 w-52 rounded-xl">
                  <Image
                    src={message.url!}
                    quality={75}
                    alt=""
                    width={300}
                    height={300}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              ) : null}
            </div>
            <p className="mt-1.5 text-[12px] font-thin text-muted-foreground">
              {dayjs(message.timestamp).format("ddd,  HH:MM").toString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

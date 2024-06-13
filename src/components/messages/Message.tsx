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
    <div className="my-4 flex h-full w-full items-center justify-start self-end p-4 duration-300 animate-in fade-in-0">
      <div
        className={cn("flex w-full items-center justify-start gap-2", {
          "justify-end": message.isMe,
        })}
      >
        <div
          className={cn("flex w-full items-center gap-4", {
            "flex-row-reverse": message.isMe,
          })}
        >
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={message.sender.avatarUrl}
              className="h-full w-full rounded-full object-cover"
              width={40}
              height={40}
              alt={`${message.sender.name}'s avatar`}
            />
          </div>
          <div
            className={cn("flex w-4/5 flex-col items-start justify-start", {
              "items-end justify-end": message.isMe,
            })}
          >
            <div
              className={cn(
                "flex w-fit max-w-full rounded-xl rounded-bl-none bg-background px-6 py-3 text-sm font-medium tracking-wide text-black-1 dark:text-gray-100 md:bg-accent",
                {
                  "flex-row-reverse rounded-bl-xl rounded-br-none bg-primary text-white md:bg-primary":
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
                <div className="h-52 w-64 rounded-xl">
                  <Image
                    src={message.url!}
                    quality={100}
                    alt="Sent image"
                    width={400}
                    height={400}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              ) : null}
            </div>
            <p className="mt-2 text-sm font-light text-muted-foreground">
              {dayjs(message.timestamp).format("ddd, HH:mm").toString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

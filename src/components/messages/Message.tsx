import React from "react";
import Image from "next/image";
import { CONVERSATIONS } from "~/constants/conversations";
import { cn } from "~/lib/utils";

export interface MessageProps {
  message:
    | {
        type: string;
        sender: {
          name: string;
          avatarUrl: string;
          email: string;
        };
        isRead: boolean;
        isMe: boolean;
        timestamp: Date;
        url?: string | undefined;
      }
    | {
        type: string;
        content: string | undefined;
        sender: {
          name: string;
          avatarUrl: string;
          email: string;
        };
        isRead: boolean;
        isMe: boolean;
        timestamp: Date;
      };
}

const Message = ({ message }: MessageProps) => {
  return (
    <div className="my-2.5 flex h-full w-full items-center justify-start px-4 py-2">
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
                "flex w-full rounded-full rounded-bl-none bg-accent px-4 py-3 text-sm font-medium tracking-wide text-muted-foreground",
                {
                  "flex-row-reverse rounded-bl-full rounded-br-none bg-primary text-white":
                    message.isMe,
                },
              )}
            >
              <p>This is message body</p>
            </div>
            <p className="mt-1.5 text-xs font-medium text-gray-2">22:20 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

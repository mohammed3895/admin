"use client";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useState } from "react";
import { TiHeartFullOutline } from "react-icons/ti";
import { type BLOG_POSTS } from "~/constants/blog";
import { cn } from "~/lib/utils";
import { TbMessage } from "react-icons/tb";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Button } from "../ui/button";

interface PostProps {
  post: (typeof BLOG_POSTS)[number];
}

const PostCard = ({ post }: PostProps) => {
  const [activeText, setActiveText] = useState(false);

  const handleTextClick = () => {
    setActiveText(!activeText);
  };
  return (
    <div className="flex h-full w-full rounded-xl bg-background p-4 shadow-xl dark:shadow-zinc-900">
      <div className="flex h-full w-full flex-col gap-3">
        <div className="flex w-full items-center justify-start gap-2">
          <div className="h-10 w-10 rounded-full">
            <Image
              src={post.owner.avatar}
              alt=""
              width={100}
              height={100}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-sm font-medium">{post.owner.name}</h3>
            <p className="text-[10px] font-normal text-muted-foreground">
              {dayjs(post.date as unknown as Date).format("DD MMM")}
            </p>
          </div>
        </div>
        <div>
          <p
            onClick={handleTextClick}
            className={cn(
              "desc h-full w-full animate-accordion-down cursor-pointer text-wrap text-sm font-normal text-muted-foreground",
              { "line-clamp-2 w-3/4 animate-accordion-up": !activeText },
            )}
          >
            {post.description}
          </p>
        </div>
        {/* IMAGE SECTION */}
        <div className="aspect-[9/6] w-full">
          <Image
            src={post.image}
            alt=""
            width={400}
            height={400}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        {/* LIKES AND SHARE */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center justify-start gap-2">
              <TiHeartFullOutline className="h-6 w-6 text-red-1" />
              {post.likes}
            </div>
            <div className="flex items-center justify-start gap-2">
              <TbMessage className="h-6 w-6 text-purple-1" />
              {post.comments.length}
            </div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <Button
              variant="ghost"
              className="flex items-center justify-end gap-2 text-sm"
            >
              Share
              <FaRegShareFromSquare className="h-5 w-5 text-muted-foreground" />
            </Button>
            {/* <div className="flex items-center justify-end gap-2">
              <TbMessage className="h-5 w-5 text-purple-1" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

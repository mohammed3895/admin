import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { RiUser3Line } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { BsImages } from "react-icons/bs";
import { TiVideo } from "react-icons/ti";
import { Button } from "../ui/button";
import BlogPosts from "./BlogPosts";

const About = () => {
  return (
    <div className="flex h-full w-full flex-col gap-6 lg:flex-row">
      <div className="flex h-full w-full flex-col items-start justify-start gap-8 rounded-xl lg:w-fit lg:min-w-[400px] lg:flex-row xl:min-w-[500px]">
        <div className="flex h-full w-full flex-col items-start justify-start gap-6">
          <div className="flex w-full items-center justify-between rounded-xl  border px-4 py-6 shadow-lg dark:shadow-zinc-900">
            <div className="flex w-full flex-col items-center justify-center border-r">
              <h1 className="text-2xl font-medium tracking-wide text-black-1 dark:text-white">
                3K
              </h1>
              <p className="text-sm font-normal text-muted-foreground">
                Followers
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <h1 className="text-2xl font-medium tracking-wide text-black-1 dark:text-white">
                4.3K
              </h1>
              <p className="text-sm font-normal text-muted-foreground">
                Following
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-3 rounded-xl border p-6 shadow-xl dark:shadow-zinc-900">
            <div className="my-1 flex w-full items-center justify-start gap-3 lg:max-w-96">
              <RiUser3Line className="h-6 w-6" />
              <p className="w-full border-b pb-3 text-sm font-normal text-muted-foreground">
                Sam Smith
              </p>
            </div>
            <div className="my-1 flex w-full items-center justify-start gap-3 lg:max-w-96">
              <IoMailOutline className="h-6 w-6" />
              <p className="w-full border-b pb-3 text-sm font-normal text-muted-foreground">
                Sam@Smith.com
              </p>
            </div>
            <div className="my-1 flex w-full items-center justify-start gap-3 lg:max-w-96">
              <GoLocation className="h-6 w-6" />
              <p className="w-full border-b pb-3 text-sm font-normal text-muted-foreground">
                California
              </p>
            </div>
            <div className="my-1 flex w-full items-center justify-start gap-3 lg:max-w-96">
              <FiPhone className="h-6 w-6" />
              <p className="w-full border-b pb-3 text-sm font-normal text-muted-foreground">
                123-456-7890
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex h-full w-full flex-col gap-4 rounded-xl">
        <div className="flex h-80 w-full flex-col rounded-xl  border p-4 shadow-xl dark:shadow-zinc-900 lg:h-96">
          <textarea
            className="h-full w-full rounded-xl border bg-transparent p-4 text-sm outline-none ring-0 ring-offset-0 focus:border-primary"
            placeholder="Share Smothing to Blog ..."
          />
          <div className="flex w-full items-end justify-between pt-3">
            <div className="flex w-full items-center justify-start gap-3">
              <div className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2">
                <BsImages className="h-5 w-5 text-green-1" />
                <p className="text-sm font-normal">Gallery</p>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2">
                <TiVideo className="h-5 w-5 text-red-1" />
                <p className="text-sm font-normal">Stream</p>
              </div>
            </div>
            <Button className="px-4 py-2">Post</Button>
          </div>
        </div>

        {/* BLOG POST */}
        <BlogPosts />
      </div>
    </div>
  );
};

export default About;

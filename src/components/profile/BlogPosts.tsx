import React from "react";
import { BLOG_POSTS } from "~/constants/blog";
import PostCard from "./PostCard";

const BlogPosts = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 py-4">
      {BLOG_POSTS.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

export default BlogPosts;

import Card from "@/components/card";
import React from "react";
import { getPosts } from "@/action/get-posts";

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-slate-200 text-3xl my-4 text-center">myBlog!</h1>
      <div className="flex gap-4 justify-center flex-wrap my-6">
        {posts.posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

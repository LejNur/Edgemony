import { getPost } from "@/action/get-post";
import React from "react";

interface Post {
  params: { id: string };
}

export default async function Post({ params }: Post) {
  const { id } = params;

  const singlePost = await getPost(id);

  return (
    <article className="w-full bg-zinc-100 h-screen p-4 text-gray-900">
      <h2 className="text-center font-bold text-3xl my-3">
        {singlePost.title}
      </h2>
      <p className="leading-loose">{singlePost.body}</p>
    </article>
  );
}

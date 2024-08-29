import { getPost } from "@/action/get-post";
import React from "react";

interface Post {
  params: { id: string };
}

export default async function Post({ params }: Post) {
  const { id } = params;

  const singlePost = await getPost(id);

  return <div>{singlePost.title}</div>;
}

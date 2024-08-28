"use client";

import React, { useEffect, useState } from "react";
import { IBlogPost } from "../model/post";
import { getPost } from "@/action/get-post";

export default function Post() {
  const [post, setPost] = useState<IBlogPost | null>(null);

  const handlePost = async () => {
    try {
      const data = await getPost();
      setPost(data);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "An error occured while downloading user.";
      console.log(message);
    }
  };

  useEffect(() => {
    handlePost();
  }, []);

  return <>{post?.title}</>;
}

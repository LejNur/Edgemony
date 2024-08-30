"use client";

import { newPost } from "@/action/post-post";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Article() {
  const [title, setTitle] = useState<string>("");
  const [article, setArticle] = useState<string>("");

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      title: title,
      article: article,
    };
    // console.log("success,", formData);

    const newArticle = await newPost(formData.title, formData.article);
    console.log(newArticle);
    setTitle("");
    setArticle("");
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else {
      setArticle(value);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-2 p-4 w-2/5  "
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border-none rounded-md p-1"
          onChange={handleChange}
          value={title}
        />
        <textarea
          name="article"
          placeholder="Article"
          className="border-none rounded-md px-1 pb-8 resize-none"
          onChange={handleChange}
        ></textarea>
        <button className="bg-green-800 text-zinc-200 rounded-md w-60 p-2 hover:bg-green-600">
          Send
        </button>
      </form>
    </div>
  );
}

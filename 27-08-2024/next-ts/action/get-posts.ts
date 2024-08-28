import { IBlogPosts } from "@/app/model/post";

export const getPosts = async (): Promise<IBlogPosts> => {
  try {
    const res = await fetch("https://dummyjson.com/posts?limit=20");

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

import { IBlogPost } from "@/app/model/post";

export const getPost = async (): Promise<IBlogPost> => {
  try {
    const res = await fetch("https://dummyjson.com/posts/1");

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

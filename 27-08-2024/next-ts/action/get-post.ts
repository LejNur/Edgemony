import { IBlogPost } from "@/app/model/post";

export const getPost = async (id: string): Promise<IBlogPost> => {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

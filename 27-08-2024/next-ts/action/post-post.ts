import { IBlogPost } from "@/app/model/post";

export const newPost = async (
  title: string,
  body: string
): Promise<IBlogPost> => {
  try {
    const res = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        body,
        userId: Math.floor(Math.random() * 20) + 1,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

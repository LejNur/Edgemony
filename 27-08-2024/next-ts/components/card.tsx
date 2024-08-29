import { IBlogPost } from "@/app/model/post";
import Link from "next/link";

// { post }: { post: BlogPost } destructures the post prop and defines its type as BlogPost!
export default function Card({ post }: { post: IBlogPost }) {
  return (
    <div className="w-2/5 mx-4 mt-6">
      <article
        key={post.id}
        className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
      >
        <div className="bg-zinc-100 p-4 sm:p-6 ">
          <Link href={`/post/${post.id}`}>
            <h3 className="mt-0.5 text-lg text-gray-900 ">{post.title}</h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 ">
            {post.body}
          </p>

          <p>Likes ❤️{post.reactions.likes}</p>

          <div className="flex gap-2 items-center my-4">
            <p>
              {post.tags.map((tag) => (
                <span>#{tag} </span>
              ))}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  author: Author;
}

interface Author {
  name: string;
  surname: string;
  imageUrl: string;
}

// { post }: { post: BlogPost } destructures the post prop and defines its type as BlogPost!
export default function Card({ post }: { post: BlogPost }) {
  return (
    <div className="w-2/5 mx-4 mt-6">
      <article
        key={post.id}
        className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25"
      >
        <img
          alt="blog image"
          src={post.imageUrl}
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
              {post.title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            {post.description}
          </p>

          <div className="flex gap-2 items-center my-4">
            <img
              alt="author image"
              src={post.author.imageUrl}
              className="h-8 w-8 object-cover rounded-full"
            />
            <p>
              {post.author.name} {post.author.surname}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

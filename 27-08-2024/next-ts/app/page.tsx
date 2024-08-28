import Card from "@/components/card";
import React from "react";
import { getPosts } from "@/action/get-posts";

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "How to position your furniture for positivity?",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     author: {
//       name: "Joan",
//       surname: "Didion",
//       imageUrl:
//         "https://static01.nyt.com/images/2020/10/27/obituaries/00Didion1/merlin_159060084_0bf6b443-8300-4a12-944d-1030c1f25bf5-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
//     },
//   },
//   {
//     id: 2,
//     title: "5 Tips to Maximize Space in a Small Living Room",
//     description:
//       "Transform your small living room into a cozy and functional space with these five expert tips. Learn how to use space efficiently and make your room feel larger.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBsaXZpbmclMjByb29tfGVufDB8fDB8fHww",
//     author: {
//       name: "Fran",
//       surname: "Lebowitz",
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs44Z_DOySZP9AFKokT4EHBdJya4CvVU69pQ&s",
//     },
//   },
//   {
//     id: 3,
//     title: "The Ultimate Guide to Choosing a Perfect Sofa",
//     description:
//       "Choosing the right sofa can make or break your living room. Explore our ultimate guide to find a sofa that balances comfort, style, and durability.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
//     author: {
//       name: "Chimamanda Ngozi",
//       surname: "Adichie",
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLESLzFSiF1GhUcJYf2uNHJ5FHN6Db0xJjA&s",
//     },
//   },
// ];

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-slate-200 text-3xl my-4 text-center">myBlog!</h1>
      <div className="flex gap-4 justify-center flex-wrap my-6">
        {posts.posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

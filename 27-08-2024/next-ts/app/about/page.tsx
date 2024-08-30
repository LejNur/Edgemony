import React from "react";

export default function About() {
  return (
    <>
      <div className="h-screen w-4/6 mx-auto mt-6 text-zinc-200">
        <h1 className="my-3 text-2xl">About Us</h1>
        <p className="leading-6">
          Welcome to Blog! We're passionate about sharing insightful content on
          a variety of topics ranging from technology, lifestyle, travel, and
          much more. Our team is dedicated to bringing you the latest updates,
          in-depth articles, and engaging stories.
        </p>
        <h2 className="my-3 text-xl font-thin">Our Mission</h2>
        <p className="leading-6">
          Our mission is to inform, inspire, and connect with our readers
          through high-quality content. We believe in the power of knowledge and
          aim to be a reliable source of information for our audience.
        </p>
        <h2 className="my-3 text-xl font-thin">The Team</h2>
        <p className="leading-6">
          We're a diverse group of writers, editors, and content creators with a
          shared passion for storytelling. Each member of our team brings unique
          perspectives and expertise to the table, ensuring a rich and varied
          reading experience.
        </p>
        <h2 className="my-3 text-xl font-thin">Contact Us</h2>
        <p className="leading-6">
          We'd love to hear from you! Whether you have feedback, questions, or
          just want to say hi, feel free to reach out to us at{" "}
          <a
            className="font-thin hover:tracking-wide"
            href="mailto:contact@myblog.com"
          >
            contact@myblog.com
          </a>
          .
        </p>
      </div>
    </>
  );
}

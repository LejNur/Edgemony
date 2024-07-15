import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);

  function handleChange(e) {
    setPostId(e.target.value);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, [postId]);

  return (
    <div className=" bg-slate-100 h-screen flex flex-col items-center gap-4 p-5 ">
      <h1 className="text-5xl text-teal-500 font-bold">BlogPosts</h1>
      <input
        min="1"
        type="number"
        placeholder="Insert a number to find a blog"
        className="w-60 bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg p-2.5 shadow-sm"
        onChange={handleChange}
      />
      <div className="w-96 my-5 p-4 flex flex-col justify-center items-start gap-2 border-2 border-teal-500 rounded-lg shadow-md">
        <p>
          <span className="text-gray-800 font-bold">Post ID: </span>
          {post.id}
        </p>
        <p>
          <span className="text-gray-800 font-bold">Title: </span>
          {post.title}
        </p>
        <p>
          <span className="text-gray-800 font-bold">Post: </span>
          {post.body}
        </p>
      </div>
    </div>
  );
}

export default App;

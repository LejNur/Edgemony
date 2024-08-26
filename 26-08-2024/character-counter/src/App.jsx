import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const count = text.length;
  const words = text.split(" ");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-2xl text-violet-600 font-sans font-semibold text-center my-6">
        Character Counter
      </h1>

      <div className=" w-full flex flex-col items-center justify-center">
        <div className="flex gap-2">
          <button
            className="rounded mt-6 px-6 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-600"
            onClick={() => setText(text.toUpperCase())}
          >
            Change text to upper case
          </button>
          <button
            className="rounded mt-6 px-6 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-600"
            onClick={() => setText(text.toLowerCase())}
          >
            Change text to lower case
          </button>
        </div>

        <textarea
          className="resize-none w-3/5 mt-2 rounded-lg border-violet-600 align-top shadow-sm sm:text-sm p-2 focus:outline-violet-700"
          rows="10"
          placeholder="Enter text..."
          onChange={handleInput}
          value={text}
        ></textarea>
        <button
          type="button"
          className="rounded mt-6 bg-gray-200 px-6 py-1.5 text-sm font-medium text-violet-700 hover:text-gray-600"
          onClick={() => setText("")}
        >
          Clear
        </button>
      </div>

      {text && (
        <div className="flex gap-3 mt-4 text-gray-600">
          <p className="font-sans text-xl">
            Characters <span className="font-bold">{count}</span>
          </p>
          <p className="font-sans text-xl">
            Words <span className="font-bold">{words.length}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

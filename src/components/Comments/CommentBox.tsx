import { useState } from "react";

export default function CommentBox({
  placeholder,
  handleSubmit,
}: {
  placeholder: string;
  handleSubmit: (comment: string) => void;
}) {
  const [comment, setComment] = useState("");

  const submitComment = () => {
    handleSubmit(comment);
    setComment("");
  };

  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="flex-grow">
        <input
          className="placeholder-font-serif w-full rounded-lg p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder={placeholder}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
      </div>
      <div className="flex min-w-[30px] flex-shrink items-center justify-end">
        <button onClick={submitComment} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer text-slate-600 hover:text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

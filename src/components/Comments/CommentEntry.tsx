import type { Comment } from "@/types/comment";

export default function CommentEntry({ comment }: { comment: Comment }) {
  return (
    <div className="my-2 flex items-start space-x-4">
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="min-w-0 flex-1 rounded-md bg-white/30 p-2">
        <div>
          <div className="text-md">
            <a href="#" className="font-medium text-gray-900">
              {comment.author}
            </a>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">{comment.content}</p>
        </div>
        <div className="mt-1 flex items-center space-x-2 text-xs text-gray-500">
          <span>{comment.date.toLocaleString("en-US")}</span>
          <span aria-hidden="true">&middot;</span>
          <span className="font-bold">0</span>
          <span aria-hidden="true">&middot;</span>
          <button className="text-slate-600 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <button className="text-slate-600 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

import { FeedItem } from "@/types/feed";
import CommentBox from "../Comments/CommentBox";
import { Post } from "@prisma/client";
import { useEffect } from "react";

export default function Sources({ post }: { post: Post }) {
  return (
    <div className="my-2 rounded-lg bg-white/40 p-3">
      <div className="mb-3 flex items-center justify-start space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
        <p className="text-lg font-semibold">Original Sources</p>
      </div>

      {post.sources.map((source) => (
        <p className="text-md">
          <a href="#" className="text-blue-500">
            {source}
          </a>
        </p>
      ))}
      {/* <p className="text-md">
        <a href="#" className="text-blue-500">
          https://townofcutlerbay.gov/legislation/1534rf346tf3433434233434
        </a>
      </p>
      <p className="text-md">
        <a href="#" className="text-blue-500">
          https://miamidadecounty.gov/news/2023/f2r3
        </a>
      </p> */}
    </div>
  );
}

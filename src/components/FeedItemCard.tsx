import Link from "next/link";
import { FEED_ITEM_TYPE_THEME } from "@/constants/feed";
import { FeedItem } from "@/types/feed";

export default function FeedItemCard({
  type,
  title,
  description,
  date,
  id,
}: FeedItem) {
  return (
    <Link
      href={`/dashboard/post/${id}`}
      className={`flex flex-col gap-1 rounded-xl ${FEED_ITEM_TYPE_THEME[type].color} p-4 ${FEED_ITEM_TYPE_THEME[type].hoverColor}`}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex-grow">
          <div className="bg-te flex flex-row items-center gap-2">
            <span className={`font-bold} text-xl`}>
              {FEED_ITEM_TYPE_THEME[type].icon}
            </span>
            <span className="font-serif text-2xl font-bold">{title}</span>
          </div>
          <p className="text-md">{description}</p>
          <p className="text-sm text-gray-400">
            {date.toLocaleString("en-US")}
          </p>
        </div>

        <div className="flex min-w-[50px] justify-end">
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

"use client";
import type { FeedItem } from "@/types/feed";
import FeedItemCard from "../../components/FeedItemCard";
import { DUMMY_FEED } from "../../constants/feed";
import Filters from "@/components/Filters";
import { useEffect, useState } from "react";
import { Post } from "@prisma/client";
import { prev } from "node_modules/cheerio/lib/api/traversing";

export default function Dashboard() {
  const [feed, setFeed] = useState<Post[]>(DUMMY_FEED);
  const [isLoading, setIsLoading] = useState(false);

  const getFeed = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/posts");
    const json = (await res.json()) as { posts: Post[] };
    const { posts } = json;
    setFeed([...posts, ...DUMMY_FEED]);
    setIsLoading(false);
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <main className="container mx-auto grid grid-cols-6 gap-4 p-4">
      <div className="col-span-4 rounded-xl bg-white/20 p-4">
        <h2 className="font-serif text-2xl font-bold">My Feed</h2>
        <p className="mt-1 text-lg">
          View the latest news and updates as they happen.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-2">
          {feed.map((item) => (
            <FeedItemCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="col-span-2 rounded-xl bg-white/20 p-4">
        <h2 className="font-serif text-2xl font-bold">Filters</h2>
        <p className="mb-2 mt-1 text-lg">
          What type of content are you interested in?
        </p>
        <Filters />
      </div>
    </main>
  );
}

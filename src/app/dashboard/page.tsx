import type { FeedItem } from "@/types/feed";
import FeedItemCard from "../../components/FeedItemCard";
import { DUMMY_FEED } from "../../constants/feed";

export default function Dashboard() {
  return (
    <main className="container mx-auto grid grid-cols-6 gap-4 p-4">
      <div className="col-span-4 rounded-xl bg-white/20 p-4">
        <h2 className="font-serif text-2xl font-bold">My Feed</h2>
        <p className="mt-1 text-lg">
          View the latest news and updates as they happen.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-2">
          {DUMMY_FEED.map((item) => (
            <FeedItemCard {...item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="col-span-2 rounded-xl bg-white/20 p-4">
        <h2 className="font-serif text-2xl font-bold">Filters</h2>
        <p className="mt-1 text-lg">
          What type of content are you interested in?
        </p>
      </div>
    </main>
  );
}

import type { FeedItemProps } from "../../components/FeedItem";
import FeedItem from "../../components/FeedItem";

const DUMMY_FEED: FeedItemProps[] = [
  {
    type: "legislation",
    title: "New Legislation Proposal",
    description:
      "A new legislation proposal has been introduced for public review.",
    date: new Date("2023-11-22T10:30:00Z"),
    id: "1",
  },
  {
    type: "news",
    title: "City Park Renovation Update",
    description:
      "Get the latest news on the progress of the city park renovation project.",
    date: new Date("2023-11-22T12:45:00Z"),
    id: "2",
  },
  {
    type: "event",
    title: "Community Cleanup Day",
    description:
      "Join us for a community cleanup day on Saturday. Let's work together to keep our neighborhood clean!",
    date: new Date("2023-11-23T09:00:00Z"),
    id: "3",
  },
];

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
            <FeedItem {...item} key={item.id} />
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

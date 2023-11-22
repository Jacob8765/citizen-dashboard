import type { FeedItemProps } from "@/components/FeedItem";

export default function PostDetailsPage({
  params,
}: {
  params: { postId: string };
}) {
  return (
    <main className="container mx-auto grid grid-cols-6 gap-4 p-4">
      <div className="col-span-4 rounded-xl bg-white/20 p-4">
        <h2 className="font-serif text-2xl font-bold">
          Example Title {params.postId}
        </h2>
        <p className="mt-1 text-lg">Example Description...</p>
      </div>

      <div className="col-span-2 rounded-xl bg-white/20 p-4">
        <h2 className="font-serif text-2xl font-bold">Comments</h2>
        <p className="mt-1 text-lg">Loading...</p>
      </div>
    </main>
  );
}

"use client";
import Comments from "@/components/Comments/Comments";
import type { FeedItem } from "@/types/feed";
import { DUMMY_COMMENTS } from "@/constants/feed";
import { DUMMY_FEED } from "@/constants/feed";
import CommentBox from "@/components/Comments/CommentBox";
import AISummary from "@/components/Feed/AISummary";
import Sources from "@/components/Feed/Sources";
import { useEffect, useState } from "react";
import { Post } from "@prisma/client";

export default function PostDetailsPage({
  params,
}: {
  params: { postId: number };
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<Post | null>(null);

  const getPost = async () => {
    setIsLoading(true);
    const res = await fetch(
      `http://localhost:3000/api/posts/?id=${params.postId}`,
    );
    const json = (await res.json()) as { post: Post };
    const { post } = json;
    setPost(post);
    setIsLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <main className="container mx-auto grid grid-cols-6 gap-4 p-4">
      <div className="col-span-4 space-y-4 rounded-xl bg-white/20 p-4">
        <h2 className="font-serif text-2xl font-bold">
          {post?.title || "Loading..."}
        </h2>
        <AISummary post={post!} />
        <Sources post={post!} />
      </div>

      <div className="col-span-2 rounded-xl bg-white/20 p-4">
        <div className="flex h-full flex-col">
          <div className="flex-grow">
            <h2 className="mb-3 font-serif text-2xl font-bold">Comments</h2>
            <Comments comments={DUMMY_COMMENTS} />
          </div>
          <CommentBox placeholder="Add a comment..." />
        </div>
      </div>
    </main>
  );
}

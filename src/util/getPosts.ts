import { Post } from "@prisma/client";
import { db } from "@/server/db";

export const getPosts = async (): Promise<Post[]> => {
  const posts = await db.post.findMany({
    take: 1,
    orderBy: { createdAt: "desc" },
  });

  return posts;
};

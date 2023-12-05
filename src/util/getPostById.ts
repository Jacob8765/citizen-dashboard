import { Post } from "@prisma/client";
import { db } from "@/server/db";

export const getPostById = async (id: number): Promise<Post> => {
  const post = await db.post.findUnique({
    where: {
      id,
    },
  });

  if (!post) throw new Error(`No post found with id ${id}`);

  return post;
};

import { db } from "@/server/db";
import { getServerAuthSession } from "@/server/auth";

export const createComment = async (content: string, postId: number) => {
  const session = await getServerAuthSession();
  if (!session) throw new Error("Not authenticated");

  const userId = session.user.id;

  const result = await db.comment.create({
    data: {
      content: content,
      // createdBy: {
      //     connect: {
      //         id: userId
      //     }
      // },
      postId: postId,
      createdById: userId,
    },
  });

  if (!result) throw new Error("Failed to create comment");
  return result;
};

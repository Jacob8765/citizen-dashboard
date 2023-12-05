import { NewPost } from "@/types/newPost";
import { db } from "@/server/db";
import { getAISummary } from "./aiSummary";
import { parseWebpage } from "./parseWebpage";
import { getServerAuthSession } from "@/server/auth";

export const createPost = async (data: NewPost) => {
  const session = await getServerAuthSession();
  if (!session || !session.user.id) throw new Error("Not authenticated");

  const userId = session.user.id;

  let textContent = "";
  const sources = data.urls.split("\n");

  for (const url of sources) {
    const text = await parseWebpage(url);
    const cleanedText = text.replace(/\s+/g, " ");
    textContent += cleanedText.trim() + "\n\n";
  }

  //get the summary from langchain
  const { summary, vectorId } = await getAISummary(textContent);

  const post = await db.post.create({
    data: {
      type: "legislation",
      title: data.title,
      description: data.description,
      summary,
      vectorId,
      createdById: userId,
      sources: sources,
      //   createdBy: {
      //     connect: {
      //       id: userId,
      //     },
      //   },
    },
  });

  if (!post) throw new Error("Failed to create post");

  return post;
};

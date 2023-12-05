import { NextApiRequest, NextApiResponse } from "next";
import { useForm } from "react-hook-form";
import type { NewPost } from "@/types/newPost";
import { parseWebpage } from "@/util/parseWebpage";
import { getAISummary } from "@/util/aiSummary";
import { createPost } from "@/util/createPost";
import { NextRequest } from "next/server";
import { getPostById } from "@/util/getPostById";
import { getPosts } from "@/util/getPosts";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as NewPost;
    let textContent = "";

    const post = await createPost(data);

    return Response.json({
      post,
    });
  } catch (error) {
    console.error("Error processing new post:", error);
    return Response.error();
  }
}

export async function GET(request: NextRequest) {
  //get post by id
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    const posts = await getPosts();
    return Response.json({
      posts,
    });
  }

  const post = await getPostById(parseInt(id));
  if (!post) {
    return Response.json({ message: "No post found" });
  }

  return Response.json({
    post,
  });
}

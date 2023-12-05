import { NextApiRequest, NextApiResponse } from "next";
import { useForm } from "react-hook-form";
import type { NewPost } from "@/types/newPost";
import { parseWebpage } from "@/util/parseWebpage";
import { getAISummary } from "@/util/aiSummary";
import { createPost } from "@/util/createPost";
import { NextRequest } from "next/server";
import { getPostById } from "@/util/getPostById";
import { NewUser } from "@/types/newUser";
import { createUser } from "@/util/createUser";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as NewUser;

    const user = await createUser(data);

    return Response.json({
      user,
    });
  } catch (error) {
    console.error("Error processing new user:", error);
    return Response.error();
  }
}

// export async function GET(request: NextRequest) {
//   //get post by id
//   const id = request.nextUrl.searchParams.get("id");
//   if (!id) {
//     return Response.json({ message: "No id provided" });
//   }

//   const post = await getPostById(parseInt(id));
//   if (!post) {
//     return Response.json({ message: "No post found" });
//   }

//   return Response.json({
//     post,
//   });
// }

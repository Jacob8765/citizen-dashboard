import { NextApiRequest, NextApiResponse } from "next";
import { useForm } from "react-hook-form";
import type { NewPost } from "@/types/newPost";
import { parseWebpage } from "@/util/parseWebpage";
import { getAISummary } from "@/util/aiSummary";

export async function POST(request: Request) {
  try {
    const { title, description, urls } = (await request.json()) as NewPost;
    let textContent = "";

    for (const url of urls.split("\n")) {
      const text = await parseWebpage(url);
      const cleanedText = text.replace(/\s+/g, " ");
      textContent += cleanedText.trim() + "\n\n";
    }

    //get the summary from langchain
    const summary = await getAISummary(textContent);

    return Response.json({
      summary: summary,
      //   content: textContent,
      title: title,
      description: description,
      urls: urls,
      success: true,
      error: "",
    });
  } catch (error) {
    console.error("Error processing new post:", error);
    return Response.error();
  }
}

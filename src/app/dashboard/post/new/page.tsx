"use client";
import NewPostForm from "@/components/NewPostForm";
import type { NewPost } from "@/types/newPost";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";

export default function NewPostPage() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<NewPost> = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error("Error processing new post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto ">
      <NewPostForm isLoading={isLoading} onFormSubmit={onSubmit} />
    </main>
  );
}

"use client";
import Input from "@/components/Inputs/Input";
import TextArea from "@/components/Inputs/TextArea";
import NewPostForm from "@/components/NewPostForm";
import NewUserForm from "@/components/NewUserForm";
import type { FeedItem } from "@/types/feed";
import type { NewPost } from "@/types/newPost";
import { NewUser } from "@/types/newUser";
import { createPost } from "@/util/createPost";
import { createUser } from "@/util/createUser";
import { useState } from "react";
import { Controller, useForm, Form, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<NewUser> = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      console.log(json);
      router.push("/api/auth/signin");

      console.log(res);
    } catch (error) {
      console.error("Error processing new user:", error);
    }
  };

  return (
    <main className="container mx-auto ">
      <NewUserForm isLoading={isLoading} onFormSubmit={onSubmit} />
    </main>
  );
}

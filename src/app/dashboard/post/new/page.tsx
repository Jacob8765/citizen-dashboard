"use client";
import Input from "@/components/Inputs/Input";
import TextArea from "@/components/Inputs/TextArea";
import type { FeedItem } from "@/types/feed";
import type { NewPost } from "@/types/newPost";
import { Controller, useForm, Form, SubmitHandler } from "react-hook-form";

export default function NewPostPage() {
  const { control, register, handleSubmit, setValue, formState } =
    useForm<NewPost>({});

  const onSubmit: SubmitHandler<NewPost> = (data) => {
    console.log("data");
    console.log(data);
  };

  return (
    <main className="container mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-4 p-4">
          <div className="col-span-4 space-y-4 rounded-xl bg-white/20 p-4">
            <h2 className="font-serif text-2xl font-bold">Create a Post</h2>
            <div className="grid grid-cols-2 gap-2">
              <Input id="title" label="Title" register={register} />
              <Input id="description" label="Description" register={register} />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <TextArea
                id="links"
                label="Links"
                register={register}
                placeholder="Enter links to the original source(s) separated by newlines. Note that at least one link must be a .gov website"
              />
            </div>
          </div>

          <div className="col-span-2 rounded-xl bg-white/20 p-4">
            <div className="flex h-full flex-col">
              <div className="flex-grow">
                <h2 className="mb-3 font-serif text-2xl font-bold">Options</h2>
                <p>...</p>
              </div>
              <button
                className="rounded-md bg-black p-2 text-white"
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

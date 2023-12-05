"use client";
import Input from "@/components/Inputs/Input";
import TextArea from "@/components/Inputs/TextArea";
import type { FeedItem } from "@/types/feed";
import type { NewPost } from "@/types/newPost";
import { NewUser } from "@/types/newUser";
import { createPost } from "@/util/createPost";
import { createUser } from "@/util/createUser";
import { useState } from "react";
import { Controller, useForm, Form, SubmitHandler } from "react-hook-form";

interface NewUserFormProps {
  isLoading: boolean;
  onFormSubmit: SubmitHandler<NewUser>;
}

export default function NewUserForm({
  isLoading,
  onFormSubmit,
}: NewUserFormProps) {
  const { control, register, handleSubmit, setValue, formState } =
    useForm<NewUser>({});

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="grid grid-cols-6 gap-4 p-4">
        <div className="col-span-4 space-y-4 rounded-xl bg-white/20 p-4">
          <h2 className="font-serif text-2xl font-bold">User Information</h2>
          <div className="grid grid-cols-2 gap-2">
            <Input id="email" label="Email" register={register} />
            <Input id="username" label="Username" register={register} />
            <Input
              id="password"
              label="Password"
              register={register}
              password
            />
            <Input id="name" label="Full Name" register={register} />
          </div>
        </div>

        <div className="col-span-2 rounded-xl bg-white/20 p-4">
          <div className="flex h-full flex-col">
            <div className="flex-grow">
              <h2 className="mb-3 font-serif text-2xl font-bold">Options</h2>
              <p>...</p>
            </div>
            <button
              className="rounded-md bg-black p-2 text-white hover:bg-gray-800"
              type="submit"
            >
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

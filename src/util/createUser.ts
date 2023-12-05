import { NewUser } from "@/types/newUser";
import { db } from "@/server/db";

export const createUser = async (newUser: NewUser) => {
  const result = await db.user.create({
    data: {
      email: newUser.email,
      password: newUser.password,
      name: newUser.name,
      username: newUser.username,
    },
  });

  if (!result) throw new Error("Failed to create user");
  return result;
};

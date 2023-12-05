import Link from "next/link";
import UserCard from "./UserCard";
import { getServerAuthSession } from "@/server/auth";

export default async function Navbar({ currentUrl }: { currentUrl: string }) {
  const session = await getServerAuthSession();

  return (
    <nav className="flex flex-row items-center p-5">
      <h1 className="font-serif text-3xl font-bold">Citizen Dashboard</h1>

      <div className="ml-8 flex-grow">
        <Link
          href="/dashboard"
          className={`mx-3 text-lg ${
            currentUrl === "/dashboard" ||
            currentUrl.startsWith("/dashboard/post/")
              ? "font-bold"
              : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/post"
          className={`mx-3 text-lg ${
            currentUrl === "/dashboard/post" ? "font-bold" : ""
          }`}
        >
          My Posts
        </Link>
        <Link
          href="/dashboard/post/new"
          className={`mx-3 text-lg ${
            currentUrl === "/dashboard/post" ? "font-bold" : ""
          }`}
        >
          Create Post
        </Link>
        <Link
          href="/dashboard/about"
          className={`mx-3 text-lg ${
            currentUrl === "/dashboard/about" ? "font-bold" : ""
          }`}
        >
          About
        </Link>
      </div>

      {!session?.user ? (
        <div className="justify-right col-span-3 flex items-center">
          <Link href="/api/auth/signin">
            <button className="items-end rounded-md bg-black px-4 py-2 font-serif font-bold text-white hover:bg-gray-800">
              Sign In
            </button>
          </Link>
          <Link href="/dashboard/register" className="ml-2">
            <button className="items-end rounded border border-black px-4 py-2 font-serif font-bold text-black hover:border-gray-800 hover:text-gray-800">
              Register
            </button>
          </Link>
        </div>
      ) : (
        <div className="col-span-3 flex items-center justify-end">
          <UserCard user={session.user} />
        </div>
      )}
    </nav>
  );
}

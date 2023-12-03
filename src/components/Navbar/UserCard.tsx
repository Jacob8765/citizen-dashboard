import { type Session } from "next-auth";
import Link from "next/link";

interface UserCardProps {
  user: Session["user"];
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex min-w-[200px] flex-row items-center justify-between">
      <div className="flex-grow flex-row items-center">
        <div className="mx-2 flex flex-row items-center justify-between rounded-full bg-black p-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <p className="ml-4 font-serif text-white">{user.name}</p>
        </div>
      </div>

      <div className="rounded-full bg-red-500 p-2 hover:bg-red-600">
        <Link href="/api/auth/signout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

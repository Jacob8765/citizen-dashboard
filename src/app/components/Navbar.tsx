"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center p-5">
      <h1 className="font-serif text-3xl font-bold">Citizen Dashboard</h1>

      <div className="ml-8 flex-grow">
        <Link
          href="/dashboard"
          className={`mx-3 font-serif text-lg ${
            pathname === "/dashboard" ? "font-bold" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/about"
          className={`mx-3 font-serif text-lg ${
            pathname === "/about" ? "font-bold" : ""
          }`}
        >
          About
        </Link>
      </div>

      <Link
        href="/auth/logout"
        className={`mx-3 font-serif text-lg ${
          pathname === "/auth/login" ? "font-bold" : ""
        }`}
      >
        Logout
      </Link>
    </nav>
  );
}

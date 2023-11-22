import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="text-center">
          <h1 className="font-serif text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Citizen Dashboard
          </h1>
          <p className="mt-2 font-serif text-xl font-normal">
            Keeping Miami informed.{" "}
            <span className="font-extrabold">Together.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-4 text-black hover:bg-white/40"
            href="/auth/login"
          >
            <h3 className="text-2xl font-bold">Login →</h3>
            <div className="text-lg">Access Dashboard</div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-4 text-black hover:bg-white/40"
            href="/auth/register"
          >
            <h3 className="text-2xl font-bold">Register →</h3>
            <div className="text-lg">Get Informed</div>
          </Link>
        </div>
      </div>
    </main>
  );
}

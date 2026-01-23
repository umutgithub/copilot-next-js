import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white dark:bg-black">
      <h1 className="text-4xl font-bold text-black dark:text-white">Concept Routes</h1>
      <nav className="flex gap-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link href="/signup" className="text-blue-500 hover:underline">
          Signup
        </Link>
        <Link href="/about" className="text-blue-500 hover:underline">
          About
        </Link>
      </nav>
    </div>
  );
}

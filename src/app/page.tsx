import Link from "next/link";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-2">
      {/* <p className="font-bold text-5xl">This is Home Page</p>
      <nav className="flex flex-col gap-2 text-blue-500">
          <Link href={'/portfolio'}>Vist portfolio page</Link>
          <Link href={'/user-detail'}>Vist user detail page</Link>
          <Link href={'/edit-portfolio'}>Visit edit or create portfolio</Link>
      </nav> */}
      <HomePage />
    </main>
  );
}


import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold text-5xl">This is Home Page</p>
      <div className="flex flex-col gap-2">
          <Link href={'/edit-portfolio'}>Vist edit or create page</Link>
          <Link href={'/portfolio'}>Vist portfolio page</Link>
      </div>
    </div>
  );
}

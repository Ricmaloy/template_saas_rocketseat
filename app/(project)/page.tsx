import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p>Landing Page</p>
      <Link href={'/login'}>Login</Link>
    </div>
  );
}

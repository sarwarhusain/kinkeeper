import Link from "next/link";

export default function NotFound() {
  return (
    <div className="border-accent shadow m-20 p-10">
      <h2 className="text-center font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn" href="/">Return Home</Link>
    </div>
  );
}

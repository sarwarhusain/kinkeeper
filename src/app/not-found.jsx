import Link from "next/link";
import { FaRegMessage } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="border-accent shadow m-20 p-10 text-center">
      <div className="flex items-center justify-center">
        <FaRegMessage className="text-4xl" />
      </div>
      <h2 className=" font-bold">Data Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn" href="/">
        Return Home
      </Link>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const User = ({ user }) => {
  const { id, name, img, tags, status } = user;
  const handleClicked = () => {
    toast.success("Added Successfully");
  };
  return (
    <Link href={`/users/${id}`} onClick={handleClicked}>
      <div className="card w-auto md:w-70 h-auto md:h-77 bg-base-100  rounded-2xl my-5 md:my-0">
        <figure className="pt-2 flex justify-center">
          <Image
            src={user.img}
            alt={user.name}
            width={80}
            height={80}
            className="w-24 h-24 rounded-full object-cover"
            priority //Next.js warns about LCP (Largest Contentful Paint) — basically
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.name}</h2>
          <p>{user.days_since_contact}d Ago</p>
          <div className="flex  items-center gap-5">
            {tags.map((tag, idx) => (
              <button
                className="btn rounded-full bg-green-200 uppercase"
                key={idx}
              >
                {tag}
              </button>
            ))}
          </div>
          <button
            className={`btn rounded-full ${user.status === "Overdue" ? "bg-red-500" : user.status === "AlmostDue" ? "bg-yellow-500" : user.status === "OnTrack" ? "bg-green-700 text-white" : ""} `}
          >
            {user.status}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default User;

"use client";

import Image from "next/image";

const User = ({ user }) => {
  const { id, name } = user;
  return (
    <div>
      <h2>Your Friends</h2>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <Image
            src={user.img}
            alt={user.name}
            width={300}
            height={300}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

"use client";
import { Geist } from "next/font/google";
import { GoPlus } from "react-icons/go";

const geist = Geist({
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <div className={`${geist.className} text-center my-10 space-y-3`}>
      <h2 className="font-bold text-3xl">Friends to keep close in your life</h2>
      <p className="">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <div className="flex  justify-center">
        <button className="btn flex items-center bg-[#244D3F] text-white ">
          <GoPlus />
          Add Friends
        </button>
      </div>
    </div>
  );
};

export default Banner;

"use client";
import { TimeLineContext } from "@/context/timeline.context";
import Link from "next/link";
import { useContext, useState } from "react";

const DetailTimeLine = () => {
  const { timeLine } = useContext(TimeLineContext);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  // console.log("sort", sort);

  let sortedData = [...timeLine];
  if (filter) {
    sortedData = sortedData.filter((data) => data.type === filter);
  }
  if (sort === "goals") {
    sortedData.sort((a, b) => a.target - b.target);
  } else if (sort === "days") {
    sortedData.sort((a, b) => a.contact - b.contact);
  }
  // console.log("sorted data", sortedData);

  return (
    <div className="gap-4 p-4 bg-base-100 rounded-xl shadow-2xl hover:shadow-md transition w-full max-w-7xl mx-auto">
      <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Timeline
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 "
        >
          <li onClick={() => setSort("goals")}>
            <a>Sort by Goal</a>
          </li>
          <li onClick={() => setSort("days")}>
            <a>Sort by Days</a>
          </li>
        </ul>
      </div>

      <div className="flex gap-2 m-1">
        <button className="btn btn-sm" onClick={() => setFilter("call")}>
          Call
        </button>
        <button className="btn btn-sm" onClick={() => setFilter("text")}>
          Text
        </button>
        <button className="btn btn-sm" onClick={() => setFilter("video")}>
          Video
        </button>

        <button className="btn btn-sm" onClick={() => setFilter("")}>
          Reset
        </button>
      </div>
      {sortedData.length === 0 ? (
        <div className="mx-auto m-20 p-10 text-center flex justify-center items-center ">
          <div className=" card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center">
              <h2 className="card-title">The TimeLine is Empty!</h2>
              <p>There are no call,text and video history</p>
              <div className="card-actions justify-end">
                <Link href={"/"} className="btn bg-[#244D3F] text-white">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        sortedData.map((user, idx) => (
          <div key={idx} className="">
            <div className="flex shadow-sm hover:shadow-md transition p-2 rounded-2xl items-center gap-2 m-3 ">
              <p className="text-3xl">{user.icon}</p>
              <div className="">
                <p>{user.name}</p>
                <p>{user.date}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DetailTimeLine;

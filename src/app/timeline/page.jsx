"use client";
import { TimeLineContext } from "@/context/timeline.context";
import { useContext, useState } from "react";

const DetailTimeLine = () => {
  const { timeLine } = useContext(TimeLineContext);
  const [sort, setSort] = useState("");
  console.log("sort", sort);
  const sortedData = [...timeLine];

  if (sort === "goals") {
    sortedData.sort((a, b) => a.target - b.target);
  } else if (sort === "days") {
    sortedData.sort((a, b) => a.contact - b.contact);
  }
  console.log("sorted data",sortedData);
  return (
    <div className=" gap-4 p-4 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition w-full max-w-7xl mx-auto">
      <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Timeline
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => setSort("goals")}>
            <a>Sort by Goal</a>
          </li>
          <li onClick={() => setSort("days")}>
            <a>Sort by Days</a>
          </li>
        </ul>
      </div>
      {sortedData.length === 0 ? (
        <p>No activity yet</p>
      ) : (
        sortedData.map((user, idx) => (
          <div key={idx} className=" ">
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

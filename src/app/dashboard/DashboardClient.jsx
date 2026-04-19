"use client";

import { TimeLineContext } from "@/context/timeline.context";
import Link from "next/link";
import React, { useContext } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const Chart = () => {
  const { timeLine = [] } = useContext(TimeLineContext);

  const data = [
    {
      name: "Text",
      value: timeLine.length,
      fill: "#7C3AED",
    },
    {
      name: "Call",
      value: timeLine.length,
      fill: "#1D4ED8",
    },
    {
      name: "Video",
      value: timeLine.length,
      fill: "#16A34A",
    },
  ];

  // console.log(data);

  return (
    <div className="my-10">
      <div className="shadow-sm">
        <h2 className="font-bold text-3xl">Friendship Analytics</h2>
      </div>
      <div className="md:px-80 shadow-2xl mt-5 w-full h-[500px]">
        {timeLine.length === 0 ? (
          <div className="mx-auto border-accent shadow m-20 p-10 text-center">
            <div className="flex items-center justify-center">
              <FaRegMessage className="text-4xl" />
            </div>
            <h2 className=" font-bold">Data is Empty</h2>
            <p>if you want add items go back</p>
            <Link className="btn" href="/">
              Return Home
            </Link>
          </div>
        ) : (
          <>
            <h2 className="font-bold text-3xl">By Interaction Type</h2>
            <PieChart
              style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "80vh",
                margin: "auto",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={8}
                dataKey="value"
              ></Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </>
        )}
      </div>
    </div>
  );
};

export default Chart;

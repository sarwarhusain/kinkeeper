import React from "react";
import DetailTimeLine from "./timelineClient/page";
export const metadata = {
  title: "Timeline",
};
const Timeline = () => {
  return (
    <div className="gap-4 p-4 bg-base-100 rounded-xl shadow-2xl hover:shadow-md transition w-full max-w-7xl mx-auto">
      <DetailTimeLine />
    </div>
  );
};

export default Timeline;

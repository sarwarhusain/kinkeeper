"use client";

import { TimeLineContext } from "@/context/timeline.context";
import { useContext } from "react";

const TimeLine = () => {
  const track = useContext(TimeLineContext);
  console.log("track", track);
  

  const handleCall = () => {
    console.log("clicked call");
  };
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Quick Check-in</h3>
      <div className="grid grid-cols-3 gap-3">
        <button onClick={handleCall} className="btn">
          📞 Call
        </button>
        <button className="btn">💬 Text</button>
        <button className="btn">🎥 Video</button>
      </div>
    </div>
  );
};

export default TimeLine;

"use client";

import { TimeLineContext } from "@/context/timeline.context";
import { useContext } from "react";
import { toast } from "react-toastify";

const icons = {
  call: "📞",
  text: "💬",
  video: "🎥",
};

const TimeLineBtn = ({ user }) => {
  const { timeLine, setTimeLine } = useContext(TimeLineContext);
  console.log(timeLine, "timelineContext");

  const handleCallPhoneMsg = (type) => {
    // console.log("clicked call");
    toast.success(`${type} with Alex Johnson`);
    const newData = {
      type,
      icon: icons[type],
      name: user.name,
      date: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      contact: user.days_since_contact,
      target: user.goal,
      img: user.img,
      names: user.name,
      status: user.status,
    };
    setTimeLine([...timeLine, newData]);
    // toast.success(`The ${user.name} added details`);
  };
  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Quick Check-in</h3>
      <div className="grid grid-cols-3 gap-3">
        <button onClick={() => handleCallPhoneMsg("call")} className="btn">
          📞 Call
        </button>

        <button onClick={() => handleCallPhoneMsg("text")} className="btn">
          💬 Text
        </button>

        <button onClick={() => handleCallPhoneMsg("video")} className="btn">
          🎥 Video
        </button>
      </div>
    </div>
  );
};

export default TimeLineBtn;

"use client";
import React, { createContext, useState } from "react";
export const TimeLineContext = createContext();

const TimeLineContextProvider = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);
  const data = {
    timeLine,
    // timeline
    setTimeLine,
  };
  return (
    <div>
      <TimeLineContext value={data}>{children}</TimeLineContext>
    </div>
  );
};

export default TimeLineContextProvider;

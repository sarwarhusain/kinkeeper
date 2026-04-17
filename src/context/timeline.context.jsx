"use client";
import React, { createContext, useState } from "react";
export const TimeLineContext = createContext();

const TimeLineContextProvider = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);
  const data = {
    timeLine,
    setTimeLine,
  };
  return (
    <div>
      <TimeLineContext.Provider value={data}>
        {children}
      </TimeLineContext.Provider>
    </div>
  );
};

export default TimeLineContextProvider;

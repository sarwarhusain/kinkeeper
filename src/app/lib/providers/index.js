"use client";
import TimeLineContextProvider from "@/context/timeline.context";

const Providers = ({ children }) => {
  return (
    <div>
      <TimeLineContextProvider>{children}</TimeLineContextProvider>
    </div>
  );
};

export default Providers;

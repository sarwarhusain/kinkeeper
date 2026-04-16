import Banner from "@/components/Banner";
import Users from "./users/page";
import Stat from "@/components/Stat";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch("http://localhost:3000/UsersData.json");
  const data = await res.json();
  return (
    <div className="">
      <Banner />
      <Suspense fallback="Loading Stat">
        <Stat data={data} />
      </Suspense>

      <Users />
    </div>
  );
}

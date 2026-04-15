import Banner from "@/components/Banner";
import Users from "./users/page";
import Stat from "@/components/Stat";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Stat />
      <Users />
    </div>
  );
}

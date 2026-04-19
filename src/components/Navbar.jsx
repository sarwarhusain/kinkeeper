"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiTimer } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
// export const metadata: Metadata = {
//   title: 'My Blog',
//   description: '...',
// }

const Navbar = () => {
  const path = usePathname();
  const links = (
    <>
      <li>
        <Link
          className={`btn text-black ${path === "/" ? "bg-[#244D3F] text-white" : ""} `}
          href="/"
        >
          <FaHome /> Home
        </Link>
      </li>
      <li>
        <Link
          className={`btn text-black ${path === "/timeline" ? "bg-[#244D3F] text-white" : ""} `}
          href="/timeline"
        >
          <CiTimer /> TimeLine
        </Link>
      </li>
      <li>
        <Link
          className={`btn ${path === "/dashboard" ? "bg-[#244D3F] text-white" : ""} `}
          href="/dashboard"
        >
          <FaChartLine /> Stats
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoIosMenu />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex px-5">
        <ul className="menu menu-horizontal space-x-3">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;

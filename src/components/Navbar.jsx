import Link from "next/link";
import { FaHome } from "react-icons/fa";
// export const metadata: Metadata = {
//   title: 'My Blog',
//   description: '...',
// }
const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="bg-[#244D3F] text-white" href="/">
          <FaHome /> Home
        </Link>
      </li>
    </>
  );
  return (
    <div className=" navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">KeenKeeper</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;

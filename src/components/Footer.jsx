import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
      <aside>
        <p className="font-bold text-4xl">KeenKeeper</p>

        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </aside>
      <nav>
        <h2>Social Links</h2>
        <div className="grid grid-flow-col gap-4">
          <a>
            {/* facebook */}
            <FaFacebook />
          </a>
          <a>
            {/* ig */}
            <FaInstagram />
          </a>
          <a>
            {/* twitter */}
            <FaXTwitter />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10  border-t">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-olive-500 rounded">
              Privacy Policy
            </p>
            <p className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-olive-500 rounded">
              Terms of Service
            </p>
            <p className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-olive-500 rounded ">
              Cookies
            </p>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

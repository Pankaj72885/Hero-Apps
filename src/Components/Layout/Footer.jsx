import { Link } from "react-router";
import fb from "../../assets/icons/fb.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import x from "../../assets/icons/x.svg";
import logo from "../../assets/logo.png";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className="bg-[#001931]">
      <footer className="py-8 text-white space-y-7.5">
        <div className="flex flex-col gap-y-5 md:flex-row justify-between items-center py-2 border-b border-[#E5E7EB]/20">
          <Link className="flex gap-x-1 items-center justify-baseline" to="/">
            <img className="size-10" src={logo} alt="Logo" />
            <p className="text-white font-bold text-base">Hero.IO</p>
          </Link>
          <div>
            <nav className="flex flex-col gap-y-2 items-center justify-center">
              <Link className="hover:underline" to="/">
                Home
              </Link>
              <Link className="hover:underline" to="/apps">
                Apps
              </Link>
              <Link className="hover:underline" to="/installation">
                Installation
              </Link>
            </nav>
          </div>
          <div className="space-y-2 md:space-y-4">
            <p className="text-center text-xl font-medium">Social Links</p>
            <div className="flex items-center justify-center gap-x-4 p-2">
              <a href="https://x.com/pankajpppaz" target="_blank">
                <img className="size-5" src={x} alt="x logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/pankaj-bepari-8aa69013a/"
                target="_blank"
              >
                <img className="size-5" src={linkedin} alt="linkedin logo" />
              </a>
              <a
                href="https://www.facebook.com/Pankajbepari7288/"
                target="_blank"
              >
                <img className="size-5" src={fb} alt="facebook logo" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto w-fit">
          <p>
            Copyright &copy; {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

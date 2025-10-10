import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import github from "../../assets/icons/github.svg";
import list from "../../assets/icons/list.svg";
import logo from "../../assets/logo.png";
import Container from "./Container";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  const navLinks = (
    <>
      <NavLink className="myHover" to="/" end>
        Home
      </NavLink>
      <NavLink className="myHover" to="/apps">
        Apps
      </NavLink>
      <NavLink className="myHover" to="/installation">
        My Installation
      </NavLink>
    </>
  );
  return (
    <Container className="bg-white border-b border-[#e9e9e9]">
      <header className="py-4 flex justify-between items-center">
        <div className="flex items-center justify-baseline gap-x-4">
          <div className="md:hidden relative" ref={menuRef}>
            <img
              onClick={handleClick}
              className={`${toggle ? "rotate-90" : "rotate-0"} cursor-pointer`}
              src={list}
              alt="list icon"
            />
            <nav
              className={`${
                toggle ? "opacity-100" : "opacity-0 pointer-events-none"
              } absolute flex flex-col gap-y-1 bg-gray-200 px-3 py-1 rounded-sm items-start justify-baseline top-10 transition-all duration-500 ease-in-out`}
            >
              {navLinks}
            </nav>
          </div>
          <Link className="flex gap-x-1 items-center justify-baseline" to="/">
            <img className="size-10" src={logo} alt="Logo" />
            <p className="custom-gradient bg-clip-text text-transparent font-bold text-base capitalize">
              Hero Apps
            </p>
          </Link>
        </div>
        <div>
          <nav className="hidden md:flex gap-x-8 items-center justify-center ">
            {navLinks}
          </nav>
        </div>
        <div className="custom-gradient  px-4 py-3 rounded-sm text-base font-semibold text-white hover:scale-100 md:hover:scale-105  scale-90 md:scale-100 transition-all duration-300 ease-in-out">
          <a
            className="flex items-center justify-center gap-x-2.5"
            href="https://github.com/Pankaj72885"
            target="_blank"
          >
            <img src={github} alt="Github Icon" /> Contribute
          </a>
        </div>
      </header>
    </Container>
  );
};

export default Header;

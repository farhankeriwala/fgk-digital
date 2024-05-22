import { useState } from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import GetStartedButton from "../components/GetStartedButton";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="py-4 px-8 sm:px-16 lg:px-24 xl:px-36 2xl:px-40 w-full sticky top-0 left-0 z-10 bg-opacity-25 bg-white backdrop-blur-md backdrop-filter">
      <header className="w-full hidden lg:flex items-center justify-between py-4">
        <Logo />
        <Navbar />
        <GetStartedButton />
      </header>
      <header className="lg:hidden ">
        <span className="flex items-center justify-between">
          <Logo />
          <button onClick={() => handleMenuToggle()}>
            {menuOpen ? (
              <MdClose className="text-4xl text-matteBlack" />
            ) : (
              <MdMenu className="text-4xl text-matteBlack" />
            )}
          </button>
        </span>
        {menuOpen && <Navbar />}
      </header>
    </div>
  );
};

export default Header;

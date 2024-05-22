import GetStartedButton from "./GetStartedButton";

const Navbar = () => {
  return (
    <nav className="my-1 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
      {["About", "Work", "Process", "Contact"].map((item) => (
        <a
          key={`navlink-${item.toLocaleLowerCase()}`}
          href={`#${item.toLocaleLowerCase()}`}
          className="font-OpenSans font-normal text-md lg:text-lg text-matteBlack hover:text-orange-600 transition-colors duration-200"
        >
          {item}
        </a>
      ))}
      <span className="lg:hidden">
        <GetStartedButton />
      </span>
    </nav>
  );
};

export default Navbar;

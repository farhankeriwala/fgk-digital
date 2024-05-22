import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'}>
      <h1 className="font-BricolageGrotesque font-light text-matteBlack text-center text-4xl">
        <span className="font-medium">FGK</span> Digital
      </h1>
    </Link>
  );
};

export default Logo;

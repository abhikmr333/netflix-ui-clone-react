import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-black">
      <img className="h-20 w-48" src={NETFLIX_LOGO} alt="Netflix logo" />
    </header>
  );
};

export default Header;

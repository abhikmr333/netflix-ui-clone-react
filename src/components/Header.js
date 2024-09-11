import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <header>
      <img className="h-20 w-48" src={NETFLIX_LOGO} alt="Netflix logo" />
    </header>
  );
};

export default Header;

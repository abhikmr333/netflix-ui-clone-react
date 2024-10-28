import { useSelector } from "react-redux";

const Browse = () => {
  const userName = useSelector((store) => store.user?.displayName);
  return <h1>{userName}</h1>;
};

export default Browse;

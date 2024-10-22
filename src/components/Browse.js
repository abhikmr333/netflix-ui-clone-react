import { useSelector } from "react-redux";

const Browse = () => {
  const userName = useSelector((store) => store.userReducer?.displayName);
  return <h1>{userName}</h1>;
};

export default Browse;

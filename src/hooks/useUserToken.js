import { useSelector } from "react-redux";

const useUserToken = () => {
  const userToken = useSelector((state) => state.auth.userToken);
  return userToken;
};

export default useUserToken;

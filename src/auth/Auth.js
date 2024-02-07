import { Navigate, Outlet } from "react-router";
import DataContext from "../context/DataProvider";
import { useContext } from "react";

const Auth = () => {
  const { loginState, setLoginState } = useContext(DataContext);

  return loginState ? <Outlet /> : <Navigate to="/login" />;
};

export default Auth;

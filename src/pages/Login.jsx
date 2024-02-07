import React, { useContext, useState } from "react";
import billing from "../assests/billing.jpg";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill, RiLoginBoxFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataProvider";
import { useScrollTrigger } from "@mui/material";

const Login = () => {
  const { loginState, setLoginState } = useContext(DataContext);
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
    status: "",
  });
  // console.log(loginState);

  function handleLogin() {
    if (login.username == "admin" && login.password == "admin") {
      setLogin((preVal) => ({ ...preVal, status: "Success" }));
      setLoginState(true);
      navigate("/dashboard");
    } else {
      setLogin((preVal) => ({
        ...preVal,
        status: "Please check username and password",
      }));
    }
    console.log(login);
  }
  function handleLoginChange(eve) {
    setLogin((preVal) => ({
      ...preVal,
      [eve.target.name]: eve.target.value,
    }));
  }

  return (
    <>
      <img
        src={billing}
        alt="billing-image"
        className="w-full h-screen bg-gradient-to-b from-gray-80 via-opacity-80 to-opacity-100 bg-cover bg-center relative "
        style={{ backgroundImage: "url(background.jpg)" }}
      />

      <div className="sm:flex items-center justify-center ">
        <div className=" mt-40  absolute top-0 bg-slate-50 shadow-xl border-2 rounded-2xl shadow-black ">
          <div>
            <div className="font-bold text-center text-2xl m-4">Login</div>

            <div className="flex items-center m-5 mx-8 ">
              <FaUser className="text-orange-400 w-5 h-5 shadow-xl absolute items-center justify-center mx-2" />
              <input
                name="username"
                type="text"
                onChange={handleLoginChange}
                placeholder="Enter your username"
                className="border-2 rounded-xl shadow-2xl text-start px-20 p-2 "
              />
            </div>

            <div className="flex items-center  m-5 mx-8 ">
              <RiLockPasswordFill className="text-orange-400 w-5 h-5 shadow-xl absolute items-center justify-center mx-2" />
              <input
                name="password"
                onChange={handleLoginChange}
                placeholder="Enter your password"
                type="password"
                className="border-2 rounded-xl shadow-2xl text-start px-20 p-2 x"
              />
            </div>
            <div
              type="button"
              className="text-center rounded-3xl bg-orange-400 my-10 p-3 mx-20 drop-shadow-2xl shadow-black"
              onClick={handleLogin}
            >
              {/* <Link to={"/dashboard"} className="p-4 text-white font-bold "> */}
              Login
              {/* </Link> */}
            </div>
            <p>{login.status}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

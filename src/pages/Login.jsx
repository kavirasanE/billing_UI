import React from "react";
import billing from "../assests/billing.jpg";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    {/* <div className="">
    <img
        src={billing}
        alt="billing-image"
        className=""
       
      />
    </div> */}
    <div className="flex items-center justify-center ">
        <div className="flex justify-center items-center mt-40 absolute top-0 bg-slate-50 shadow-xl ">
          <div className="border-2 rounded-2xl ">
            <div className="font-bold text-center text-2xl m-4">Login</div>

            <div className="flex items-center m-5 mx-8 ">
              <FaUser className="text-orange-400 w-5 h-5 shadow-xl absolute items-center justify-center mx-2" />
              <input
                type="text"
                placeholder="Enter your username"
                className="border-2 rounded-xl shadow-2xl text-center px-20 p-2 "
              />
            </div>

            <div className="flex items-center  m-5 mx-8 ">
              <RiLockPasswordFill className="text-orange-400 w-5 h-5 shadow-xl absolute items-center justify-center mx-2" />
              <input
                placeholder="Enter your password"
                type="password"
                className="border-2 rounded-xl shadow-2xl text-center px-20 p-2 x"
              />
            </div>
            <div  type="button" className="text-center  rounded-3xl bg-orange-400  p-4 mx-20 my-10 drop-shadow-2xl shadow-black">
              <Link to={'/dashboard'} className="p-4 text-white font-bold ">Login</Link>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Login;

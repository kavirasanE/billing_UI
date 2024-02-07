import React from "react";
import Navbar from "../components/Navbar";

import UsersTable from "../components/UsersTable";
import { Link } from "react-router-dom";
const Users = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12 flex flex-row  justify-between mx-10  rounded-full  shadow-sm border-2 shadow-blue-600">
        <Link to={'/dashboard'} className="p-2 px-14  m-3 bg-gray-400 hover:bg-orange-500  text-white shadow-lg shadow-blue-700 rounded-full text-xl font-bold">
          Dashboard
        </Link>
        <Link to={'/users'} className="p-2 px-10  m-3  bg-orange-500  text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold">
          Users
        </Link>
        <Link to={'/subscription'} className="p-2 px-8  m-3 bg-gray-500 hover:bg-orange-500 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold">
          Manage Subscription
        </Link>
      </div>
      <div className="m-4 my-8 border-none">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;

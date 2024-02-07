import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import ManageSubscriptionTable from "../components/ManageSubscriptionTable";
const ManageSubscription = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12 flex flex-row  justify-between mx-10  rounded-full  shadow-sm border-2 shadow-blue-600">
        <Link to={'/dashboard'} className="p-2 px-14  m-3 bg-gray-400 hover:bg-orange-500  text-white shadow-lg shadow-blue-700 rounded-full text-xl font-bold">
          Dashboard
        </Link>
        <Link to={'/users'} className="p-2 px-10  m-3  bg-gray-500 hover:bg-orange-500 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold">
          Users
        </Link>
        <Link to={'/subscription'} className="p-2 px-8  m-3 bg-orange-500   text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold">
          Manage Subscription
        </Link>
      </div>

      <div className="justify-end flex item-center m-4 mx-40 ">
        <button
          type="button"
          className="shadow-xl p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-900 text-white font-extrabold transition transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Add Subscription
        </button>
      </div>
      <div className="m-4 border-none">
        <ManageSubscriptionTable />
      </div>
    </div>
  );
};

export default ManageSubscription;

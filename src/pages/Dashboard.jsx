import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import DashboardTable from "../components/DashboardTable";
import { Link } from "react-router-dom";
//  import DashboardTable from "../pages/Dashboard";


const Dashboard = () => {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-12 flex flex-row  justify-between mx-10  rounded-full  shadow-sm border-2 shadow-blue-600">
        <Link to={'/dashboard'} type="button" className="p-2 px-14  m-3 bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full text-xl font-bold">
          Dashboard
        </Link>
        <Link to={'/users'} type="button" className="p-2 px-10  m-3  bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold">
          Users
        </Link>
        <Link to={'/subscription'} type="button" className="p-2 px-8  m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold">
          Manage Subscription
        </Link>
      </div>
      <div className="grid grid-cols-5">
        <Card name={"Subscribed Users"} />
        <Card name={" Not Subscribed"} />
        <Card name={"Approved"} />
        <Card name={"Pending"} />
        <Card name={"Expired"} />
      </div>
       <div>
       <div className="mx-4 border-none">
        <DashboardTable/>
      </div>
       </div>
    </div>
  );
};

export default Dashboard;

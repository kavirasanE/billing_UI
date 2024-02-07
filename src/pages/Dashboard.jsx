import { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataProvider";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import DashboardTable from "../components/DashboardTable";
import { Link } from "react-router-dom";
//  import DashboardTable from "../pages/Dashboard";

const Dashboard = () => {
  const { baseURL } = useContext(DataContext);

  let [device, setDevice] = useState([]);
  let [stats, setStats] = useState([]);
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    fetchUserDevice();
  }, []);

  async function fetchUserDevice() {
    try {
      let getServerResponse = await fetch(`${baseURL}alldevice/approval`);
      let getData = await getServerResponse.json();
      if (getServerResponse.ok) {
        setDevice(getData.results);
        setStats(getData.stats);
        console.log(getData.results);
        let columns = Object.keys(getData.results[0]);
        setColumns(
          columns.map((itm) => {
            return { id: itm, name: itm };
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="mt-12 flex flex-row  justify-between md:mx-10 rounded-full shadow-sm border-2 shadow-blue-600">
        <Link
          to={"/dashboard"}
          type="button"
          className="flex px-2 md:p-3 md:px-14 m-4 items-center md:m-3 bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold"
        >
          Dashboard
        </Link>
        <Link
          to={"/users"}
          type="button"
          className="flex px-2  md:p-3 md:px-14 m-4 items-center  md:m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold "
        >
          Users
        </Link>
        <Link
          to={"/subscription"}
          type="button"
          className="flex px-2   md:p-3 py-1 md:px-14 m-4  items-center  text-center md:m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold"
          // className="p-2 px-8  m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold"
        >
          Manage Subscription
        </Link>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-2 mt-2">
        <Card name={"Subscribed Users"} count={stats[0]?.SUBCRIBED_USERS} />
        <Card name={"Not Subscribed"} count={stats[0]?.NOT_SUBCRIBED} />
        <Card name={"Approved"} count={stats[0]?.APPROVED_USERS} />
        <Card name={"Pending"} count={stats[0]?.PENDING_APPROVAL} />
        <Card name={"Expired"} count={stats[0]?.EXPIRED} />
      </div>
      <div>
        <div className="mx-4 border-none">
          <DashboardTable columns={columns} rows={device} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

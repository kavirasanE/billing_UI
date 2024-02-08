import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataProvider";
import DashboardTable from "../components/DashboardTable";

const Users = () => {
  const { baseURL } = useContext(DataContext);
  let navigate = useNavigate();
  let [device, setDevice] = useState([]);
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    fetchUserDevice();
  }, []);

  async function fetchUserDevice() {
    try {
      let getServerResponse = await fetch(`${baseURL}alldevice/getall`);

      let getData = await getServerResponse.json();
      if (getServerResponse.ok) {
        setDevice(getData.results);
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
          className="flex px-2 md:p-3 md:px-14 m-4 items-center md:m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold"
        >
          Dashboard
        </Link>
        <Link
          to={"/users"}
          type="button"
          className="flex px-2  md:p-3 md:px-14 m-4 items-center  md:m-3 bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold "
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
      <div className="justify-start flex items-center m-4 md:mx-32 ">
        <Link
          to={"/addsubscription"}
          type="button"
          className="shadow-xl p-4 whitespace-nowrap rounded-2xl bg-gradient-to-r from-blue-500 to-blue-900 text-white subpixel-antialiased font-extrabold transition transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Add Subscription
        </Link>
      </div>
      <div className="m-4 my-8 border-none">
        <DashboardTable
          columns={columns}
          rows={device}
          action={{isReq:false, approve: { status: false, handleFunction: null } }}
        />
      </div>
    </div>
  );
};

export default Users;

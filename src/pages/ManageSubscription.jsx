import { useEffect, useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import DataContext from "../context/DataProvider"
import DashboardTable from "../components/DashboardTable";
const ManageSubscription = () => {
  const { baseURL } = useContext(DataContext);

  let [subcription, setSubcription] = useState([]);
  let [device, setDevice] = useState([]);
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    fetchSubcription();
  }, []);

  async function fetchSubcription() {
    try {
      let getServerResponse = await fetch(`${baseURL}subcriptiontype`);
      console.log(getServerResponse);
      if (getServerResponse.ok) {
        let getData = await getServerResponse.json();
        setSubcription(getData.results);
        setDevice(getData.results)
        let columns = Object.keys(getData.results[0]);
        setColumns(
          columns.map((itm) => {
            return { id: itm, name: itm };
          })
        );
        console.log(getData.results);
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
          className="flex px-2  md:p-3 md:px-14 m-4 items-center  md:m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold "
        >
          Users
        </Link>
        <Link
          to={"/subscription"}
          type="button"
          className="flex px-2   md:p-3 py-1 md:px-14 m-4  items-center  text-center md:m-3 bg-orange-400 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold"
          // className="p-2 px-8  m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold"
        >
          Manage Subscription
        </Link>
      </div>

      
      <div className="m-4 border-none">
      <DashboardTable
            columns={columns}
            rows={device}
            action={{
              isReq: true,
              approve: { status: false, handleFunction: null, admin:true },
            }}
          />
      </div>
    </div>
  );
};

export default ManageSubscription;

import { useState, useEffect, useContext, useRef } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../context/DataProvider";

const Profile = () => {
  const { baseURL } = useContext(DataContext);
  let getTransId = useRef();
  let navigate = useNavigate();

  let [device, setDevice] = useState([]);
  let [selectedDevice, setSelectedDevice] = useState({});
  let [subcriptionType, setSubcriptionType] = useState([]);
  let [selectedSubcription, setSelectedSubcription] = useState({});

  useEffect(() => {
    fetchUserDevice();
  }, []);

  async function fetchUserDevice() {
    try {
      let getServerResponse = await fetch(`${baseURL}alldevice/getall`);

      let getData = await getServerResponse.json();
      if (getServerResponse.ok) {
        let getActualData = getData.results.filter(
          (itm) =>
            itm.IsSubcription == "False" || itm.IsSubcription == "Expired"
        );
        setDevice(getActualData);
        console.log();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSelectedShop(eve) {
    if (eve.target.value != "Select the device") {
      let [selectedDev] = device.filter(
        (itm) => itm.UDR_Id == eve.target.value
      );
      setSelectedDevice(selectedDev);
      try {
        const getServerResponse = await fetch(`${baseURL}addsub`);
        if (getServerResponse.ok) {
          let getData = await getServerResponse.json();
          setSubcriptionType(getData.subcriptionTypes);
          console.log(getData.subcriptionTypes);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setSelectedDevice({});
      setSubcriptionType([]);
    }
  }

  async function handleSubcriptionSave() {
    try {
      // const UDR_Id = selectedDevice.UDR_Id;
      // const subType = selectedSubcription.
      if (
        selectedDevice?.UDR_Id &&
        selectedSubcription?.Sub_Type_Id &&
        getTransId.current.value.length > 2
      ) {
        const data = {
          UDR_Id: selectedDevice.UDR_Id,
          subcriptionTypeId: selectedSubcription.Sub_Type_Id,
          transactionId: getTransId.current.value,
        };
        const response = await fetch(`${baseURL}updatesubcription`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log(response);
        if (response.ok) {
          let returnContent = await response.json();
          console.log(returnContent.results);
          navigate("/users");
          // fetchUserDevice();
        }
      } else {
        console.log("missing");
        getTransId.current.placeholder = "*Required";
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
          className="flex px-2 md:p-3 md:px-14 m-4 items-center md:m-3 bg-gray-500 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold"
        >
          Dashboard
        </Link>
        <Link
          to={"/users"}
          type="button"
          className="flex px-2  md:p-3 md:px-14 m-4 items-center  md:m-3 bg-gray-500 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold "
        >
          Users
        </Link>
        <Link
          to={"/subscription"}
          type="button"
          className="flex px-2   md:p-3 py-1 md:px-14 m-4  items-center  text-center md:m-3 bg-gray-500 text-white shadow-lg shadow-blue-700 rounded-full md:text-xl text-sm md:font-bold"
          // className="p-2 px-8  m-3 bg-gray-500 hover:bg-orange-400 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold"
        >
          Manage Subscription
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-4  m-10 justify-around items-center mx-20">
        <select
          onChange={handleSelectedShop}
          className="border-2  rounded-xl shadow-gray-300 px-10 py-3 font-bold drop-shadow-2xl cursor-pointer "
        >
          <option defaultValue>Select the device</option>
          {device.map((itm, ind) => (
            <option key={ind} value={itm.UDR_Id} className="m-20 bg-orange-300">
              {itm.ShopName}
            </option>
          ))}
        </select>

        <select
          onChange={(eve) => {
            let [selectedType] = subcriptionType.filter(
              (itm) => itm.Sub_Type_Id == eve.target.value
            );
            setSelectedSubcription(selectedType);
          }}
          className="border-2  rounded-xl shadow-gray-300 px-10 py-3 font-bold drop-shadow-2xl cursor-pointer "
        >
          <option defaultValue>Subcription Months</option>
          {subcriptionType.map((itm, ind) => (
            <option
              value={itm.Sub_Type_Id}
              key={ind}
              className="m-20 bg-orange-300"
            >
              {itm.Sub_Months}
            </option>
          ))}
        </select>

        <input
          className=" mx-20 px-4 py-2 rounded-xl  border-2 shadow-2xl"
          value={selectedSubcription?.Price ? selectedSubcription.Price : 0}
          readOnly
        />
      </div>
      <div className="md:mx-20 mx-5 my-10">
        <textarea
          className="w-full rounded-md shadow-black shadow-lg p-4 border-blue-700 outline-none text-black "
          placeholder="Enter your Comments"
          ref={getTransId}
          required
        ></textarea>
      </div>

      <div>
        {selectedDevice?.UDR_Id && selectedSubcription?.Sub_Type_Id ? (
          <button
            className="btn btn-primary col"
            onClick={handleSubcriptionSave}
          >
            Save
          </button>
        ) : (
          <p className="col-12">Missing required fields</p>
        )}
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white md:mx-10 mb-20 p-10 rounded-2xl shadow-xl shadow-gray-400">
        <form>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Shop Name</label>
              <input
                type="text"
                name="shopName"
                placeholder="Shop Name"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased"
                value={selectedDevice.ShopName ? selectedDevice.ShopName : ""}
              />
            </div>
            <div className="flex items-center  justify-start p-2 md:m-2 gap-2">
           <label className="font-bold text-xl text-">GST Available</label>
              <input
                type="checkbox"
                name="IsGSTShop"
                className=" mx-4 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                checked={
                  selectedDevice.IsGSTShop.toLowerCase() == "true"
                    ? true
                    : false
                }
              />
            </div>
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Shop Address</label>
              <input
                type="text"
                name="shopAddress"
                placeholder="Shop Address"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={
                  selectedDevice.ShopAddress ? selectedDevice.ShopAddress : ""
                }
              />
            </div>
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">GST Number</label>
              <input
                type="text"
                name="gstNumber"
                placeholder="GST Number"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={selectedDevice.GSTNumber ? selectedDevice.GSTNumber : ""}
              />
            </div>
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={selectedDevice.eMail ? selectedDevice.eMail : ""}
              />
            </div>
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Status</label>
              <input
                type="text"
                name="status"
                placeholder="Status"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={selectedDevice.IsActive ? selectedDevice.IsActive : ""}
              />
            </div>
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Device ID</label>
              <input
                type="text"
                name="deviceId"
                placeholder="Device ID"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={selectedDevice.DeviceId ? selectedDevice.DeviceId : ""}
              />
            </div>
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Shop Type</label>
              <input
                type="text"
                name="shopType"
                placeholder="Shop Type"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={selectedDevice.ShopType ? selectedDevice.ShopType : ""}
              />
            </div>
            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={selectedDevice.Mobile ? selectedDevice.Mobile : ""}
              />
            </div>

            <div className="flex flex-col justify-start p-2 md:m-2 gap-2">
              <label className="font-bold text-xl ">Approval Status</label>
              <input
                type="text"
                name="approvalStatus"
                placeholder="Approval Status"
                className="p-2 md:mx-6 rounded-lg outline-none text-black font-semibold antialiased border-gray-200"
                value={
                  selectedDevice.IsApproved ? selectedDevice.IsApproved : ""
                }
              />
            </div>
          </div>
          <div className="my-6 flex  items-center justify-center">
            <button className="text-black antialiased bg-white p-2 px-10 font-bold rounded-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

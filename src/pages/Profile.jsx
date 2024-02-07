import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const [selecteddevice, setSelecteddevice] = useState("");
  const[object,setObject] = useState({});

  const getInputs =( value,name) => {
    let data ={[name] :value};
    setObject({...object,...data})
  }
  const device = [{ name: "sdvdsvs" }, { name: "sdgsvs" }];
  const handleSelected_device = (e) => {
    setSelecteddevice(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="mt-12 flex flex-row subpixel-antialiased justify-between mx-10  rounded-full  shadow-sm border-2 shadow-blue-600">
        <Link
          to={"/dashboard"}
          className="p-2 px-14  m-3 bg-gray-400 hover:bg-orange-500  text-white shadow-lg shadow-blue-700 rounded-full text-xl font-bold"
        >
          Dashboard
        </Link>
        <Link
          to={"/users"}
          className="p-2 px-10  m-3  bg-gray-500 hover:bg-orange-500 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold"
        >
          Users
        </Link>
        <Link
          to={"/subscription"}
          className="p-2 px-8  m-3 bg-gray-500  hover:bg-orange-500 text-white shadow-lg shadow-blue-300 rounded-full text-xl font-bold"
        >
          Manage Subscription
        </Link>
      </div>
      <div className="flex m-10 justify-around items-center mx-20">
        <select
          value={selecteddevice}
          onChange={handleSelected_device}
          className="border-2  rounded-xl shadow-gray-300 px-10 py-3 font-bold drop-shadow-2xl cursor-pointer "
        >
          <option value="" className="">
            Select the device
          </option>
          {device.map((devices, index) => (
            <option
              key={index}
              value={devices.name}
              className="m-20ccr bg-orange-300"
            >
              {devices.name}
            </option>
          ))}
        </select>
        <select
          value={selecteddevice}
          onChange={handleSelected_device}
          className="border-2  rounded-xl shadow-gray-300 px-10 py-3 font-bold drop-shadow-2xl cursor-pointer "
        >
          <option value="" className="">
            Select the device
          </option>
          {device.map((devices, index) => (
            <option
              key={index}
              value={devices.name}
              className="m-20ccr bg-orange-300"
            >
              {devices.name}
            </option>
          ))}
        </select>

        <input value={0}
          className=" mx-20 px-4 py-2 rounded-xl  border-2 shadow-2xl"
        />
      </div>
      <div className="bg-orange-400 mx-10  mb-20 p-10 rounded-2xl shadow-xl shadow-gray-400">
  <form>
    <div className=" grid grid-cols-2">
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Shop Name</label>
        <input
          type="text"
          name="shopName"
          placeholder="Shop Name"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-blue-700 outline-none"
        />
      </div>
      <div className="flex items-center  justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl text-">GST Available</label>
        <input
          type="checkbox"
          name="gstAvailable"
          onChange={(e) => getInputs(e.target.checked, e.target.name)}
          className=" mx-4 rounded-lg border-gray-200"
        />
      </div>
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Shop Address</label>
        <input
          type="text"
          name="shopAddress"
          placeholder="Shop Address"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">GST Number</label>
        <input
          type="text"
          name="gstNumber"
          placeholder="GST Number"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Status</label>
        <input
          type="text"
          name="status"
          placeholder="Status"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Device ID</label>
        <input
          type="text"
          name="deviceId"
          placeholder="Device ID"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Shop Type</label>
        <input
          type="text"
          name="shopType"
          placeholder="Shop Type"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Mobile</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
      
      <div className="flex flex-col justify-start p-2 m-2 gap-2">
        <label className="font-bold text-xl ">Approval Status</label>
        <input
          type="text"
          name="approvalStatus"
          placeholder="Approval Status"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
          className="p-2 mx-6 rounded-lg border-gray-200"
        />
      </div>
    </div>
  </form>
</div>

    </div>
  );
};

export default Profile;

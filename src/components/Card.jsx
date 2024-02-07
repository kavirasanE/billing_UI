import React from "react";
import { GiFallingStar } from "react-icons/gi";

const Card = (props) => {
  return (
    <div className="mx-10">
      <div className="p-3  bg-blue-700 text-white  hover:bg-orange-400 shadow-xl shadow-gray-400 w-48 rounded-2xl my-10">
        <div className="flex justify-between">
          <p className="font-bold text-2xl mb-2">06</p>
          <GiFallingStar className="w-7 h-7 mx-4" />
        </div>

        <p className="font-semibold text-xl "> {props.name}</p>
      </div>
    </div>
  );
};

export default Card;

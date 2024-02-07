import React from "react";
import { GiFallingStar } from "react-icons/gi";

const Card = (props) => {
  return (
    <div className="mx-5">
      <div className="p-3 bg-blue-700 text-white  hover:bg-orange-400 shadow-xl shadow-gray-400 lg:w-48 w-32 rounded-2xl md:my-10 my-4">
        <div className="flex justify-between">
          <p className="font-bold lg:text-2xl mb-2">06</p>
          <GiFallingStar className="w-7 h-7 md:mx-4 " />
        </div>

        <p className="font-semibold xl:text-xl text-sm"> {props.name}</p>
      </div>
    </div>
  );
};

export default Card;

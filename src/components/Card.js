import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaLayerGroup } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className="bg-white my-2 p-2 w-full">
      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          <CgProfile />
          <p className="text-xs">Client Name</p>
        </div>
        <div className="flex space-x-1">
          <CgProfile />
          <p className="text-xs">Sadik Istiak</p>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <div className="flex space-x-1">
          <FaLayerGroup />
          <p className="text-xs text-ellipsis">lorem ipsum dolor sit... </p>
        </div>
        <div className="flex space-x-1">
          <BsCalendar2Date />
          <p className="text-xs">1/2</p>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <CgProfile />
        <CgProfile />
        <div className="p-1 bg-gray-300 text-xs rounded-full">12+</div>
        <div className="flex items-center">
          <IoChatbubbles />
          <div className="p-1 text-xs">15</div>
        </div>
        <div className="flex items-center space-x-1">
          <button>
            <RiAttachment2 />
          </button>
          <p className="text-xs">10</p>
        </div>
        <div className="flex items-center space-x-1">
          <FaCalendarAlt />
          <p className="text-xs">30-12-2022</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

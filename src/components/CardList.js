import React from "react";
import Card from "./Card";
import { FaShapes } from "react-icons/fa";

const CardList = ({ title }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-2 m-2 h-full min-w-max rounded">
      <div className="flex py-2 text-sm w-full items-center justify-between">
        <div className="flex space-x-1">
          <FaShapes />
          <h3>{title}</h3>
        </div>
        <div className="p-1 bg-gray-300 rounded-md">0</div>
      </div>
      <div className="h-full overflow-y-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;

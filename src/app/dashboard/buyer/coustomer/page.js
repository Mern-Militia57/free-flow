import React from "react";
import data from "../data/data";
import { BsPersonFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h1>Customers</h1>
        <h1>Welcome Back , Client</h1>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Name</span>
            <span className="sm:text-left text-right">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden md:grid">Method</span>
          </div>
          
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-100 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
             <div className="flex items-center">
             <div className="bg-purple-100 rounded-lg p-3">
                  <FaShoppingBag className="text-purple-600"></FaShoppingBag>
                </div>
                
                  <p className="pl-4">{order.name.first+ '' + order.name.last}</p>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">{order.name.first}@gmail.com</p>
                
                <p className="hidden md:flex">{order.date}</p>
                <p className="hidden md:flex">{order.method}</p>
           
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;

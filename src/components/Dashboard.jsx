import React from "react";
import Navigation from "./Navigation";
import logo from "../assets/demazeLogo.png";
import Buttons from "./Buttons";

const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="w-[15%]">
        <Navigation />
      </div>
      <div className="flex flex-col w-[70%] gap-5 p-4">
        <div className="flex justify-between gap-8">
          <div className="flex flex-col max-w-64 gap-5 justify-center items-start">
            <img src={logo} className="w-52" />
            <p className="flex items-start">
              D-814,Ganesh Glory 11,Jagatpur Road,SG Highway,Gota.
              Ahmedabad,382470
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-start">
            <p>Bill No :120</p>
            <p>Date :26-101-2024 </p>
            <p>GSTIN number : 24CEYPC976Qj1ZK</p>
            <p>HSN No : 99831</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 items-start pl-5">
          <h2 className="text-2xl ">
            <strong>Invoice To:</strong>
          </h2>
          <p>Name : Prajapati Malay</p>
          <p>Email : prajapatimalay1343@gamil.com</p>
          <p>Contact No: 6355078395</p>
          <p>Address : Gandhinagar </p>
        </div>
        <table className="table-auto w-full border-collapse">
          <thead className="bg-blue-400 ">
            <tr>
              <th className="py-2">ITEM</th>
              <th>DESCRIPTION</th>
              <th>DISCOUNT</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody className="bg-blue-100 ">
            <tr>
              <td className="text-start">Mobile Application</td>
              <td className="text-start">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                sapiente, explicabo ea minus saepe vitae earum quae quis harum?
                Rerum odit sequi velit rem porro ex dicta aliquid optio iusto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                possimus optio laboriosam exercitationem dignissimos ipsam
                soluta molestias iure, enim qui, debitis cum quod quisquam culpa
                dolores mollitia iusto fugiat beatae?
              </td>
              <td className="text-start">0</td>
              <td className="text-start">500</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[15%]">
        <Buttons />
      </div>
    </div>
  );
};

export default Dashboard;

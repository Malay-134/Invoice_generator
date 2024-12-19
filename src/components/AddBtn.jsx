import React from "react";
import logo from "../assets/demazeLogo.png";
import Navigation from "./Navigation";
import Buttons from "./Buttons";
import { IoMdAdd } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const AddBtn = ({ details, deletDetail, handleChange, handleSubmit }) => {
  const bankDetails = [
    "Bank :BANK NAME",
    "A/C no : 98765432100",
    "GSTIN number : Demaze Technologies",
    "IFSC Code :HDFCXXXXX",
    "Phone : +91 7017012134",
  ];

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
            <p>
              Bill No :{" "}
              <input
                placeholder="#1234"
                className="border border-black p-1 rounded-md"
                type="number"
                name="billNo"
                value={details.billNo}
                onChange={handleChange}
              />
            </p>
            <p>
              Date :{" "}
              <input
                className="border border-black p-1 rounded-md"
                type="date"
                name="date"
                value={details.date}
                onChange={handleChange}
              />
            </p>
            <p>GSTIN number : 24CEYPC976Qj1ZK</p>
            <p>HSN No : 99831</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <div className="flex gap-12">
            <input
              type="text"
              name="item"
              value={details.item}
              onChange={handleChange}
              placeholder="Item"
              className="border border-black p-2 rounded-md"
            />
            <input
              type="number"
              name="price"
              value={details.price}
              onChange={handleChange}
              placeholder="Price"
              className="border border-black p-2 rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex w-[100%] flex-col">
              <label>Description</label>
              <textarea
                name="des"
                value={details.des}
                onChange={handleChange}
                className="w-[80%] h-40 p-2 border border-black rounded"
              ></textarea>
            </div>
            <div onClick={deletDetail} className="flex items-end">
              <FaTrash className="flex text-red-600" />
            </div>
          </div>
          <div className="flex items-center gap-4 px-4 py-2 rounded-xl border border-1 w-28 hover:bg-blue-200 hover:text-blue-700 text-black">
            <IoMdAdd />
            ADD
          </div>
          <table className="table-auto w-full border-collapse">
            <thead className="bg-blue-400">
              <tr>
                <th className="py-2 pl-2 text-start">SERVICE DESCRIPTION</th>
                <th></th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody className="bg-blue-100 ">
              <tr>
                <td className="text-start border-b-2 border-black p-2">
                  TITLE
                </td>
                <td className="text-start border-b-2 border-black">
                  ORIGINAL PRICE
                </td>
                <td className="border-b-2 border-black">{details.price}</td>
              </tr>
              <tr>
                <td></td>
                <td className="text-start pt-5">Total Price</td>
                <td className="pt-5">{details.price}</td>
              </tr>
              <tr>
                <td></td>
                <td className="text-start">DISCOUNTED Price</td>
                <td>0.00</td>
              </tr>
              <tr>
                <td></td>
                <td className="text-start">GST(18%)</td>
                <td>{(details.price * 18) / 100}</td>
              </tr>
              <tr>
                <td></td>
                <td className="text-start">GRAND TOTAL</td>
                <td>
                  {parseInt(details.price) + parseInt(details.price * 18) / 100}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-20">
            <div className="flex flex-col items-start">
              <select
                className="border border-black rounded-md p-1 mb-2"
                id="sort-by"
                name="owner"
                value={details.owner}
                onChange={handleChange}
              >
                <option value="Mr. Krupal Chaudhary">
                  Mr. Krupal Chaudhary
                </option>
                <option value="Mr. Abc xyz">Mr. Abc xyz</option>
              </select>
              {bankDetails.map((detail, index) => (
                <p key={index} className="text-sm text-black">
                  {detail}
                </p>
              ))}
            </div>
            <div>
              <h2 className="text-2xl pb-3">
                <strong>Invoice To:</strong>
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="companyName"
                  value={details.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="border border-black p-2 m-2 rounded-md"
                />
                <input
                  type="text"
                  name="companyNumber"
                  value={details.companyNumber}
                  onChange={handleChange}
                  placeholder="Company Contact No"
                  className="border border-black p-2 m-2 rounded-md"
                />
                <input
                  type="text"
                  name="companyEmail"
                  value={details.companyEmail}
                  onChange={handleChange}
                  placeholder="Company Email"
                  className="border border-black p-2 m-2 rounded-md"
                />
                <input
                  type="text"
                  name="companyAddress"
                  value={details.companyAddress}
                  onChange={handleChange}
                  placeholder="Company Address"
                  className="border border-black p-2 m-2 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-blue-400 p-3">
            <p>info@Demaze.in</p>
            <p>Demaze.in</p>
          </div>
        </div>
      </div>
      <div className="w-[15%]">
        <Buttons handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddBtn;

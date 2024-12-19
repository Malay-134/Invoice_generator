import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Navigation from "./Navigation";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const List = ({
  detailLists,
  deletDeatailsFromList,
  editInformation,
  handlePreview,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLists = detailLists.filter((list) =>
    list.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Navigation />
      <div className="flex flex-col w-[100%] p-3">
        <div className="flex justify-between p-2 border border-black">
          <div className="flex justify-center items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-md p-1"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-2 justify-center items-center ">
            <label>From:</label>
            <input
              type="text"
              className="border rounded-md p-1"
              placeholder="Search"
            />
            <label>To:</label>
            <input
              type="text"
              className="border rounded-md p-1"
              placeholder="Search"
            />
            <Link to="/invoice  ">
              <button className="flex justify-center items-center gap-3 border border-blue-500 p-2 rounded-md">
                <IoMdAdd />
                CREATE INVOICE
              </button>
            </Link>
          </div>
        </div>
        <div>
          {filteredLists.length > 0 ? (
            <table className="table-auto w-full border-collapse ">
              <thead>
                <tr>
                  <th>SR NO.</th>
                  <th>BILL NO</th>
                  <th>INVOICE NAME</th>
                  <th>ISSUE DATE</th>
                  <th>TOTAL</th>
                  <th className="text-end pr-5">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {filteredLists.map((list, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-2 py-1 text-center">{index + 1}</td>
                      <td className="px-2 py-1 text-center">{list.billNo}</td>
                      <td className="px-2 py-1 text-center">
                        {list.companyName}
                      </td>
                      <td className="px-2 py-1 text-center">{list.date}</td>
                      <td className="px-2 py-1 text-center">
                        {parseInt(list.price) + parseInt(list.price * 18) / 100}
                      </td>
                      <td className="flex gap-10 px-2 py-2 justify-end">
                        <Link to="/invoice">
                          <MdEdit
                            onClick={() => {
                              editInformation(index);
                            }}
                          />
                        </Link>
                        <FaTrash onClick={() => deletDeatailsFromList(index)} />
                        <IoEye onClick={() => handlePreview(index)} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-lg font-bold text-gray-500">
              No Data Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;

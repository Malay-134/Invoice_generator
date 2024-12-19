import React from "react";
import logo from "../assets/demazeLogo.png";
import { IoMdAdd } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navTitle = [
    {
      title: "Add",
      icon: <IoMdAdd size={30} />,
      link: "/invoice",
    },
    {
      title: "List",
      icon: <CiCircleList size={30} />,
      link: "/list",
    },
  ];
  return (
    <nav className="flex flex-col gap-10 p-3 h-max justify-start items-center bg-slate-300 sticky top-0">
      <Link to="/">
        <img src={logo} alt="demaze" className="w-52" />
      </Link>
      <ul className="flex flex-col gap-7 pb-[380px]">
        {navTitle.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="flex items-center gap-4 px-4 py-2 rounded-xl hover:bg-blue-200 hover:text-blue-700 text-black"
              // className="flex items-center justify-start gap-3 py-4 pl-3"
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

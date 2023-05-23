import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

import { IoArchiveSharp, IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">
          Services
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-slate-100">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <a>Products</a>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="cursor-pointer">
          <img className="w-12" src={logo} alt="" srcset="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex mx-2">
        <ul className="menu menu-horizontal px-1">
          {menuItem}
          {/* <li className=" flex justify-center items-center">
            <IoSearchOutline className="rounded-full bg-slate-300 w-10 h-10 text-2xl" />
          </li> */}
        </ul>

        <div className="rounded-full bg-slate-300 w-10 h-10 flex justify-center items-center cursor-pointer">
          <IoSearchOutline className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import phone from "../../../assets/phone-call.png";
import mail from "../../../assets/arroba.png";
import { IoAt, IoCall } from "react-icons/io5";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-amber-500 flex lg:flex-row sm:flex-col justify-between py-4">
      <div className="flex  justify-between items-center text-white">
        <div className="flex justify-center items-center mx-4">
          <IoCall className="mr-1 text-lg text-white" />
          <p>+880123456789</p>
        </div>
        <div className="flex justify-center items-center ">
          <IoAt className="mr-1 text-xl" />
          <p>info@gmail.com</p>
        </div>
      </div>
      <div className="flex  justify-between items-center text-white gap-5 mx-4 text-lg">
        <p>Find us on:</p>
        <Link to="/">
          {" "}
          <FaFacebookF />
        </Link>
        <Link to="/">
          {" "}
          <FaWhatsapp />
        </Link>
        <Link to="/">
          {" "}
          <FaYoutube />
        </Link>
        <Link to="/">
          {" "}
          <FaFacebookF />
        </Link>
        <Link to="/">
          {" "}
          <FaLinkedin />
        </Link>

        <Link to="/">
          {" "}
          <FaSkype />
        </Link>
      </div>
    </header>
  );
};

export default Header;

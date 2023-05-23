import React from "react";
import img1 from "../../../assets/01.png";
import { IoCheckmarkOutline } from "react-icons/io5";
const DevelopmentProcess = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <img
          src={img1}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl lg:mx-9"
        />
        <div className="sm:pt-10">
          <h1 className=" text-lg lg:text-3xl font-semibold">
            Our Developments Process
          </h1>
          <div className="flex items-center justify-start pt-8">
            <IoCheckmarkOutline className="text-amber-500 text-xl mr-3" />
            <p>Research and Analysis</p>
          </div>
          <div className="flex items-center justify-start py-2">
            <IoCheckmarkOutline className="text-amber-500 text-xl mr-3" />
            <p>Research and Analysis</p>
          </div>
          <div className="flex items-center justify-start py-2">
            <IoCheckmarkOutline className="text-amber-500 text-xl mr-3" />
            <p>Research and Analysis</p>
          </div>
          <div className="flex items-center justify-start py-2">
            <IoCheckmarkOutline className="text-amber-500 text-xl mr-3" />
            <p>Research and Analysis</p>
          </div>
          <button className="bg-amber-500 rounded-full py-2 px-4 text-white cursor-pointer text-lg mt-8">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;

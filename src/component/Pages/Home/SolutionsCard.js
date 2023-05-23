import React from "react";
import shopping from "../../../assets/SolutionsImg/shopping.png";
const SolutionsCard = ({ solution }) => {
  return (
    <div className="rounded-lg shadow-lg p-6  w-[320px] grid grid-cols-12">
      <img className="w-16 col-span-4" src={solution?.img} alt="" srcset="" />
      <h4 className="col-span-8 text-2xl">{solution?.name}</h4>
      <p className="col-span-4"></p>
      <p className="col-span-8 text-sm font-normal pt-4">
        {solution?.description}
      </p>
    </div>
  );
};

export default SolutionsCard;

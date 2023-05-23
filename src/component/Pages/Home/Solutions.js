import React from "react";
import SolutionsCard from "./SolutionsCard";
import assets from "../../../assets/SolutionsImg/assets.png";
import enterprise from "../../../assets/SolutionsImg/enterprise.png";
import financial from "../../../assets/SolutionsImg/financial.png";
import medical_history from "../../../assets/SolutionsImg/medical-history.png";
import presentation from "../../../assets/SolutionsImg/presentation.png";
import shopping from "../../../assets/SolutionsImg/shopping.png";
const Solutions = () => {
  const solutionsData = [
    {
      _id: "01",
      name: "Next-generation ERP",
      img: enterprise,
      description:
        "Next-generation ERP will help you to face the chalenges of today's dynamic digital world",
    },
    {
      _id: "02",
      name: "Asset Management",
      img: assets,
      description:
        "Most cost-effective manner to developing, operating maintaining, upgrading, and disposing of assets",
    },
    {
      _id: "03",
      name: "Educational Inst",
      img: presentation,
      description:
        "Digitize your Educational Institute which will help you to changed the game completely and face challenges",
    },
    {
      _id: "04",
      name: "Document Management",
      img: financial,
      description:
        "Digital Document management help you to provides quality fuel and ensure efficient functioning",
    },
    {
      _id: "05",
      name: "RX or Prescription Management",
      img: medical_history,
      description:
        "Technology will help you to taking care of each and every element of your RX or Prescription Management",
    },
    {
      _id: "06",
      name: "E-Commerce and Retail",
      img: shopping,
      description:
        "E-Commerce will help you to increase sales in todays compestive and convenience focused society",
    },
  ];
  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl leading-[80px]">
        Amazing Solutions and Custom Software <br /> Development
      </h1>
      <p className="text-center mt-4">
        With good engineers make things that work better for you, but don't do
        over-engineer to make it worse
      </p>
      <div className="flex justify-center items-center my-9">
        <div className="grid grid-cols-1  lg:grid-cols-3  gap-16 ">
          {solutionsData.map((solution) => (
            <SolutionsCard key={solution._id} solution={solution} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

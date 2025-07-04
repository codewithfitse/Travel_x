import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import LiveChat from "../components/LiveChat";

export const Landing = () => {
  return (
    <div className="w-full h-screen landingBg overflow-x-hidden">
      <LiveChat />
      <div className="h-screen pt-130 lg:pt-72 pl-5 lg:pl-15 pb-32 lg:pb-9 text-[25px]/7 text-white font-serif lg:text-6xl/15 font-bold backdrop-blur-[5px]">
        <h1 className="mb-3 text-yellow-500 font-UnifrakturMaguntia ">
          <span className="text-[80px]">T</span>ime
          <br />
        </h1>
        <h1 className="">Car Rental Website</h1>
        <p className="text-white text-[15px] lg:text-[25px]/8 font-bold">
          Find a variety of the car of your dreams, <br />
          at a good price and quality
        </p>
        <div className="mt-10 flex justify-center">
          <Link to="/Home">
            <button className="w-full h-fit py-2 px-30 lg:py-3 lg:px-20 text-[13px] lg:text-[40px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkeletonImage from "./Skeleton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex w-full lg:w-full h-auto py-3 px-4 justify-between items-center text-white-500 fixed z-1 container">
      <div className="pl-2 lg:pl-6 flex items-center space-x-4 transition-all">
        <SkeletonImage
          isLoading={isLoading}
          src="/Logo/Time_white.png"
          alt="Time Logo"
          imgClass="w-16 h-auto"
          skeletonAnimation="w-16 bg-gray-200 rounded-full animate-pulse"
          skeletonClass="h-16"
        />
      </div>

      {/* <nav className="w-fit flex justify-center items-center text-[7px] lg:text-[15px] font-bold space-x-2 lg:space-x-5.5">
        <Link to="/Home">
          <h1 className="hover:text-[#16fe01]">HOME</h1>
        </Link>
        <Link to="/AboutUs">
          <h1 className="hover:text-[#16fe01]">ABOUTUS</h1>
        </Link>
        <Link to="/Services">
          <h1 className="hover:text-[#16fe01]">SERVICES</h1>
        </Link>
        <Link to="/Vehicles">
          <h1 className="hover:text-[#16fe01]">VEHICLES</h1>
        </Link>
        <Link to="/Contact">
          <h1 className="hover:text-[#16fe01]">CONTACT</h1>
        </Link>
      </nav>

      <nav className="w-fit flex lg:pr-10 justify-center items-center text-[7px] lg:text-[15px] font-bold space-x-3 lg:space-x-5.5">
        <Link to="/SignUp">
          <h1 className="hover:text-[#16fe01]">SIGNUP</h1>
        </Link>
        <Link to="/Login">
          <h1 className="hover:text-[#16fe01]">LOGIN</h1>
        </Link>
      </nav> */}

      <div
        className="flex flex-col text-center relative "
        onClick={() => setToggle(!toggle)}
      >
        <div className="menu size-10 lg:size-12"></div>
        {toggle && (
          <div className="w-fit py-2 px-3 flex flex-col gap-3 justify-center text-[15px] lg:text-[15px] font-bold bg-gray-800 absolute top-12 -right-4">
            <Link to="/Home">
              <h1 className="hover:text-[#16fe01]">HOME</h1>
            </Link>
            <Link to="/AboutUs">
              <h1 className="hover:text-[#16fe01]">ABOUTUS</h1>
            </Link>
            <Link to="/Services">
              <h1 className="hover:text-[#16fe01]">SERVICES</h1>
            </Link>
            <Link to="/Vehicles">
              <h1 className="hover:text-[#16fe01]">VEHICLES</h1>
            </Link>
            <Link to="/Contact">
              <h1 className="hover:text-[#16fe01]">CONTACT</h1>
            </Link>
            <Link to="/SignUp">
              <h1 className="hover:text-[#16fe01]">SIGNUP</h1>
            </Link>
            <Link to="/Login">
              <h1 className="hover:text-[#16fe01]">LOGIN</h1>
            </Link>
            <Link to="/USerDashboard">
              <h1 className="hover:text-[#16fe01]">DashBoard</h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

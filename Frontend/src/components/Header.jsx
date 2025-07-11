import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkeletonImage from "./Skeleton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex w-full lg:w-full h-auto py-3 px-5 justify-between lg:justify-center items-center text-white-500 fixed z-1 container">
      <div className="w-full h-fit pl-2 lg:pl-6 flex items-center transition-all">
        <SkeletonImage
          isLoading={isLoading}
          src="/Logo/Time_white.webp"
          alt="Time Logo"
          imgClass="w-16 lg:w-20 h-auto"
          skeletonAnimation="w-16 rounded-full"
          skeletonClass="w-16"
        />
      </div>

      <nav className="hidden lg:flex w-fit lg:justify-center items-center text-[20px] font-bold space-x-5.5">
        <Link to="/Home">
          <h1 className="hover:text-lum">HOME</h1>
        </Link>
        <Link to="/AboutUs">
          <h1 className="hover:text-lum">ABOUTUS</h1>
        </Link>
        <Link to="/Services">
          <h1 className="hover:text-lum">SERVICES</h1>
        </Link>
        <Link to="/Vehicles">
          <h1 className="hover:text-lum">VEHICLES</h1>
        </Link>
        <Link to="/Contact">
          <h1 className="hover:text-lum">CONTACT</h1>
        </Link>

        <div className="w-fit flex pl-30 justify-center items-center text-[20px] font-bold space-x-5.5">
          <Link to="/SignUp">
            <h1 className="hover:text-lum">SIGNUP</h1>
          </Link>
          <Link to="/Login">
            <h1 className="hover:text-lum">LOGIN</h1>
          </Link>
          <Link to="/Demo">
            <h1 className="hover:text-lum">Dash</h1>
          </Link>
        </div>
      </nav>

      <div
        className="flex flex-col text-center relative not-sr-only lg:sr-only"
        onClick={() => setToggle(!toggle)}
      >
        <div className="menu size-10 lg:size-12"></div>
        {toggle && (
          <div className="w-fit py-2 px-3 flex flex-col gap-3 justify-center text-[15px] lg:text-[15px] font-bold bg-gray-800 absolute top-12 -right-4">
            <Link to="/Home">
              <h1 className="hover:text-lum">HOME</h1>
            </Link>
            <Link to="/AboutUs">
              <h1 className="hover:text-lum">ABOUTUS</h1>
            </Link>
            <Link to="/Services">
              <h1 className="hover:text-lum">SERVICES</h1>
            </Link>
            <Link to="/Vehicles">
              <h1 className="hover:text-lum">VEHICLES</h1>
            </Link>
            <Link to="/Contact">
              <h1 className="hover:text-lum">CONTACT</h1>
            </Link>
            <Link to="/SignUp">
              <h1 className="hover:text-lum">SIGNUP</h1>
            </Link>
            <Link to="/Login">
              <h1 className="hover:text-lum">LOGIN</h1>
            </Link>
            <Link to="/Dashboard">
              <h1 className="hover:text-lum">DashBoard</h1>
            </Link>
            <Link to="/Demo">
              <h1 className="hover:text-lum">Demo</h1>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

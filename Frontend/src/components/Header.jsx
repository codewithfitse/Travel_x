import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex w-[412px] lg:w-full h-auto py-4 px-4 justify-between items-center text-white-500 fixed z-1 container">
      <div className="w-[50px] lg:w-[130px] pl-2 lg:pl-4 flex items-center relative">
        <img
          src="logo.png"
          className="w-[15px] lg:w-[40px] h-fit"
          alt=""
          srcSet=""
        />
        <h1 className="w-full text-[10px] mt-[1px] lg:mt-1.5 lg:text-3xl text-center absolute top-[5px] left-[20px] lg:top-[10px] lg:left-[48px] font-bold">
          RAVEL-X
        </h1>
      </div>

      <nav className="w-fit flex justify-center items-center text-[7px] lg:text-[15px] font-bold space-x-2 lg:space-x-5.5">
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
      </nav>
    </div>
  );
};

export default Header;

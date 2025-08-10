import React from "react";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import SkeletonImage from "./Skeleton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full h-auto py-3 px-5 justify-between lg:justify-center items-center text-white backdrop-blur-md bg-black/30 border-b border-white/10 rounded-b-2xl">
      <div className="w-full h-fit pl-2 lg:pl-6 flex items-center transition-all">
        <SkeletonImage
          isLoading={isLoading}
          src="/Logo/Time_white.webp"
          alt="Time Logo"
          imgClass="w-16 lg:w-20 h-auto"
          skeletonAnimation="w-16 rounded-full bg-gray-300 rounded-[10px] animate-pulse"
          skeletonClass="w-16"
        />
      </div>

      <nav className="hidden lg:flex w-fit lg:justify-center items-center text-[16px] font-semibold space-x-6">
        <Link to="/Home">
          <h1 className="hover:text-lum transition-colors">HOME</h1>
        </Link>
        <Link to="/AboutUs">
          <h1 className="hover:text-lum transition-colors">ABOUTUS</h1>
        </Link>
        <Link to="/Services">
          <h1 className="hover:text-lum transition-colors">SERVICES</h1>
        </Link>
        <Link to="/Vehicles">
          <h1 className="hover:text-lum transition-colors">VEHICLES</h1>
        </Link>
        <Link to="/Contact">
          <h1 className="hover:text-lum transition-colors">CONTACT</h1>
        </Link>

        <div className="w-fit flex pl-20 justify-center items-center text-[16px] font-semibold space-x-6">
          <Link to="/SignUp">
            <h1 className="hover:text-lum transition-colors">SIGNUP</h1>
          </Link>
          <Link to="/Login">
            <h1 className="hover:text-lum transition-colors">LOGIN</h1>
          </Link>
          <Link to="/Tutorial">
            <h1 className="hover:text-lum transition-colors">Tutorial</h1>
          </Link>
          <Link to="/Demo">
            <h1 className="hover:text-lum transition-colors">Lang</h1>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col text-center relative lg:hidden">
        <button
          aria-label={toggle ? 'Close menu' : 'Open menu'}
          aria-expanded={toggle}
          onClick={() => setToggle(!toggle)}
          className="inline-flex items-center justify-center rounded-lg p-2 bg-white/10 hover:bg-white/20 ring-1 ring-white/20"
        >
          {toggle ? <FiX className="size-6" /> : <FiMenu className="size-6" />}
        </button>
        {toggle && (
          <div className="w-48 mt-3 py-3 px-3 flex flex-col gap-3 text-[14px] font-semibold bg-black/70 backdrop-blur-md border border-white/10 rounded-xl absolute top-12 right-0 shadow-xl">
            <Link to="/Home" className="hover:text-lum">HOME</Link>
            <Link to="/AboutUs" className="hover:text-lum">ABOUTUS</Link>
            <Link to="/Services" className="hover:text-lum">SERVICES</Link>
            <Link to="/Vehicles" className="hover:text-lum">VEHICLES</Link>
            <Link to="/Contact" className="hover:text-lum">CONTACT</Link>
            <Link to="/SignUp" className="hover:text-lum">SIGNUP</Link>
            <Link to="/Login" className="hover:text-lum">LOGIN</Link>
            <Link to="/Dashboard" className="hover:text-lum">DashBoard</Link>
            <Link to="/Tutorial" className="hover:text-lum">Tutorial</Link>
            <Link to="/Demo" className="hover:text-lum">Lang</Link>
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

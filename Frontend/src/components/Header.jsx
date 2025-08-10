import React from "react";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import SkeletonImage from "./Skeleton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const primaryLinks = [
    { to: "/Home", label: "HOME", },
    { to: "/AboutUS", label: "ABOUTUS" },
    { to: "/Services", label: "SERVICES" },
    { to: "/Vehicles", label: "VEHICLES" },
    { to: "/Contact", label: "CONTACT" },
  ];

  const secondaryLinks = [
    { to: "/SignUp", label: "SIGNUP" },
    { to: "/Login", label: "LOGIN" },
    { to: "/Tutorial", label: "Tutorial" },
    { to: "/Demo", label: "Lang" },
  ];

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
        {primaryLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `relative px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                isActive
                  ? "text-accent underline decoration-accent underline-offset-8 decoration-2"
                  : "text-white/90 hover:text-accent"
              }`
            }
            end
          >
            {item.label}
          </NavLink>
        ))}

        <div className="w-fit flex pl-20 justify-center items-center text-[16px] font-semibold space-x-6">
          {secondaryLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                  isActive
                    ? "text-accent underline decoration-accent underline-offset-8 decoration-2"
                    : "text-white/90 hover:text-accent"
                }`
              }
              end
            >
              {item.label}
            </NavLink>
          ))}
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
          <div className="w-56 mt-3 py-3 px-3 flex flex-col gap-2 text-[14px] font-semibold bg-black/70 backdrop-blur-md border border-white/10 rounded-xl absolute top-12 right-0 shadow-xl">
            {[...primaryLinks, ...secondaryLinks].map((item) => (
              <NavLink
                key={`m-${item.to}`}
                to={item.to}
                onClick={() => setToggle(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                    isActive ? "text-accent bg-white/10" : "hover:text-accent hover:bg-white/5"
                  }`
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

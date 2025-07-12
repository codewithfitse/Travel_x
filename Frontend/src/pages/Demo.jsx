import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "../components/Card";
import SkeletonImage from "../components/Skeleton";
import LiveChat from "../components/LiveChat";
import { data } from "../components/data";

export const Demo = () => {
  const [search, setSearch] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full min-h-full bg-white/10 overflow-x-hidden text-white">
      <Header />
      <LiveChat />
      <div className="w-full h-full flex justify-center items-center pt-10">
        <div className="w-full h-full mt-15 lg:mt-30 flex flex-col items-center">
          <div className="w-full py-5 lg:py-10">
            <h1 className="text-[25px] lg:text-6xl text-center font-bold">
              EASY BOOKING STEPS
            </h1>

            <h1 className="text-[20px] lg:text-[30px] text-lum text-center mt-2 lg:mt-6">
              How to book your car with us and Start enjoying your ride
            </h1>

            <div className="w-full h-[100vh] p-5 bg-white text-black">
              <div className="w-full h-fit flex justify-between space-x-4">
                <form
                  action=""
                  onSubmit={handleClick}
                  className="w-full h-fit flex justify-between space-x-4"
                >
                  <input
                    type="text"
                    value={search}
                    className="w-full h-[50px] px-5 rounded-2xl bg-gray-200 border-2 border-black placeholder:text-black"
                    placeholder="Search.."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    className="px-5 py-2 text-white bg-gray-800 rounded-2xl"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>

              {data.map((item) => {
                <div id={item} className="w-full h-full text-black">
                  <thead className="w-full h-fit">
                    <tr className="w-full h-fit flex justify-between">
                      <td className="w-full h-fit">First Name</td>
                      <td className="w-full h-fit">Last Name</td>
                      <td className="w-full h-fit">Email</td>
                      <td className="w-full h-fit">Phone</td>
                    </tr>
                  </thead>
                  <tbody className="w-full h-full">
                    <tr className="w-full h-fit flex justify-between">
                      <td className="w-full h-fit">{item.first_name}</td>
                      <td className="w-full h-fit">{item.last_name}</td>
                      <td className="w-full h-fit">{item.email}</td>
                      <td className="w-full h-fit">{item.phone}</td>
                    </tr>
                  </tbody>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

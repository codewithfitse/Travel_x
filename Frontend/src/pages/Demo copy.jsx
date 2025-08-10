import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "../components/Card";
import SkeletonImage from "../components/Skeleton";
import LiveChat from "../components/LiveChat";
import { data } from "../components/data";

export const Demo2 = () => {
  const [search, setSearch] = useState("");

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

            <div className="w-full h-full p-5 bg-white text-black">
              <div className="w-full h-fit flex justify-between space-x-4">
                <form
                  action=""
                  onSubmit={handleClick}
                  className="w-full h-fit mb-5 flex justify-between space-x-4"
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

              <div className="">
                <table className="w-full h-full font-bold">
                  <thead className="w-full h-fit text-white">
                    <tr className="w-full h-fit flex justify-between space-x-1">
                      <td className="w-full h-fit p-2 bg-gray-600 rounded-[5px]">
                        First Name
                      </td>
                      <td className="w-full h-fit p-2 bg-gray-600 rounded-[5px]">
                        Last Name
                      </td>
                      <td className="w-full h-fit p-2 bg-gray-600 rounded-[5px]">
                        Email
                      </td>
                      <td className="w-full h-fit p-2 bg-gray-600 rounded-[5px]">
                        Phone
                      </td>
                    </tr>
                  </thead>
                  {data
                    .filter((item) => {
                      return (
                        (search.toLowerCase() === "" && item) ||
                        item.first_name.toLowerCase().includes(search) ||
                        item.phone.includes(search) ||
                        item.last_name.toLowerCase().includes(search)
                      );
                    })
                    .map((item) => (
                      <tbody id={item.id} className="w-full h-full">
                        <tr className="w-full h-fit mt-1 flex justify-between">
                          <td className="w-full h-fit p-2 bg-gray-200 text-black">
                            {item.first_name}
                          </td>
                          <td className="w-full h-fit p-2 bg-gray-200 text-black">
                            {item.last_name}
                          </td>
                          <td className="w-full h-fit p-2 bg-gray-200 text-black">
                            {item.email}
                          </td>
                          <td className="w-full h-fit p-2 bg-gray-200 text-black">
                            {item.phone}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

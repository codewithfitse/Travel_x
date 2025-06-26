import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { SubHeader, SubSideBar } from "../dashboard/component";

const SubDashboard = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SubSideBar />
          <div className="ml-14 flex flex-col flex-1">
            <SubHeader />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      DataBase
                    </h1>
                  </div>
                  <div className="w-fit h-full"></div>
                </div>

                <Link to="/UserDemoDb">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">Booking Demo</h1>
                      <i class="fa fa-group w-2 !text-[30px]"></i>
                    </div>
                  </div>
                </Link>

                <Link to="/OneLandingVehicle">
                  <div
                    className={`h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                      toggle
                        ? "w-auto text-[200px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                        : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                    }`}
                  >
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1
                        className={`font-bold transition-all duration-300 ease-in-out ${
                          toggle
                            ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                            : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                        }`}
                      >
                        Post One Day
                      </h1>
                      <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                    </div>
                  </div>
                </Link>

                <Link to="/SubLandingVehicle">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">Vehicles</h1>
                      <i class="fa fa-address-book w-2 !text-[30px]"></i>
                    </div>
                  </div>
                </Link>

                <Link to="/Post">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">Post</h1>
                      <i class="fa fa-address-book w-2 !text-[30px]"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubDashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";
import { Button } from "../../components/Button";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  
  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="w-full h-full pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 ${
                  toggle
                    ? "w-auto ml-22 p-3 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                    : " p-5 text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      DataBase
                    </h1>
                    <h1 className="mt-10 text-[30px] text-center text-white font-bold">
                      {loading ? "Loading..." : null}
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                  </div>
                </div>
                <Link to="/UserDemoDb">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">Booking Demo</h1>
                      <i class="fa fa-group w-2 !text-[30px]"></i>
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

export default Dashboard;

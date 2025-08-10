import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubHeader, SubSideBar } from "../dashboard/component";
import axios from "axios";
const Render = import.meta.env.VITE_BACKEND_URL;

const SubDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await axios.get(`${Render}/profile`, {
          withCredentials: true,
        });
        console.log(res.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/Login");
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, [navigate]);

  return (
    <>
      <section className="min-h-full overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SubSideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <SubHeader toggle={toggle} setToggle={setToggle} />
            <main className="pt-20 p-5 bg-transparent">
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
                  </div>
                  <div className="w-fit h-full"></div>
                </div>

                {isLoading ? (
                  <p className="text-[20px] lg:text-[30px] text-white">
                    Loading...
                  </p>
                ) : (
                  <div className="w-full h-fit">
                    <Link to="/SubDemoDb">
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
                            Booking Demo
                          </h1>
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
                            Vehicles
                          </h1>
                          <i class="fa fa-address-book w-2 !text-[30px]"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubDashboard;

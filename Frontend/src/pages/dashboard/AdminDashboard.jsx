import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const user = data[0];
  const user1 = data1[0];

  useEffect(() => {
    //if (!token) return;
    async function load() {
      try {
        const result = await axios.get(`https://travel-x-408k.onrender.com/dashboards`, {
          withCredentials: true, // if your server uses cookies and you want to send cookies too
        });
        setData(result.data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

    useEffect( () =>  {
    const res = axios.get("https://travel-x-408k.onrender.com/profile", {withCredentials: true}).then(() => {
        setData1(res.data);
    })
  }, [])

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
                    {/* <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Profile
                    </button> */}
                  </div>
                </div>

                {user1?.isAdmin === true && (
                  <Link to="/UserDb" key={user._id}>
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
                          User
                        </h1>
                        <i className="fa fa-group w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}
                
                {user?.isAdmin === true && (
                  <Link to="/UserDb" key={user._id}>
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
                          User
                        </h1>
                        <i className="fa fa-group w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}

                {user?.isAdmin === true && (
                  <Link to="/ContactDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1
                          className={`font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          Contact
                        </h1>
                        <i class="fa fa-address-book w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}

                {user?.isAdmin === true && (
                  <Link to="/BookingDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1
                          className={`font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          Booking
                        </h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}

                {(user?.isAdmin || user?.isSubAdmin) && (
                  <Link to="/LandingVehicle">
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
                        >Vehicles
                        </h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}                
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

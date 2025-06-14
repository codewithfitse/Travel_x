import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { Header, SideBar } from "../dashboard/component";

export const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const user = data[0];


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
  
  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-full flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Profile
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Profile
                    </button>
                  </div>
                </div>
                {loading ? "loading" : null}
                {user && (
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                      <div className="relative">
                        <div className="w-30 h-30 flex justify-center bg-amber-900 border-4 border-gray-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                      </div>
                      <h1 className="mt-2 text-2xl capitalize text-white text-center font-bold">
                        {user.firstName} {user.lastName}
                      </h1>
                      <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                        Admin
                      </h1>
                      <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                        Member since January 15, 2023
                      </h1>
                    </div>
                    <div className="w-full h-full py-5 px-5 bg-gray-800">
                      <div className="w-full h-full">
                        <div className="border-b-2 pb-2 border-gray-400">
                          <div className="w-full flex flex-col lg:flex-row gap-1">
                            <div className="w-full h-15">
                              <h1 className="text-gray-400">Email</h1>
                              <h1 className="font-semibold">{user.email}</h1>
                            </div>
                            <div className="w-full h-15">
                              <h1 className="text-gray-400">Last Login</h1>
                              <h1 className="font-semibold">
                                {/* 30/05/2025, 01:48:49{" "} */}
                                {new Date(user.lastLogin).toLocaleString(
                                  "en-GB"
                                )}
                              </h1>
                            </div>
                          </div>
                          <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                            <div className="w-full h-15">
                              <h1 className="text-gray-400">
                                Total Transactions
                              </h1>
                              <h1 className="font-semibold">1,248</h1>
                            </div>
                            <div className="w-full h-15">
                              <h1 className="text-gray-400">
                                Performance Rating
                              </h1>
                              <h1 className="font-semibold">4.8/5.0</h1>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-fit py-2 flex flex-col space-y-3">
                          <div className="w-fit h-full py-1">
                            <h1 className="text-[20px] text-gray-300 font-bold">
                              Security
                            </h1>
                          </div>
                          <div className="w-full h-fit flex gap-3">
                            <button className="py-1 px-2 lg:py-2 lg:px-4 text-[10px] lg:text-[18px] bg-gray-700 rounded-[10px]">
                              Change Password
                            </button>
                            <button className="py-1 px-2 lg:py-2 lg:px-4 text-[10px] lg:text-[18px] bg-gray-700 rounded-[10px]">
                              TWO FACTOR-AUTH
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

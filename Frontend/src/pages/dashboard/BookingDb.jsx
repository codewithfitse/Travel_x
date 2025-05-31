import { useEffect } from "react";
import { useState } from "react";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";
import { Link } from "react-router";

export const BookingDb = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/booking")
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            //console.log(data);
          });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);
  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-Screen flex bg-[#020817] text-white">
          <SideBar />
          <div className="ml-14 flex flex-col flex-1">
            <Header />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Bookings
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Bookings
                    </button>
                  </div>
                </div>

                {data.map((user) => (
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                      <div className="relative">
                        <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                          <h1 className="font-bold text-[40px]">
                            {user.firstName?.charAt(0).toUpperCase()}{" "}
                            {user.lastName?.charAt(0).toUpperCase()}
                          </h1>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                      </div>
                      <h1 className="mt-2 text-2xl text-white text-center font-bold">
                        {user.firstName} {user.lastName}
                      </h1>
                      <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                        Admin
                      </h1>
                      <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                        {/* Member since January 15, 2023{" "} */}
                        {new Date(user.createdAt).toLocaleString("en-GB")}
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
                              <h1 className="text-gray-400">Phone</h1>
                              <h1 className="font-semibold">{user.phone}</h1>
                            </div>
                          </div>
                          <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                            <div className="w-full h-15">
                              <h1 className="text-gray-400">Destination</h1>
                              <h1 className="font-semibold">
                                {user.destination}
                              </h1>
                            </div>
                            <div className="w-full h-15">
                              <h1 className="text-gray-400">Car type</h1>
                              <h1 className="font-semibold">Suv</h1>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-fit py-2 flex flex-col space-y-3">
                          <div className="w-fit h-full py-1">
                            <h1 className="text-[20px] text-gray-300 font-bold">
                              Message
                            </h1>
                          </div>
                          <div className="w-full h-fit flex gap-3">
                            <h1 className="">{user.message}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
      {/* <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-full flex bg-[#020817] text-white">
          <aside className="w-[60px] h-screen flex border-1 border-gray-700 fixed top-0 left-0 bg-transparent z-20">
            <div className="w-full h-16 flex border-b-1 border-gray-700"></div>
          </aside>
          <div className="ml-14 flex flex-col flex-1">
            <header className="w-screen h-16 flex justify-between pr-20 text-white text-[10px] lg:text-[20px] border-1 border-gray-700 fixed top-0 left-15 bg-white/5 backdrop-blur-sm z-20">
              <nav className="w-full px-5 flex justify-between items-center">
                <div className="">Travel-x</div>
                <div className="flex justify-between space-x-2">
                  <Link to="/Admin">
                    <div className="flex justify-between">Dashboard</div>
                  </Link>
                  <div className="flex justify-between">Sign out</div>
                </div>
              </nav>
              <div className="flex items-center">Profile</div>
            </header>
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
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

                {data.map((user) => (
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                      <div className="relative">
                        <div className="w-30 h-30 flex justify-center bg-amber-900 border-4 border-gray-600 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                      </div>
                      <h1 className="mt-2 text-2xl text-white text-center font-bold">
                        {user.email}
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
                                30/05/2025, 01:48:49
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
                ))}

                <div className="w-full h-fit mt-8 p-5 bg-amber-600 rounded-2xl">
                  <div className="w-full h-full py-1 flex flex-col space-y-0.5 bg-amber-200">
                    <div className="w-full h-fit flex justify-between py-6 px-2 lg:px-10 bg-amber-900">
                      <div className="flex">
                        <div className="w-fit h-full py-3 px-3 lg:px-5 flex flex-col space-y-0.5 bg-amber-400"></div>
                        <div className="w-fit h-full ml-2 py-3 px-8 lg:px-10 flex flex-col space-y-0.5 bg-amber-400"></div>
                      </div>
                    </div>

                    <div className="w-full h-fit flex justify-between py-6 px-2 lg:px-10 bg-amber-900">
                      <div className="flex">
                        <div className="w-fit h-full py-3 px-3 lg:px-5 flex flex-col space-y-0.5 bg-amber-400"></div>
                        <div className="w-fit h-full ml-2 py-3 px-8 lg:px-10 flex flex-col space-y-0.5 bg-amber-400"></div>
                      </div>
                      <div className="w-fit h-full ml-2 py-3 px-6 lg:px-10 flex flex-col space-y-0.5 bg-amber-400"></div>
                    </div>

                    <div className="w-full h-fit flex justify-between py-6 px-2 lg:px-10 bg-amber-900">
                      <div className="flex">
                        <div className="w-fit h-full py-3 px-3 lg:px-5 flex flex-col space-y-0.5 bg-amber-400"></div>
                        <div className="w-fit h-full ml-2 py-3 px-8 lg:px-10 flex flex-col space-y-0.5 bg-amber-400"></div>
                      </div>
                      <div className="w-fit h-full ml-2 py-3 px-6 lg:px-10 flex flex-col space-y-0.5 bg-amber-400"></div>
                    </div>

                    <div className="w-full h-fit flex justify-between py-6 px-2 lg:px-10 bg-amber-900">
                      <div className="flex">
                        <div className="w-fit h-full py-3 px-3 lg:px-5 flex flex-col space-y-0.5 bg-amber-400"></div>
                        <div className="w-fit h-full ml-2 py-3 px-8 lg:px-10 flex flex-col space-y-0.5 bg-amber-400"></div>
                      </div>
                      <div className="w-fit h-full ml-2 py-3 px-6 lg:px-10 flex flex-col space-y-0.5 bg-amber-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section> */}
    </>
  );
};

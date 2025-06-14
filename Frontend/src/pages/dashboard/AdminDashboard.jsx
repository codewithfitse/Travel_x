import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const user = data[0];

  useEffect(() => {
    //if (!token) return;
    async function load() {
      try {
        const result = await axios.get(`${process.env.BACKEND_SERVER}/dashboards`, {
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
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar />
          <div className="ml-14 flex flex-col flex-1">
            <Header />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      DataBase
                    </h1>
                    <h1 className="text-[30px] text-white font-bold">
                      {loading ? "Loading..." : null}
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    {/* <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Profile
                    </button> */}
                  </div>
                </div>

                {user?.isAdmin === true && (
                  <Link to="/UserDb" key={user._id}>
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">User</h1>
                        <i className="fa fa-group w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}

                {user?.isAdmin === true && (
                  <Link to="/ContactDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Contact</h1>
                        <i class="fa fa-address-book w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}

                {user?.isAdmin === true && (
                  <Link to="/BookingDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Booking</h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}

                {(user?.isAdmin || user?.isSubAdmin) && (
                  <Link to="/Get">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Post vehicles</h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}
                <Link to="/Get">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">See Posts</h1>
                      <i class="fa fa-group w-2 !text-[30px]"></i>
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

export default Dashboard;

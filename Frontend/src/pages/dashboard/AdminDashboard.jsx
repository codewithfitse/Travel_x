import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      axios
        .get("https://travel-x-408k.onrender.com/dashboard")
        .then((result) => {
          console.log(result);
          setData(result.data);
        })
        .catch((err) => console.log(err));
      // const res = await fetch("http://localhost:3000/");
      // const json = await res.json();
      // setData(json);
    }
    loadData();
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
                  </div>
                  <div className="w-fit h-full">
                    {/* <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Profile
                    </button> */}
                  </div>
                </div>

                <Link to="/UserDb">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">User</h1>
                      <i class="fa fa-group w-2 !text-[30px]"></i>
                    </div>
                  </div>
                </Link>

                <Link to="/ContactDb">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">Contact</h1>
                      <i class="fa fa-group w-2 !text-[30px]"></i>
                    </div>
                  </div>
                </Link>

                <Link to="/BookingDb">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">Booking</h1>
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

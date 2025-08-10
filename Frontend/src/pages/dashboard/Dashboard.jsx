import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";
const Render = import.meta.env.VITE_BACKEND_URL;

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const result = await axios.get(`${Render}/profile`, {
          withCredentials: true, // if your server uses cookies and you want to send cookies too
        });
        const user = result.data.user;

        // Debug log (optional)
        console.log("Logged-in user:", user);

        if (user?.role === "admin") {
          navigate("/Admin");
        } else if (user?.role === "subadmin") {
          navigate("/SubAdmin");
        } else if (user?.role === "user") {
          navigate("/UserDashboard");
        } else {
          navigate("/Login");
        }
      } catch (error) {
        console.error("Error:", error);
        navigate("/Login");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [navigate]);

  useEffect(() => {
    async function loadProfile() {
      try {
        const result = await axios.get(`${Render}/profile`, {
          withCredentials: true,
        });
        console.log(user); // for debugging
        const user = result.data.user;

        // Debug log (optional)
        console.log("Logged-in user:", user);

        if (user.isAdmin) {
          navigate("/Admin");
        } else if (user.isSubAdmin) {
          navigate("/SubAdmin");
        } else {
          navigate("/Login");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [navigate]);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-full flex bg-[#020817] text-white">
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
                <div className="w-full h-auto flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Main Dashboard
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
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

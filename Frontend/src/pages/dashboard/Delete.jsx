import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/Card";
const Render = import.meta.env.VITE_BACKEND_URL;

const DeleteDashboard = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const user = location.state?.user;
  const navigate = useNavigate();

  if (!user) {
    return <div className="text-red-500">⚠️ No user data found</div>;
  }

  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios
        .delete(`https://travel-x-408k.onrender.com/dashboard/user/${user._id}`)
        .then((result) => {
          if (result.data.message === "deleted") {
            alert("User updated successfully!");
            navigate("/UserDb");
          }
        });
      // back to main admin dashboard
    } catch (err) {
      console.error(err);
      alert("Update failed.");
    }
  }

  return (
    <section className="min-h-screen overflow-x-hidden">
      <div className="w-full h-screen flex bg-[#020817] text-white">
        <SideBar />
        <div className="ml-14 flex flex-col flex-1">
          <Header />
          <main className="pt-20 p-5 bg-transparent">
            <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
              <div className="w-full h-fit flex justify-between items-center">
                <div className="w-fit h-full py-1">
                  <h1 className="text-[20px] lg:text-[30px] text-white font-bold">
                    Delete Users Data
                  </h1>
                </div>
                <div className="w-fit h-full">
                  {/* <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                              Edit Profile
                            </button> */}
                </div>
              </div>

              <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                <div className="w-full px-2 flex justify-between">
                  <div className="W-full">
                    <h1 className="text-[14px] lg:text-[30px] font-bold capitalize">
                      Name:{" "}
                      <span className="font-semibold">
                        {user.firstName} {user.lastName}
                      </span>
                    </h1>
                    <h1 className="text-[14px] lg:text-[30px] font-bold capitalize">
                      Are u Sure:{" "}
                      <span className="font-semibold">
                        <Link
                          //to="/Edit"
                          state={{ user }}
                          className="text-blue-400 hover:underline"
                          onClick={() => setOpen(true)}
                        >
                          Edit
                        </Link>
                        <Link
                          to=""
                          state={{ user }}
                          className="ml-2 text-red-400 hover:underline"
                        >
                          <button onClick={handleClick}>Delete</button>
                        </Link>
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="">
                    <Link
                      to="/UserDb"
                      state={{ user }}
                      className="ml-2 text-blue-400 hover:underline"
                    >
                      <i class="fas fa-hand-point-left text-white text-[36px]"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default DeleteDashboard;

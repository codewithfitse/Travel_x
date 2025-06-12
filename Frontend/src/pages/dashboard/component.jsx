import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <aside className="w-[60px] h-screen flex flex-col border-1 border-gray-700 fixed top-0 left-0 bg-transparent z-20">
      <div className="w-full h-16 flex justify-center items-center border-b-1 border-gray-700">
        <i class="fa fa-bars text-white !text-[30px]"></i>
      </div>
      <Link to="">
        <div className="w-full h-16 flex justify-center items-center border-b-1 border-gray-700">
          <i class="fas fa-folder-open text-white !text-[30px]"></i>
        </div>
      </Link>
      <Link to="/Admin">
        <div className="w-full h-16 flex justify-center items-center border-b-1 border-gray-700">
          <i class="fas fa-database text-white !text-[30px]"></i>
        </div>
      </Link>
      <Link to="/Profile">
        <div className="w-full h-16 flex justify-center items-center border-b-1 border-gray-700">
          <i class="fas fa-person text-white !text-[30px]"></i>
        </div>
      </Link>
    </aside>
  );
};

export const Header = () => {
  async function handleLogout() {
    await axios.post("https://travel-x-408k.onrender.com/auth/logout", {
      withCredentials: true,
    });
    console.log("Logout Successfully");
  }  
  return (
    <header className="w-screen h-16 flex justify-between pr-20 text-white text-[10px] lg:text-[20px] border-1 border-gray-700 fixed top-0 left-15 bg-white/5 backdrop-blur-sm z-20">
      <nav className="w-full px-5 flex justify-between items-center">
        <div className="">
          <img
            src="/Logo/Time_white.png"
            className="w-15 lg:w-23 h-full p-2"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex justify-between space-x-3">
          <Link to="/Admin">
            <div className="flex justify-between">Dashboard</div>
          </Link>
          <Link to="/Login">
            <div className="flex justify-between" onClick={handleLogout}>
              Sign out
            </div>
          </Link>
        </div>
      </nav>
      <div className="flex items-center">Profile</div>
    </header>
  );
};


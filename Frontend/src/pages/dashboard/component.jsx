import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const SideBar = ({ toggle, setToggle }) => {
  function toggles() {
    setToggle(!toggle);
  }

  return (
    <aside
      toggle={toggle}
      setToggle={setToggle}
      className={
        toggle
          ? "w-[150px] h-screen flex flex-col border-1 border-gray-700 fixed top-0 left-0 bg-white/5 backdrop-blur-sm z-30"
          : "w-[60px] h-screen flex flex-col border-1 border-gray-700 fixed top-0 left-0 bg-white/5 backdrop-blur-sm z-30"
      }
    >
      <div
        className={
          toggle
            ? "w-[250px] h-16 pl-15 flex justify-between items-center border-b-1 border-gray-700"
            : "w-[150px] h-16 pl-5 flex justify-start items-center border-b-1 border-gray-700"
        }
        onClick={toggles}
      >
        <i class="fa fa-bars text-white !text-[30px]"></i>
        {toggle && <h1 className="!text-[0px] text-transparent">DataBase</h1>}
      </div>
      <Link to="">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-2">
          <i class="fas fa-folder-open pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">OverView</h1>}
        </div>
      </Link>
      <Link to="/Admin">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-3">
          <i class="fas fa-database pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">DataBase</h1>}
        </div>
      </Link>
      <Link to="/Profile">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-5">
          <i class="fas fa-person pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">Profile</h1>}
        </div>
      </Link>
    </aside>
  );
};

export const Header = ({ toggle }) => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await axios.post(
        "https://travel-x-408k.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      navigate("/Login"); // ✅ redirect AFTER cookie is cleared
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }
  return (
    <header
      className={`w-full h-16 flex justify-between pr-20 text-white text-[10px] lg:text-[20px] border-1 border-gray-700 fixed top-0 left-15 bg-white/5 backdrop-blur-sm z-20 ${
        toggle ? "ml-[90px]" : "ml-0"
      }`}
    >
      <nav className="w-full px-5 flex justify-between items-center">
        <div className="flex">
          <img
            src="/Logo/Time_white.png"
            className="w-15 lg:w-23 h-full p-2"
            alt=""
            srcset=""
          />
        </div>
        <div
          className={`flex justify-center space-x-3 ${
            toggle ? "pr-[70px]" : "ml-0"
          }`}
        >
          <Link to="/Home">
            <div className="flex justify-between">Dashboard</div>
          </Link>

          <button className="flex justify-between" onClick={handleLogout}>
            Sign out
          </button>

          <div className="flex items-center">Profile</div>
        </div>
      </nav>
    </header>
  );
};

export const SubSideBar = ({ toggle, setToggle }) => {
  function toggles() {
    setToggle(!toggle);
  }

  return (
    <aside
      toggle={toggle}
      setToggle={setToggle}
      className={
        toggle
          ? "w-[150px] h-screen flex flex-col border-1 border-gray-700 fixed top-0 left-0 bg-white/5 backdrop-blur-sm z-30"
          : "w-[60px] h-screen flex flex-col border-1 border-gray-700 fixed top-0 left-0 bg-white/5 backdrop-blur-sm z-30"
      }
    >
      <div
        className={
          toggle
            ? "w-[250px] h-16 pl-15 flex justify-between items-center border-b-1 border-gray-700"
            : "w-[150px] h-16 pl-5 flex justify-start items-center border-b-1 border-gray-700"
        }
        onClick={toggles}
      >
        <i class="fa fa-bars text-white !text-[30px]"></i>
        {toggle && <h1 className="!text-[0px] text-transparent">DataBase</h1>}
      </div>
      <Link to="">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-2">
          <i class="fas fa-folder-open pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">OverView</h1>}
        </div>
      </Link>
      <Link to="/SubAdmin">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-3">
          <i class="fas fa-database pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">DataBase</h1>}
        </div>
      </Link>
      <Link to="/SubProfile">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-5">
          <i class="fas fa-person pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">Profile</h1>}
        </div>
      </Link>
    </aside>
  );
};

export const SubHeader = ({ toggle }) => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await axios.post(
        "https://travel-x-408k.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      navigate("/Login"); // ✅ redirect AFTER cookie is cleared
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }
  return (
    <header
      className={`w-full h-16 flex justify-between pr-20 text-white text-[10px] lg:text-[20px] border-1 border-gray-700 fixed top-0 left-15 bg-white/5 backdrop-blur-sm z-20 ${
        toggle ? "ml-[90px]" : "ml-0"
      }`}
    >
      <nav className="w-full px-5 flex justify-between items-center">
        <div className="flex">
          <img
            src="/Logo/Time_white.png"
            className="w-15 lg:w-23 h-full p-2"
            alt=""
            srcset=""
          />
        </div>
        <div
          className={`flex justify-center space-x-3 ${
            toggle ? "pr-[70px]" : "ml-0"
          }`}
        >
          <Link to="/Home">
            <div className="flex justify-between">Dashboard</div>
          </Link>

          <button className="flex justify-between" onClick={handleLogout}>
            Sign out
          </button>

          <div className="flex items-center">Profile</div>
        </div>
      </nav>
    </header>
  );
};

export const UserSideBar = ({ toggle, setToggle }) => {
  function toggles() {
    setToggle(!toggle);
  }

  return (
    <aside
      toggle={toggle}
      setToggle={setToggle}
      className={
        toggle
          ? "w-[150px] h-screen flex flex-col border-1 border-gray-700 fixed top-0 left-0 bg-white/5 backdrop-blur-sm z-30"
          : "w-[60px] h-screen flex flex-col border-1 border-gray-700 fixed top-0 left-0 bg-white/5 backdrop-blur-sm z-30"
      }
    >
      <div
        className={
          toggle
            ? "w-[250px] h-16 pl-15 flex justify-between items-center border-b-1 border-gray-700"
            : "w-[150px] h-16 pl-5 flex justify-start items-center border-b-1 border-gray-700"
        }
        onClick={toggles}
      >
        <i class="fa fa-bars text-white !text-[30px]"></i>
        {toggle && <h1 className="!text-[0px] text-transparent">DataBase</h1>}
      </div>
      <Link to="">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-2">
          <i class="fas fa-folder-open pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">OverView</h1>}
        </div>
      </Link>
      <Link to="/UserDashboard">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-3">
          <i class="fas fa-database pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">DataBase</h1>}
        </div>
      </Link>
      <Link to="/UserProfile">
        <div className="w-full h-16 flex justify-start items-center border-b-1 border-gray-700 space-x-5">
          <i class="fas fa-person pl-3 text-white !text-[30px]"></i>
          {toggle && <h1 className="!text-[20px]">Profile</h1>}
        </div>
      </Link>
    </aside>
  );
};

export const UserHeader = ({ toggle }) => {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await axios.post(`${Render}/logout`, {}, { withCredentials: true });
      navigate("/Login"); // ✅ redirect AFTER cookie is cleared
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }
  return (
    <header
      className={`w-full h-16 flex justify-between pr-20 text-white text-[10px] lg:text-[20px] border-1 border-gray-700 fixed top-0 left-15 bg-white/5 backdrop-blur-sm z-20 ${
        toggle ? "ml-[90px]" : "ml-0"
      }`}
    >
      <nav className="w-full px-5 flex justify-between items-center">
        <div className="flex">
          <img
            src="/Logo/Time_white.png"
            className="w-15 lg:w-23 h-full p-2"
            alt=""
            srcset=""
          />
        </div>
        <div
          className={`flex justify-center space-x-3 ${
            toggle ? "pr-[70px]" : "ml-0"
          }`}
        >
          <Link to="/Home">
            <div className="flex justify-between">Dashboard</div>
          </Link>
          <Link to="/Login">
            <div className="flex justify-between" onClick={handleLogout}>
              Sign out
            </div>
          </Link>
          <Link to="/UserProfile">
            <div className="flex justify-between">Profile</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

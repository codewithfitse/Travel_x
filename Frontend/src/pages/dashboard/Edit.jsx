import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { Header, SideBar } from "./component";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Render = import.meta.env.VITE_BACKEND_URL;

const EditDashboard = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <div className="text-red-500">⚠️ No user data found</div>;
  }

  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.put(
        `https://travel-x-408k.onrender.com/dashboard/${user._id}`,
        {
          firstName,
          lastName,
          email,
          phone,
          password,
        }
      );
      alert("User updated successfully!");
      navigate("/UserDb"); // back to main admin dashboard
    } catch (err) {
      console.error(err);
      alert("Update failed.");
    }
  }

  return (
    <section className="min-h-screen overflow-x-hidden">
      <div className="w-full h-full flex bg-[#020817] text-white">
        <SideBar />
        <div className="ml-14 flex flex-col flex-1">
          <Header />
          <main className="pt-20 p-5 bg-transparent">
            <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
              <div className="w-full h-fit flex justify-between items-center">
                <div className="w-fit h-full py-1">
                  <h1 className="text-[30px] text-white font-bold">
                    Update Users Data
                  </h1>
                </div>
                <div className="w-fit h-full">
                  {/* <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                          Edit Profile
                        </button> */}
                </div>
              </div>

              <div className="w-full h-auto mt-8 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                <div className="px-5 lg:px-[200px]">
                  <div className="p-5 lg:p-10">
                    <h1 className="text-[25px] lg:text-[40px] font-bold text-center font-mono">
                      {user.firstName} {user.lastName}
                    </h1>
                    <form onSubmit={handleClick} action="">
                      <div className="mt-8 flex flex-col justify-between space-y-4">
                        <div className="w-fit flex flex-col">
                          <label
                            htmlFor=""
                            className="text-[18px] font-bold lg:text-[25px]"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="input"
                            placeholder="Enter First Name"
                          />
                        </div>
                        <div className="w-fit flex flex-col">
                          <label
                            htmlFor=""
                            className="text-[18px] font-bold lg:text-[25px]"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="input"
                            placeholder="Enter Last Name"
                          />
                        </div>
                        <div className="w-fit flex flex-col">
                          <label
                            htmlFor=""
                            className="text-[18px] font-bold lg:text-[25px]"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            placeholder="Enter Email"
                          />
                        </div>
                        <div className="w-fit flex flex-col">
                          <label
                            htmlFor=""
                            className="text-[18px] font-bold lg:text-[25px]"
                          >
                            Phone
                          </label>
                          <input
                            type="number"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="input"
                            placeholder="Enter Phone"
                          />
                        </div>
                        <div className="w-fit flex flex-col">
                          <label
                            htmlFor=""
                            className="text-[18px] font-bold lg:text-[25px]"
                          >
                            Password
                          </label>
                          <input
                            type="number"
                            name="phone"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>

                      <div className="mt-5 px-5 flex justify-between">
                        <h1>Forgot password?</h1>
                        <Link to="/Login">
                          <h1>Login</h1>
                        </Link>
                      </div>

                      <div className="mt-5 lg:mt-10">
                        <button
                          type="submit"
                          className="w-full h-fit py-2 px-10 lg:py-3 lg:px-5 text-[13px] lg:text-[40px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
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

export default EditDashboard;

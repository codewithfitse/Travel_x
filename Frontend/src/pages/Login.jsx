import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    axios
      .post("https://travel-x-408k.onrender.com/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-full h-[100%] background text-amber-50 overflow-x-hidden">
      <Header />

      <div className="py-[100px] px-5 lg:px-[200px]">
        <div className="p-5 lg:p-10 card">
          <h1 className="text-[25px] lg:text-[40px] font-bold text-center font-mono">
            Login
          </h1>
          <form onSubmit={handleClick} action="">
            <div className="mt-8 flex flex-col justify-between space-y-4">
              <div className="w-[90%] flex flex-col">
                <label htmlFor="" className="text-[18px] lg:text-[25px]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:text-[20px]"
                  placeholder="Enter Email"
                />
              </div>
              <div className="w-[90%] flex flex-col">
                <label htmlFor="" className="text-[18px] lg:text-[25px]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:text-[20px]"
                  placeholder="Enter Password"
                />
              </div>

              <div className="mt-5 px-5 flex justify-between">
                <h1>Forgot password?</h1>
                <Link to="/SignUp">
                  <h1>Sign Up</h1>
                </Link>
              </div>
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

      <Footer />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://travel-x-408k.onrender.com/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleOauth() {
    window.location.href = "https://travel-x-408k.onrender.com/auths/google";
  }

  return (
    <div className="w-full h-[100%] background text-amber-50 overflow-x-hidden">
      <Header />
      
      <div className="lg:mt-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-zinc-900 p-6 rounded-xl max-w-sm w-full space-y-6 shadow-lg">
          <div>
            <h2 className="text-2xl font-bold">Create an account</h2>
            <p className="text-sm text-zinc-400 mt-1">
              Enter your email below to create your account
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700"
              onClick={handleOauth}
            >
              {/* GitHub Icon */}
              <i className="fa fa-github p-1 !text-[26px] text-black bg-white rounded-full "></i>
              GitHub
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700"
              onClick={handleClick}
            >
              {/* Google Icon */}
              <i className="fa fa-google p-1 !text-[26px] text-red-600 bg-white rounded-full "></i>
              Google
            </button>
          </div>

          <div className="text-center text-xs text-zinc-400">
            OR CONTINUE WITH
          </div>

          <form className="space-y-4" onSubmit={handleClick}>
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Fitsum"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="Zerihun"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="fitse@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="number"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="091234..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder=". . . . . . ."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-zinc-200 transition"
            >
            {isLoading ? (
              <p className="text-center">Loading...</p>
                ) : (
                  "Create account"
                )}
            </button>
          </form>
        </div>

        <div className="mt-6 bg-zinc-900 p-4 rounded-xl w-full max-w-sm flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
              F
            </div>
            <div>
              <div className="font-semibold">Fitsum Zerihun</div>
              <div className="text-sm text-zinc-400">fitse@example.com</div>
            </div>
          </div>
          <button className="text-white text-2xl leading-none">+</button>
        </div>
      </div>      

      <Footer />
    </div>
  );
};

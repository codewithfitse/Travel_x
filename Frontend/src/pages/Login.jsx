import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    setIsLoading(true);
    setErr("");

    if (!email || !password) {
      setErr("Please fill in both email and password.");
      setIsLoading(false);
      return;
    }
    
    axios
      .post("https://travel-x-408k.onrender.com/login", 
        { email, password },
        { withCredentials: true })
      .then((result) => {
        const data = result.data;
        console.log("Response data:", data);
        console.log(result);
        //if (data.user?.isAdmin || data.user?.isSubAdmin) {
        if (data.user?.isAdmin) {
          navigate("/Admin");
        } else if (data.user?.isSubAdmin) {
          navigate("/SubAdmin");
        } else if (data.user) {
          navigate("/UserDashboard");
        } else if (!data || !data.user) {
          setErr("Something went wrong no data. Try again.");
          return;
        } else {
          setErr("Something went wrong. Go check it again!");
        }
      })
      .catch((err) => {
        const msg = err.response?.data?.message;
        console.log("Login Error:", msg);
        if (msg === "User not found") {
          setErr("Email doesn't exist. Try signing up.");
        } else if (msg === "Incorrect password") {
          setErr("Incorrect password. Try again.");
        } else {
          setErr("Something went wrong. Try again later.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

    async function handleOauth() {
    window.location.href = "https://travel-x-408k.onrender.com/auths/google";
  }

    useEffect(() => {
    axios
      .get("https://travel-x-408k.onrender.com/profile", {
        withCredentials: true, // ⚠️ super important to get the session cookie
      })
      .then((res) => {
        const user = res.data.user;

        // Debug log (optional)
        console.log("Logged-in user:", user);

        if (user.isAdmin) {
          navigate("/Admin");
        } else if (user.isSubAdmin) {
          navigate("/SubAdmin");
        } else {
          navigate("/Dashboard");
        }
      })
      .catch((err) => {
        console.log("Not logged in:", err.message);
        // optionally navigate to login or show message
      });
  }, []);


  return (
    <div className="w-full h-[100%] background text-amber-50 overflow-x-hidden">
      <Header />


      <div className="lg:mt-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-zinc-900 p-6 rounded-xl max-w-sm w-full space-y-6 shadow-lg">
          <div>
            <h2 className="text-2xl font-bold">Login an account</h2>
            <p className="text-sm text-zinc-400 mt-1">
              Enter your email below to Login your account
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
              onClick={handleOauth}
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
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder=". . . . . . ."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h1 className="my-2 text-red-500 text-[30px]">{err}</h1>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-zinc-200 transition"
            >
              {isLoading ? (
                  <p className="text-center">Loading...</p>
                ) : (
                  "Submit"
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

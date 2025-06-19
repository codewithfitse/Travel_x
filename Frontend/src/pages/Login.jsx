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
        localStorage.setItem("user", JSON.stringify(email));

        console.log(result);
        if (data.user?.isAdmin || data.user?.isSubAdmin) {
          navigate("/Admin");
        } else if (data.user) {
          navigate("/Dashboard");
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
    window.location.href = "https://travel-x-408k.onrender.com/auth/google";
  }

  useEffect(() => {
  axios.get("https://travel-x-408k.onrender.com/profile", { withCredentials: true })
    .then((res) => {
      const user = res.data?.user;
      if (user?.isAdmin || user?.isSubAdmin) {
        navigate("/Admin");
      } else if (user) {
        navigate("/Dashboard");
      }
    })
    .catch(() => {});
}, []);


  return (
    <div className="w-full h-[100%] background text-amber-50 overflow-x-hidden">
      <Header />

      <div className="py-[100px] px-5 lg:px-[200px]">
        <div className="p-5 lg:p-10 card">
          <div className="flex mb-2 space-x-2">
            <div
              className="w-full h-fit py-1 px-2 flex justify-start items-center text-black backdrop-blur-2xl bg-white/10 shadow-white-50 rounded-2xl"
              onClick={handleOauth}
            >
              <i className="fa fa-google-plus mr-3 !text-[25px] !text-red-500"></i>
              <h1 className="text-[20px]">Google</h1>
            </div>
            <div
              className="w-full h-fit py-1 px-2 flex justify-start items-center text-black backdrop-blur-2xl bg-white/10 shadow-white-50 rounded-2xl"
              onClick={handleOauth}
            >
              <i className="fab fa-facebook-f mr-3 !text-[25px] !text-blue-600"></i>
              <h1 className="text-[20px]">Facebook</h1>
            </div>
          </div>         
          <h1 className="text-[25px] lg:text-[40px] font-bold text-center font-mono">
            Login
          </h1>
          <form onSubmit={handleClick} method="post" action="">
            <div className="mt-8 flex flex-col justify-between space-y-4">
              <div className="w-[90%] flex flex-col">
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
              <div className="w-[90%] flex flex-col">
                <label
                  htmlFor=""
                  className="text-[18px] font-bold lg:text-[25px]"
                >
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  placeholder="Enter Password"
                />

                {err && (
                  <div className="text-red-500 mt-1 font-semibold text-[16px] lg:text-[18px]">
                    {err}
                  </div>
                )}
                
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
                {isLoading ? (
                  <p className="text-center">Loading...</p>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

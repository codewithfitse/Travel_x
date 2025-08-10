import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import axios from "axios";
import LiveChat from "../components/LiveChat";
import useLanguage from "./useLanguage";
const Render = import.meta.env.VITE_BACKEND_URL;

export const Login = () => {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { t } = useLanguage();

  function handleClick(e) {
    e.preventDefault();
    setIsLoading(true);
    setErr("");

    if (!email || !password) {
      setErr(t("fill_both"));
      setIsLoading(false);
      return;
    }

    axios
      .post(`${Render}/login`, { email, password }, { withCredentials: true })
      .then((result) => {
        const data = result.data;
        console.log("Response data:", data);
        console.log(result);
        //if (data.user?.isAdmin || data.user?.isSubAdmin) {
        if (data.user?.role) {
          navigate("/Dashboard");
        } else if (!data || !data.user?.role) {
          setErr(t("no_data"));
          return;
        } else {
          setErr(t("something_wrong"));
        }
      })
      .catch((err) => {
        const msg = err.response?.data?.message;
        console.log("Login Error:", msg);
        if (msg === "User not found") {
          setErr(t("email_not_exist"));
        } else if (msg === "Incorrect password") {
          setErr(t("incorrect_password"));
        } else {
          setErr(t("something_wrong"));
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleOauth() {
    window.location.href = `${Render}/auths/google`;
  }

  useEffect(() => {
    axios
      .get(`${Render}/profile`, {
        withCredentials: true, // ⚠️ super important to get the session cookie
      })
      .then((res) => {
        const user = res.data.user;

        // Debug log (optional)
        console.log("Logged-in user:", user);

        if (user?.role) {
          navigate("/Dashboard");
        } else {
          navigate("/Login");
        }
      })
      .catch((err) => {
        console.log("Not logged in:", err.message);
        // optionally navigate to login or show message
      });
  }, [navigate]);

  return (
    <div className="w-full h-[100%] background text-amber-50 overflow-x-hidden">
      <Header />
      <LiveChat />
      <div className="lg:mt-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-zinc-900 p-6 rounded-xl max-w-sm w-full space-y-6 shadow-lg">
          <div>
            <h2 className="text-2xl font-bold">{t("login_account")}</h2>
            <p className="text-sm text-zinc-400 mt-1">
              {t("enter_email_login")}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700"
              onClick={handleOauth}
            >
              {/* GitHub Icon */}
              <i className="fa fa-github p-1 !text-[26px] text-black bg-white rounded-full "></i>
              {t("github")}
            </button>
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700"
              onClick={handleOauth}
            >
              {/* Google Icon */}
              <i className="fa fa-google p-1 !text-[26px] text-red-600 bg-white rounded-full "></i>
              {t("google")}
            </button>
          </div>

          <div className="text-center text-xs text-zinc-400">
            {t("or_continue")}
          </div>

          <form className="space-y-4" onSubmit={handleClick}>
            <div>
              <label className="block text-sm font-medium">{t("email")}</label>
              <input
                type="email"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder="fitse@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{t("password")}</label>
              <input
                type="password"
                className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
                placeholder=". . . . . . ."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h1 className="my-1 text-red-500 text-[15px] font-serif capitalize">
              {err}
            </h1>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-zinc-200 transition"
            >
              {isLoading ? <p className="text-center">{t("loading")}</p> : t("submit")}
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

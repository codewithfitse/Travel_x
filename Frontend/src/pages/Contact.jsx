import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import LiveChat from "../components/LiveChat";
import useLanguage from "./useLanguage";
const Render = import.meta.env.VITE_BACKEND_URL;

const Contact = () => {
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const { t } = useLanguage();

  function handleClick(e) {
    e.preventDefault();
    axios
      .post(`${Render}/contact`, {
        firstName,
        email,
        phone,
        message,
      })
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
    setFirstName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  return (
    <div className="w-full h-[100%] background text-amber-50 overflow-x-hidden">
      <Header />
      <LiveChat />
      <div className="py-[100px] px-5 lg:px-[200px]">
        <div className="p-5 lg:p-10 card">
          <h1 className="text-[25px] lg:text-[40px] font-bold text-center font-mono">
            {t("contact_us_now")}
          </h1>
          <form onSubmit={handleClick} action="">
            <div className="mt-8 flex flex-col justify-between space-y-4">
              <div className="w-[90%] flex flex-col">
                <label
                  htmlFor=""
                  className="text-[18px] font-bold lg:text-[25px]"
                >
                  {t("first_name")}
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input"
                  placeholder={t("enter_first_name")}
                />
              </div>
              <div className="w-[90%] flex flex-col">
                <label
                  htmlFor=""
                  className="text-[18px] font-bold lg:text-[25px]"
                >
                  {t("email")}
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                  placeholder={t("enter_email")}
                />
              </div>
              <div className="w-[90%] flex flex-col">
                <label
                  htmlFor=""
                  className="text-[18px] font-bold lg:text-[25px]"
                >
                  {t("phone")}
                </label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input"
                  placeholder={t("enter_phone")}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[18px] font-bold lg:text-[25px]"
                >
                  {t("message_feedback")}
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-[90%] h-[100px] input"
                  placeholder={t("message_placeholder")}
                />
              </div>
            </div>


            <div className="mt-5 lg:mt-10 ">
              <button
                type="submit"
                className="w-full h-fit py-2 px-10 lg:py-3 lg:px-5 text-[13px] lg:text-[40px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

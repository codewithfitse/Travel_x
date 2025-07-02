import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import axios from "axios";
//import Booking from "./Booking";

export const OneDayBook = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState();
  const [destination, setDestination] = useState();
  const [message, setMessage] = useState();

  const location = useLocation();

  const { bookingDetails } = location?.state;

  const finalBookingData = {
    ...bookingDetails, // from previous page
    phone,
    destination,
    message,
  };

  async function handleClick(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
      `https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook`,
      finalBookingData,
      {
        withCredentials: true,
      }
    );
      alert("Successfully .Booked!");
      navigate("/UserDashboard");
    } catch (error) {
      alert("You forgot to login bro");
      navigate("/Login");
    setPhone("");
    setDestination("");
    setMessage("");
  }

  return (
    <div className="w-full h-[100%] background text-amber-50 ">
      <Header />

      <div className="py-[100px] lg:px-[200px]">
        <div className="p-10 card">
          <h1 className="text-[40px] font-bold text-center font-mono">
            Book Now❗
          </h1>
          <form onSubmit={handleClick} action="">
            <div className="mt-8 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
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
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  If not in Addis Ababa where is the Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="input"
                  placeholder="destination"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-between space-x-2">
              <div className="flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  Message or More info (optional)
                </label>
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-[100px]  input"
                  placeholder="destination"
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="p-2 text-3xl text-black font-bold bg-[#16fe01] rounded-[10px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
          </h1>
          <h2 className="text-[10px] lg:text-[20px] text-2xl">
            We Always Have The Best Customer Services In Town
          </h2>
        </div>
        <div className="lg:mt-7 flex justify-center items-center">
          <Link to={"/Booking"}>
            <Button text={"Book Now!"} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};



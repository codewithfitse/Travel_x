import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import LiveChat from "../components/LiveChat";
import SkeletonImage from "../components/Skeleton";
const Render = import.meta.env.VITE_BACKEND_URL;

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [item, setItem] = useState();
  const [date, setDate] = useState();
  const [destination, setDestination] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    axios
      .post("https://travel-x-408k.onrender.com/dashboard/book", {
        firstName,
        lastName,
        email,
        phone,
        date,
        item,
        destination,
        message,
      })
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDate("");
    setDestination("");
    setMessage("");
  }

  return (
    <div className="w-full h-[100%] background overflow-x-hidden text-amber-50">
      <Header />
      <LiveChat />

      <div className="py-[100px] lg:px-[200px]">
        <div className="p-10 card">
          <h1 className="text-[40px] font-bold text-center font-mono">
            Book Now❗
          </h1>
          <form onSubmit={handleClick} action="">
            <div className="mt-8 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  name=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
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
            </div>

            <div className="mt-10">
              <h1 className="text-[30px]">Car choice</h1>
              <select
                name=""
                id=""
                value={item}
                className="py-1 px-2 text-gray-600 bg-amber-50 capitalize rounded-[5px]"
                onChange={(e) => setItem(e.target.value)}
              >
                <option value="suv">Suv</option>
                <option value="midsuv">MidSuv</option>
                <option value="fullsuv">FullSuv</option>
                <option value="pickup">Pickup</option>
                <option value="minivan">Minivan</option>
              </select>
            </div>

            <div className="mt-10">
              <h1 className="text-[30px]">
                Car Only Be Used in Addis Ababa City?
              </h1>
              <ul className="pl-2">
                <li>Economy</li>
                <li>Standard</li>
              </ul>
            </div>

            <div className="mt-10 flex justify-between space-x-2">
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
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  Apponment date:
                </label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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

export default Booking;

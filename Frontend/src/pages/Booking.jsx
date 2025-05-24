import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";
import axios from "axios";

const Booking = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [destination, setDestination] = useState();
  const [message, setMessage] = useState();

  function handleClick(e) {
    e.preventDefault();
    axios
      .post("https://travel-x-408k.onrender.com/book", {
        firstName,
        lastName,
        email,
        phone,
        destination,
        message,
      })
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDestination("");
      setMessage("");
  }

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />

      <div className="py-[100px] lg:px-[200px]">
        <div className="p-10 card">
          <h1 className="text-[40px] font-bold text-center font-mono">
            Book Now❗
          </h1>
          <form onSubmit={handleClick} action="">
            <div className="mt-8 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Enter First Name"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-between space-x-2">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Enter Email"
                />
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="Enter Phone"
                />
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-[30px]">Car choice</h1>
              <ul className="pl-2">
                <li>Economy</li>
                <li>Standard</li>
                <li>Mid Full Suv</li>
                <li>Full Suv</li>
                <li>Minivan</li>
                <li>Pickup</li>
              </ul>
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
                <label htmlFor="" className="text-[25px]">
                  If not in Addis Ababa where is the Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
                  placeholder="destination"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-between space-x-2">
              <div className="flex flex-col">
                <label htmlFor="" className="text-[25px]">
                  Message or More info (optional)
                </label>
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-[100px]  py-2 px-3 text-2xl font-bold bg-amber-400 placeholder:"
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

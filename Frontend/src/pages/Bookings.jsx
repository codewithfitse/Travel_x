import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import axios from "axios";

const OneDayBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState();
  const [phone, setPhone] = useState();
  const [destination, setDestination] = useState();
  const [message, setMessage] = useState();
  const [transationId, setTransationId] = useState();
  const [amount, setAmount] = useState();
  const navigate = useNavigate();

  const location = useLocation();

  const { bookingDetails } = location?.state || null;

  const finalBookingData = {
    ...bookingDetails, // from previous page
    date,
    phone,
    destination,
    message,
  };

  async function handleClick(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        `https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook`,
        finalBookingData,
        {
          withCredentials: true,
        }
      );
      alert("Successfully Booked!");
      navigate("/UserDashboard");
    } catch (error) {
      alert("You forgot to login bro");
      console.log(error);
      navigate("/Login");
    } finally {
      setIsLoading(false);
    }
    setDate("");
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
            Transation Account❗
          </h1>
          <h1 className="text-[30px] font-bold text-center font-mono">
            1000574533698
          </h1>

          <form onSubmit={handleClick} action="">
            <div className="mt-8 px-20 flex flex-col justify-between space-y-5 space-x-2">
              <div className="w-full flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  Transaction Link:
                </label>
                <input
                  type="text"
                  name="transationId"
                  value={transationId}
                  onChange={(e) => setTransationId(e.target.value)}
                  className="input"
                  placeholder="Enter TransactionId"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input"
                  placeholder="Enter Amount"
                />
              </div>
              <div className="w-full flex flex-col">
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
              <div className="w-full flex flex-col">
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
              <div className="w-full flex flex-col">
                <label htmlFor="" className="text-[25px] font-bold">
                  Message or More info (optional)
                </label>
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-[100px]  input"
                  placeholder="Message"
                />
              </div>
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

            <div className="mt-10 flex justify-between space-x-2"></div>

            <div className="mt-10">
              <button
                type="submit"
                className="p-2 text-3xl text-black font-bold bg-[#16fe01] rounded-[10px]"
                onClick={handleClick}
              >
                {isLoading ? "Loading.." : "Submit"}
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

export default OneDayBook;

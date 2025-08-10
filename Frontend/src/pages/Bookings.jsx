import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { Datepicker } from "flowbite-react";

const OneDayBook = () => {
  const [err, setErr] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState();
  const [phone, setPhone] = useState();
  const [destination, setDestination] = useState();
  const [message, setMessage] = useState();
  const [transactionId, setTransactionId] = useState();
  const [amount, setAmount] = useState();
  const navigate = useNavigate();

  const location = useLocation();

  const { bookingDetails } = location?.state || null;

  const finalBookingData = {
    ...bookingDetails, // from previous page.
    date,
    phone,
    destination,
    message,
    transactionId,
    amount,
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
      const message = res?.data?.message;
      alert(message);
      navigate("/UserDashboard");
    } catch (error) {
      const errorStat = error?.response?.status;
      const errorMsg = error?.response?.data?.error;
      if (errorStat === 400) {
        setErr(errorMsg);
      } else if (errorStat === 403) {
        setErr(errorMsg);
      } else {
        alert("You forgot to login bro");
        navigate("/Login");
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    // setDate("");
    // setPhone("");
    // setDestination("");
    // setMessage("");
  }

  return (
    <div className="w-full h-[100%] background overflow-x-hidden text-amber-50">
      <Header />

      <div className="py-[70px] lg:py-[100px] lg:px-[200px]">
        <div className="py-4 px-10 lg:p-10 card">
          <h1 className="text-[20px] lg:text-[40px] font-bold text-center font-mono">
            Transaction Account❗
          </h1>
          <div className="w-full flex justify-center items-center space-x-6">
            <h1 className="text-[20px] lg:text-[30px] font-bold text-center font-mono">
              CBE 1000574533698
            </h1>
            <button
              onClick={() => {
                navigator.clipboard.writeText("1000574533698");
                alert("Copied to clipboard!");
              }}
              className="p-3 text-white hover:text-accent transition-all duration-200 rounded-[10px]"
              title="Copy to clipboard"
            >
              <i className="fa fa-copy !text-[15px] lg:!text-[36px]"></i>
            </button>
          </div>

          <form onSubmit={handleClick} action="">
            <div className="mt-2 lg:mt-8 px-20 flex flex-col justify-between space-y-2 lg:space-y-5 space-x-2">
              <div className="w-full flex flex-col">
                <label
                  htmlFor=""
                  className="text-[15px] lg:text-[25px] font-bold"
                >
                  Transaction Link:
                </label>
                <input
                  type="text"
                  name="transationId"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="input"
                  placeholder="Enter TransactionId"
                />
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor=""
                  className="text-[15px] lg:text-[25px] font-bold"
                >
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
                <label
                  htmlFor=""
                  className="text-[15px] lg:text-[25px] font-bold"
                >
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
                <label
                  htmlFor=""
                  className="text-[15px] lg:text-[25px] font-bold"
                >
                  Where is the Destination.
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
                <label
                  htmlFor=""
                  className="text-[15px] lg:text-[25px] font-bold"
                >
                  Message or More info (optional)
                </label>
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="h-[30px] lg:h-[100px] input"
                  placeholder="Message"
                />
              </div>
              <div className="w-full flex flex-col">
                 <label
                  htmlFor=""
                  className="text-[15px] lg:text-[25px] font-bold"
                >
                  Appointment Date:
                </label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  className="h-[30px] lg:h-[100px] input"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-10 flex justify-between space-x-2">
              {err && (
                <h1 className="text-red-500 text-[13px] lg:text-[30px] font-bold text-center ">
                  {err}
                </h1>
              )}
            </div>

            <div className="w-full flex justify-center mt-2 lg:mt-10">
              <button
                type="submit"
                className="p-2 text-3xl text-black font-bold bg-accent rounded-[10px]"
                onClick={handleClick}
              >
                {isLoading ? "Loading.." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OneDayBook;

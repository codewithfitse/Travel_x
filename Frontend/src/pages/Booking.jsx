import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
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
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <LiveChat />

      <div className="w-full h-fit flex justify-center items-center pt-20">
        <div className="w-full h-fit mt-15 lg:mt-30 flex flex-col items-center">
          <div className="py-5 lg:py-10">
            <h1 className="text-[25px] lg:text-6xl text-center font-bold">
              EASY BOOKING STEPS
            </h1>

            <h1 className="text-[20px] lg:text-[30px] text-lum text-center mt-2 lg:mt-6">
              How to book your car with us and Start enjoying your ride
            </h1>
          </div>

          <div className="w-full h-fit lg:mt-5 grid lg:grid-cols-3 gap-3 justify-around text-[15px] lg:text-[20px]">
            <div className="w-full px-3 pt-3 pb-5 font-bold card">
              <div className="relative">
                <SkeletonImage
                  isLoading={isLoading}
                  src="/Book/BookSt1.jpg"
                  imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px]"
                  skeletonClass="w-[400px] h-[300px]"
                />
                <div className="w-full h-fit flex justify-center items-center absolute bottom-0 bg-black/70 py-1 rounded-[10px]">
                  <h1 className="text-[40px]">Step1</h1>
                </div>
              </div>
              <h1 className="mt-2 ml-3">Go To Vehicle:</h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5  font-bold card">
              <div className="relative">
                <SkeletonImage
                  isLoading={isLoading}
                  src="/Book/BookSt2.jpg"
                  imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px]"
                  skeletonClass="w-[400px] h-[300px]"
                />
                <div className="w-full h-fit flex justify-center items-center absolute bottom-0 bg-black/70 py-1 rounded-[10px]">
                  <h1 className="text-[40px]">Step2</h1>
                </div>
              </div>
              <h1 className="mt-2 ml-3">CLICK THE ONE DAY VEHICLE</h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 font-bold card">
              <div className="relative">
                <SkeletonImage
                  isLoading={isLoading}
                  src="/Book/BookSt3.jpg"
                  imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px]"
                  skeletonClass="w-[400px] h-[300px]"
                />
                <div className="w-full h-fit flex justify-center items-center absolute bottom-0 bg-black/70 py-1 rounded-[10px]">
                  <h1 className="text-[40px]">Step4</h1>
                </div>
              </div>
              <h1 className="mt-2 ml-3">
                Choose the Car you wanna book!
                <br /> Click <span className="text-lum">Book Now!</span> if its
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 font-bold card">
              <SkeletonImage
                isLoading={isLoading}
                src="/Book/BookSt4.jpg"
                imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px]"
                skeletonClass="w-[400px] h-[300px]"
              />
              <h1 className="mt-2 ml-3">
                Make Sure this is the car you wannna Order,
                <br /> Click <span className="text-lum">Order</span> if its
                <br /> Click <span className="text-red-500">Back</span> if its
                not.
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 font-bold card">
              <div className="w-full h-fit relative">
                <SkeletonImage
                  isLoading={isLoading}
                  src="/Book/BookSt5.jpg"
                  imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px] rounded-[10px]"
                  skeletonClass="w-[400px] h-[300px]"
                />
                <div className="w-full h-fit flex justify-center items-center absolute bottom-0 bg-black/70 py-1 rounded-[10px]">
                  <h1 className="text-[40px]">Step5</h1>
                </div>
              </div>
              <h1 className="mt-2 ml-3">
                Make Sure All the Fileds are Filled properly!
                <br /> 1. Copy the Account No of Cbe <br /> 2. Come back after
                you pay and paste in this filed Transaction link <br /> 3. Enter
                the amount You payed <br /> 4. Enter the phone you will be
                called after you booked <br /> 5. Copy the Account No of Cbe{" "}
                <br /> 6. Enter where where you wanna go <br /> 7. add personal
                message
                <br /> 8. When you want the car to arrive <br /> After you
                completely filed the form Click{" "}
                <span className="text-lum">Submit</span>{" "}
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 font-bold card">
              <div className="w-full h-fit relative">
                <SkeletonImage
                  isLoading={isLoading}
                  src="/Book/BookStSuccess.jpg"
                  imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px] rounded-[10px]"
                  skeletonClass="w-[400px] h-[300px]"
                />
                <div className="w-full h-fit flex justify-center items-center absolute bottom-0 bg-black/70 py-1 rounded-[10px]">
                  <h1 className="text-[40px] text-lum">Sucesscfull</h1>
                </div>
              </div>
              <h1 className="mt-2 ml-3">
                If you correctly Booked you will go here!
                <br /> And the status will be pending after componany check if
                everything good they will change it Successfull and you will
                receive your car in your appointenent date and if its says
                canceld you will get your money back! if pending take to long
                check contact center!
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 font-bold card">
              <div className="w-full h-fit relative">
                <SkeletonImage
                  isLoading={isLoading}
                  src="/Book/BookStFail.jpg"
                  imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px] rounded-[10px]"
                  skeletonClass="w-[400px] h-[300px]"
                />
                <div className="w-full h-fit flex justify-center items-center absolute bottom-0 bg-black/70 py-1 rounded-[10px]">
                  <h1 className="text-[40px] text-blue-500">Login Come Back</h1>
                </div>
              </div>
              <h1 className="mt-2 ml-3">
                Make Sure To login first or if you dont have acc Create Acc
                <br /> Then go back to booking steps😊
              </h1>
            </div>
          </div>
        </div>
      </div>

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

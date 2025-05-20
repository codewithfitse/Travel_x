import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Vehicles = () => {
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        <div className="w-full py-5 card">
          <div className="flex justify-center">
            <img src="economy2.png" alt="" srcset="" />
          </div>
          <div className="pl-5">
            <h1 className="text-[40px] text-[#16fe01] font-bold">Economy</h1>
            <h2>Starting $60</h2>
            <h2>Toyota VITZ or Similar</h2>
            <h2>Vehicle Feature</h2>
            <ul>
              <li>° 4 Person Seat</li>
              <li>° Automatic</li>
              <li>° Perfect for in city</li>
              <li>° Pick up at airport</li>
            </ul>
          </div>
        </div>
        <div className="w-full py-5 card">
          <div className="flex justify-center">
            <img src="standard.png" alt="" srcset="" />
          </div>
          <div className="pl-5">
            <h1 className="text-[40px] text-[#16fe01] font-bold">Standard</h1>
            <h2>Starting $60</h2>
            <h2>Toyota VITZ or Similar</h2>
            <h2>Vehicle Feature</h2>
            <ul>
              <li>° 4 Person Seat</li>
              <li>° Automatic</li>
              <li>° Perfect for in city</li>
              <li>° Pick up at airport</li>
            </ul>
          </div>
        </div>
        <div className="w-full py-5 card">
          <div className="pt-4 flex justify-center">
            <img src="midsizesuv.png" alt="" srcset="" />
          </div>
          <div className="pl-5">
            <h1 className="text-[40px] text-[#16fe01] font-bold">Mini Suv</h1>
            <h2>Starting $60</h2>
            <h2>Toyota VITZ or Similar</h2>
            <h2>Vehicle Feature</h2>
            <ul>
              <li>° 4 Person Seat</li>
              <li>° Automatic</li>
              <li>° Perfect for in city</li>
              <li>° Pick up at airport</li>
            </ul>
          </div>
        </div>
        <div className="w-full py-5 card">
          <div className="pb-15 flex justify-center">
            <img src="fullsizesuv.png" alt="" srcset="" />
          </div>
          <div className="pl-5">
            <h1 className="text-[40px] text-[#16fe01] font-bold">Full Suv</h1>
            <h2>Starting $60</h2>
            <h2>Toyota VITZ or Similar</h2>
            <h2>Vehicle Feature</h2>
            <ul>
              <li>° 4 Person Seat</li>
              <li>° Automatic</li>
              <li>° Perfect for in city</li>
              <li>° Pick up at airport</li>
            </ul>
          </div>
        </div>
        <div className="w-full py-5 card">
          <div className="flex justify-center">
            <img src="minivan.png" alt="" srcset="" />
          </div>
          <div className="pl-5">
            <h1 className="text-[40px] text-[#16fe01] font-bold">Mini Van</h1>
            <h2>Starting $60</h2>
            <h2>Toyota VITZ or Similar</h2>
            <h2>Vehicle Feature</h2>
            <ul>
              <li>° 4 Person Seat</li>
              <li>° Automatic</li>
              <li>° Perfect for in city</li>
              <li>° Pick up at airport</li>
            </ul>
          </div>
        </div>
        <div className="w-full py-8 card">
          <div className="pb-15 flex justify-center">
            <img src="pickup.png" alt="" srcset="" />
          </div>
          <div className="pl-5">
            <h1 className="text-[40px] text-[#16fe01] font-bold">Pick Up</h1>
            <h2>Starting $60</h2>
            <h2>Toyota VITZ or Similar</h2>
            <h2>Vehicle Feature</h2>
            <ul>
              <li>° 4 Person Seat</li>
              <li>° Automatic</li>
              <li>° Perfect for in city</li>
              <li>° Pick up at airport</li>
            </ul>
          </div>
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

export default Vehicles;

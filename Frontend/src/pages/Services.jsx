import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Services = () => {
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />

      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> SERVICES
        </h1>
        <h2 className="text-[20px] lg:text-[40px] text-center">
          WHAT WE DO BEST AT ADDIS CAR RENTAL
        </h2>
      </div>

      <div className="mt-[60px] py-2 px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 container">
        <div className="w-full flex items-center py-5">
          <div className="w-[20%] flex justify-center">
            <div className="p-3 bg-[#16fe01] rounded-full">
              <img src="Icons/car.png" className="w-10 h-10" alt="" srcset="" />
            </div>
          </div>
          <div className="pl-1 w-[80%]">
            <h1 className="pb-1 text-[40px] text-[#16fe01] font-bold">
              CAR RENTAL
            </h1>
            <h2 className="w-[90%]">
              Car Rentals in Addis Ababa with Daily, Weekly, and Monthly rates
              for your Business, Visit, or Pleasure travel plans in Ethiopia.
              See our selections here.
            </h2>
          </div>
        </div>
        <div className="w-full flex items-center py-5">
          <div className="w-[20%] flex justify-center">
            <div className="p-3 bg-[#16fe01] rounded-full">
              <img
                src="Icons/binoculars.png"
                className="w-10 h-10"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="pl-1 w-[80%]">
            <h1 className="pb-1 text-[40px] text-[#16fe01] font-bold">
              CITY TOUR
            </h1>
            <h2 className="w-[90%]">
              Full or Half Day Tours of Ethiopia’s capital city Addis Ababa on a
              budget-friendly excursion. Visit religious and cultural sites with
              us.
            </h2>
          </div>
        </div>
        <div className="w-full flex items-center py-5">
          <div className="w-[20%] flex justify-center">
            <div className="p-3 bg-[#16fe01] rounded-full">
              <img src="Icons/map.png" className="w-10 h-10" alt="" srcset="" />
            </div>
          </div>
          <div className="pl-1 w-[80%]">
            <h1 className="pb-1 text-[40px]/10 text-[#16fe01] line-clamp-2 font-bold">
              TRAVEL CONSULTING
            </h1>
            <h2 className="w-[90%]">
              Are you planning to travel to Ethiopia and do you have some
              questions? Contact with our travel experts for a free
              consultation.
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Promise
        </h1>
      </div>

      <div className="mt-[60px] py-6 px-2 w-full grid lg:grid-cols-4 place-items-center gap-3 space-y-3 container">
        <div className="w-full flex flex-col items-center border-l-5 border-l-[#16fe01] py-5">
          <div className="flex justify-center">
            <div className="p-2 bg-[#16fe01] rounded-full">
              <img
                src="Icons/verified.png"
                className="w-10 h-10"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="pl-1 pt-1 flex justify-center">
            <h1 className="pt-2 text-[30px]/8 text-center font-bold">
              Good Price & Quality Service
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-l-5 border-l-[#16fe01] py-5">
          <div className="flex justify-center">
            <div className="p-2 bg-[#16fe01] rounded-full">
              <img
                src="Icons/tools.png"
                className="w-10 h-10"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="pl-1 pt-1 flex justify-center">
            <h1 className="pt-2 text-[30px]/8 text-center font-bold">
              Constantly Maintaiend Cars
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-l-5 border-l-[#16fe01] py-5">
          <div className="flex  justify-center">
            <div className="p-2 bg-[#16fe01] rounded-full">
              <img
                src="Icons/infinity.png"
                className="w-10 h-10"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="pl-1 pt-1 flex justify-center">
            <h1 className="pt-2 text-[30px]/8 text-center font-bold">
              Unlimited Mileage
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-l-5 border-l-[#16fe01] py-5">
          <div className="flex  justify-center">
            <div className="p-2 bg-[#16fe01] rounded-full">
              <img
                src="Icons/deal.png"
                className="w-10 h-10"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="pl-1 pt-1 flex justify-center">
            <h1 className="pt-2 text-[30px]/8 text-center font-bold">
              Reliable Customer Support
            </h1>
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

export default Services;

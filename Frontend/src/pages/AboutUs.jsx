import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const AboutUs = () => {
  return (
    <div className="w-full h-fit background text-amber-50">
      <Header />

      <div className="pt-[100px] lg:pt-[150px] flex flex-col items-center">
        <h1 className="text-[25px] lg:text-[40px] text-center font-bold">
          We are{" "}
          <span className="text-[25px] lg:text-[50px] text-[#16fe01] font-bold ">
            Time
          </span>{" "}
          Car Rentals
        </h1>
        <p className="w-[90%] mt-5 text-[14px] text-center lg:text-[20px]">
          We are a full Car Rental service provider in Addis Ababa, Ethiopia
          with Daily, Weekly even Monthly rates for your business or pleasure
          travels in Ethiopia. At our car rental company, we strive to provide
          our customers with convenient and affordable transportation solutions,
          while also offering top-quality vehicles and exceptional customer
          service. We are committed to making the car rental experience as
          hassle-free and enjoyable as possible for our customers, so they can
          focus on their plans and experiences, rather than worrying about
          transportation. Our cars come with professional and courteous drivers
          who will make your stay in Ethiopia a worry-free one.
        </p>
        <div className="mt-3 lg:mt-7 flex justify-between space-x-10">
          <Link to={"/Contact"}>
            <Button text={"Contact"} />
          </Link>
          <Link to={"/Contact"}>
            <Button text={"Work With Us"} />
          </Link>
        </div>
      </div>

      <div className="mt-[100px] flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="w-full lg:w-[30%] mb-5 lg:mb-0">
          <div className="w-full h-full px-6">
            <img
              src="Abel.jpg"
              className="w-full h-auto rounded-[15px]"
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%]">
          <h1 className="text-[12px] lg:text-[22px]  pl-10 pr-1.5">
            <span className="text-[20px] lg:text-[40px] text-[#16fe01] font-bold ">
              We
            </span>{" "}
            understand choosing rental services might be difficult and time
            consuming task. At TIME Rental we always try to make it easier
            by providing detailed information.
          </h1>
          <div className="mt-10 grid lg:grid-cols-2 gap-2">
            <div className="w-full h-[200px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">Lowest price</h1>
                <p>
                  We promise to give you the lowest price rate in town for the
                  car you choose.
                </p>
              </div>
            </div>
            <div className="w-full h-[200px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">We love serving</h1>
                <p className="w-[95%]">
                  We want you to be a happy customer. With us it is not a one
                  time deal.
                </p>
              </div>
            </div>
            <div className="w-full h-[250px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">Professional</h1>
                <p>
                  Our friendly and knowledgeable staff will give you a tour with
                  all the information to make your visit of Addis Ababa and
                  other parts of Ethiopia a memorable experience.
                </p>
              </div>
            </div>
            <div className="w-full h-[250px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex item-center bg-[#16fe01] rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">Lowest price</h1>
                <p>
                  We promise to give you the lowest price rate in town for the
                  car you choose.
                </p>
              </div>
            </div>
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

export default AboutUs;

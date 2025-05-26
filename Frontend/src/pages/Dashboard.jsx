import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";

const Dashboard = () => {
  return (
    <div className="w-full h-full overflow-hidden background text-amber-50">
      <Header />
      <div className="w-full h-[50vh] flex justify-center pt-[210px] lg:pt-[200px] pl-[20px] lg:pl-[40px]">
        <div className="w-full h-full lg:w-[100%]">
          <h1 className="text-[30px] text-center lg:text-[45px]">
            <span className="text-[40px] lg:text-[60px] text-[#16fe01] font-bold">
              Welcome
            </span>{" "}
            to Dashboard
          </h1>
          <h2 className="text-[25px] text-center lg:text-[40px]">
            You Login Successfully👌
          </h2>

          <div className="flex justify-center mt-5 lg:mt-10 space-x-2.5">
            <Link to={"/Home"}>
              <Button text={"Go To HomePage"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="my-[50px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
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

export default Dashboard;

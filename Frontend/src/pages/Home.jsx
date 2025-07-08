import React, { lazy, Suspense, useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/Button";
import SkeletonImage from "../components/Skeleton";
const LiveChat = lazy(() => import("../components/LiveChat"));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="w-full overflow-x-hidden h-[100%] background text-amber-50">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>

        <Suspense fallback={<div>Loading chat...</div>}>
          <LiveChat />
        </Suspense>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[100px] lg:pt-[150px] pl-[20px] lg:pl-[40px] relative">
          <div className="min-w-full lg:w-[100%]">
            <h1 className="text-[30px] lg:text-[45px] font-semibold">
              <span className="text-[40px] lg:text-[60px] text-lum font-bold font-sans">
                Time
              </span>{" "}
              CAR RENTAL <br />
              SERVICE IN ETHIOPIA.
            </h1>
            <p className="text-[20px]/7 lg:text-[30px]/10 my-3 lg:my-6">
              Daily or Weekly Car Rentals for <br />
              Your Business or Visiting Travel Plans
            </p>
            <div className="flex  mt-5 lg:mt-10 space-x-2.5">
              <Link to={"/Contact"}>
                <Button text={"Contact Us"} />
              </Link>
              <Link to={"/Booking"}>
                <Button text={"Our Services"} />
              </Link>
            </div>
          </div>

          <div className="w-[100%] mt-10 lg:w-[100%] flex justify-center">
            <SkeletonImage
              isLoading={isLoading}
              loading="lazy"
              src="mercedis.png"
              imgClass="w-[600px] lg:w-[700px] h-fit lg:absolute lg:right-[10px] hover:scale-102 hover:transition-1s"
              alt="Mercedis"
              skeletonClass="w-[380px] lg:w-[550px]  h-[350px] rounded-[10px]"
            />
          </div>
        </div>

        <div className="w-full mt-20 lg:mt-50 grid lg:grid-cols-2 justify-between">
          <div className="w-[100%] lg:w-[100%] px-[20px] lg:pl-10">
            <h1 className="text-[25px] lg:text-[40px] text-center font-bold">
              WELCOME TO THE BEST CAR RENTAL SERVICE IN TOWN.
            </h1>
            <h1 className="text-[18px] text-center lg:text-[22px] text-lum py-2">
              The Quality Customer Service You Deserve
            </h1>
            <p className="text-[15px] text-center lg:text-[18px]">
              We care for our customers and make sure their stay in Ethiopia is
              smooth and memorable. From the time we pick you up from the
              Airport or Hotel to the entire time of your stay in the country,
              we will help you to enjoy your travel in Addis Ababa and other
              tourist destination locations.
            </p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={"CHOOSE YOUR RIDE"} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] lg:w-[100%] flex justify-center">
            <SkeletonImage
              isLoading={isLoading}
              src="MersedisFront.png"
              imgClass="w-[300px] mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] h-[300px] bg-gray-300 rounded-[10px] animate-pulse"
            />
          </div>
        </div>

        <div className="w-full h-fit grid lg:grid-cols-4 justify-around mt-[100px] lg:mt-[250px] gap-3">
          <div className="w-[100%] h-fit py-3 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="compact.png"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px] bg-gray-400  rounded-[10px] animate-pulse"
            />
            <h1 className="text-[50px] text-white font-bold">Compact</h1>
            <p className="text-[25px] text-white ">From $1560 a Day</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={"Book Now!"} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] h-fit py-3 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="economy.png"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit transition-all"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px] bg-gray-400  rounded-[10px] animate-pulse"
            />
            <h1 className="text-[50px] text-white font-bold">Economy</h1>
            <p className="text-[25px] text-white ">From $2070 a Day</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={"Book Now!"} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] h-fit pt-10 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="midsuv.png"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px] bg-gray-400  rounded-[10px] animate-pulse"
            />
            <h1 className="text-[50px] text-white font-bold">Mid Suv</h1>
            <p className="text-[25px] text-white ">From $1770 a Day</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={"Book Now!"} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] h-fit py-3 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="minivan.png"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px] bg-gray-400  rounded-[10px] animate-pulse"
            />
            <h1 className="text-[50px] text-white font-bold">Mini Van</h1>
            <p className="text-[25px] text-white ">From $2570 a Day</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={"Book Now!"} />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-fit mt-15 lg:mt-30 flex flex-col items-center">
          <div className="py-5 lg:py-10">
            <h1 className="text-[25px] lg:text-6xl text-center font-bold">
              EASY BOOKING STEPS
            </h1>
            <h1 className="text-[20px] lg:text-[30px] text-lum text-center mt-2 lg:mt-6">
              How to book your car with us and Start enjoying your ride
            </h1>
          </div>

          <div className="w-full h-fit lg:mt-5 grid lg:grid-cols-3 gap-3 justify-around">
            <div className="w-full px-3 pt-3 pb-5 text-[30px] font-bold card">
              <SkeletonImage
                isLoading={isLoading}
                src="carlist.png"
                imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
                skeletonClass="w-[400px] h-[300px] bg-gray-400  rounded-[10px] animate-pulse"
              />
              <h1 className="mt-2 ml-3">
                <span className="text-lum">01</span>
                <br />
                CLICK THE RIDE
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 text-[30px] font-bold card">
              <SkeletonImage
                isLoading={isLoading}
                src="send.jpg"
                imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
                skeletonClass="w-[400px] h-[300px] bg-gray-400  rounded-[10px] animate-pulse"
              />
              <h1 className="mt-2 ml-3">
                <span className="text-lum">02</span>
                <br />
                SEND A REQUEST
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 text-[30px] font-bold card">
              <SkeletonImage
                isLoading={isLoading}
                src="enjoy.jpg"
                imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
                skeletonClass="w-[400px] h-[300px] bg-gray-400  rounded-[10px] animate-pulse"
              />
              <h1 className="mt-2 ml-3">
                <span className="text-lum">03</span>
                <br />
                ENJOY THE RIDE
              </h1>
            </div>
          </div>
        </div>

        <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-[15px] lg:text-[40px] font-bold">
              COME & TRY OUR <span className="text-lum">SERVICES</span>
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
    </>
  );
};

export default Home;

import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "../components/Card";
import SkeletonImage from "../components/Skeleton";
import LiveChat from "../components/LiveChat";

export const Tutorial = () => {
  //const [isLoading, setIsLoading] = useState(true);

  const Image = [
    {
      url: "Book/BookSt1.jpg",
    },
    {
      url: "Book/BookSt2.jpg",
    },
    {
      url: "Book/BookSt3.jpg",
    },
    {
      url: "Book/BookSt4.jpg",
    },
    {
      url: "Book/BookSt5.jpg",
    },
    {
      url: "Book/BookStSuccess.jpg",
    },
    {
      url: "Book/BookStFail.jpg",
    },
    {
      url: "Book/BookStFail1.jpg",
    },
    {
      url: "Book/BookStFail2.jpg",
    },
  ];

  // useEffect(() => {
  //   // Simulate loading for 2 seconds
  //   const timer = setTimeout(() => setIsLoading(false), 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  const [page, setPage] = useState(0);

  function prev() {
    const isFirstSlide = page === 0;
    const newIndex = isFirstSlide ? Image.length - 1 : page - 1;

    setPage(newIndex);
  }

  function next() {
    const isFirstSlide = page === Image.length - 1;
    const newIndex = isFirstSlide ? 0 : page + 1;

    setPage(newIndex);
  }

  return (
    <div className="w-full min-h-full bg-white/10 overflow-x-hidden text-white">
      <Header />
      <LiveChat />
      <div className="w-full h-full flex justify-center items-center pt-10">
        <div className="w-full h-full mt-10 lg:mt-30 flex flex-col items-center">
          <div className="py-5 lg:py-10">
            <h1 className="text-[25px] lg:text-6xl text-center font-bold">
              EASY BOOKING STEPS
            </h1>

            <h1 className="text-[20px] lg:text-[30px] text-lum text-center mt-2 lg:mt-6">
              How to book your car with us and Start enjoying your ride
            </h1>
          </div>

          <div className="w-full h-[1000px] flex justify-center items-center bg-gray-900 relative px-5">
            {/* Background Image */}
            <div
              style={{ backgroundImage: `url(${Image[page].url})` }}
              className="w-full max-w-[600px] h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
            ></div>

            {/* Back Button */}
            <div
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-3 text-black text-xl cursor-pointer hover:bg-white/70 transition"
              onClick={prev}
            >
              ←
            </div>

            {/* Next Button */}
            <div
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-3 text-black text-xl cursor-pointer hover:bg-white/70 transition"
              onClick={next}
            >
              →
            </div>
          </div>

          {/* <div className="w-full h-fit lg:mt-5 grid lg:grid-cols-3 gap-3 justify-around text-[15px] lg:text-[20px]">
            <div className="w-full px-3 pt-3 pb-5 font-bold card">
              <div className="relative">
                <SkeletonImage
                  isLoading={isLoading}
                  src="Book/BookSt1.jpg"
                  imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-[600px]"
                  skeletonClass="w-[400px] h-[300px]"
                />
                <div className=""></div>
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
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

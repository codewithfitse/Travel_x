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
        </div>
      </div>

      <Footer />
    </div>
  );
};

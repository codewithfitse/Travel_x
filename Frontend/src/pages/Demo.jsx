import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "../components/Card";
import SkeletonImage from "../components/Skeleton";
import LiveChat from "../components/LiveChat";

export const Demo = () => {
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

  return (
    <div className="w-full min-h-full bg-white/10 overflow-x-hidden text-white">
      <Header />
      <LiveChat />
      <div className="w-full h-full flex justify-center items-center pt-10">
        <div className="w-full h-full mt-15 lg:mt-30 flex flex-col items-center">
          <div className="py-5 lg:py-10">
            <h1 className="text-[25px] lg:text-6xl text-center font-bold">
              EASY BOOKING STEPS
            </h1>

            <h1 className="text-[20px] lg:text-[30px] text-lum text-center mt-2 lg:mt-6">
              How to book your car with us and Start enjoying your ride
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

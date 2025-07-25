import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SkeletonImage from "../components/Skeleton";
import LiveChat from "../components/LiveChat";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-fit background overflow-x-hidden text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px] lg:pt-[150px] flex flex-col items-center">
        <h1 className="text-[25px] lg:text-[40px] text-center font-bold">
          We are{" "}
          <span className="text-[25px] lg:text-[50px] text-lum font-bold ">
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

      <div className="w-full mt-[100px] flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="w-full lg:w-[30%] mb-5 lg:mb-0">
          <div className="w-full h-full px-6">
            <SkeletonImage
              isLoading={isLoading}
              src="Abel.jpg"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[600px] rounded-[10px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] mr-10">
          <h1 className="text-[12px] lg:text-[22px]  pl-10 pr-1.5">
            <span className="text-[20px] lg:text-[40px] text-lum font-bold ">
              We
            </span>{" "}
            understand choosing rental services might be difficult and time
            consuming task. At TIME Rental we always try to make it easier by
            providing detailed information.
          </h1>
          <div className="mt-10 grid lg:grid-cols-2 gap-1">
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-lum rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] h-fit flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">Quality & Variety</h1>
                <p>
                  Discover our diverse range of meticulously maintained
                  vehicles, ensuring you always drive in style. From sleek
                  sedans to rugged SUVs, our fleet offers the perfect ride for
                  every occasion. We meticulously maintain each vehicle to the
                  highest standards.
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-lum rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">Affordable Rates</h1>
                <p>
                  We believe that luxury travel should be accessible to all. We
                  offer competitive prices without hidden fees, giving you the
                  freedom to experience the comfort and style of our premium
                  vehicles without breaking the bank. We’re committed to
                  providing affordable luxury for your travels. With us it is
                  not a one time deal.
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-lum rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">Easy Booking</h1>
                <p>
                  Reserving your dream car is a breeze with Drivoxe. Our
                  user-friendly online platform and mobile app make the booking
                  process straightforward and efficient. In just a few clicks,
                  you can secure your choice of vehicle and hit the road,
                  ensuring a seamless and hassle-free experience from start to
                  finish.
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-lum rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">
                  {" "}
                  Customer Satisfaction
                </h1>
                <p>
                  Our loyal customers trust Drivoxe for the excellence of our
                  service and the exquisite selection in our fleet. From the
                  moment you book to the final mile of your journey, we are
                  dedicated to providing top-notch service. We pride ourselves
                  on our responsive customer support, available 24/7 to assist
                  you. Your satisfaction is our ultimate reward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;

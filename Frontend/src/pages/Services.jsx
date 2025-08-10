import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import Button from "../components/Button";
import LiveChat from "../components/LiveChat";
import useLanguage from "./useLanguage";

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full min-h-screen bg-animated-dark text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-accent ">Our</span> {t("services_title")}
        </h1>
        <h2 className="text-[20px] lg:text-[40px] text-center">
          {t("services_subtitle")}
        </h2>
      </div>

      <div className="mt-[60px] py-2 px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 container">
        <div className="w-full flex items-center py-5">
          <div className="w-[20%] flex justify-center">
            <div className="p-3 bg-accent rounded-full">
              <img src="Icons/car.png" className="w-10 h-10" alt="" srcset="" />
            </div>
          </div>
          <div className="pl-1 w-[80%]">
            <h1 className="pb-1 text-[40px] text-accent font-bold">{t("car_rental_title")}</h1>
            <h2 className="w-[90%]">
              {t("car_rental_description")}
            </h2>
          </div>
        </div>
        <div className="w-full flex items-center py-5">
          <div className="w-[20%] flex justify-center">
            <div className="p-3 bg-accent rounded-full">
              <img
                src="Icons/binoculars.png"
                className="w-10 h-10"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="pl-1 w-[80%]">
            <h1 className="pb-1 text-[40px] text-accent font-bold">{t("city_tour_title")}</h1>
            <h2 className="w-[90%]">
              {t("city_tour_description")}
            </h2>
          </div>
        </div>
        <div className="w-full flex items-center py-5">
          <div className="w-[20%] flex justify-center">
            <div className="p-3 bg-accent rounded-full">
              <img src="Icons/map.png" className="w-10 h-10" alt="" srcset="" />
            </div>
          </div>
          <div className="pl-1 w-[80%]">
            <h1 className="pb-1 text-[40px]/10 text-accent line-clamp-2 font-bold">
              {t("travel_consulting_title")}
            </h1>
            <h2 className="w-[90%]">
              {t("travel_consulting_description")}
            </h2>
          </div>
        </div>
      </div>

      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-accent ">Our</span> {t("our_promise_title")}
        </h1>
      </div>

      <div className="mt-[60px] py-6 px-2 w-full grid lg:grid-cols-4 place-items-center gap-3 space-y-3 container">
        <div className="w-full flex flex-col items-center border-l-5 border-l-accent py-5">
          <div className="flex justify-center">
            <div className="p-2 bg-accent rounded-full">
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
              {t("good_price_quality")}
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-l-5 border-l-accent py-5">
          <div className="flex justify-center">
            <div className="p-2 bg-accent rounded-full">
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
              {t("constantly_maintained")}
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-l-5 border-l-accent py-5">
          <div className="flex  justify-center">
            <div className="p-2 bg-accent rounded-full">
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
              {t("unlimited_mileage")}
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center border-l-5 border-l-accent py-5">
          <div className="flex  justify-center">
            <div className="p-2 bg-accent rounded-full">
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
              {t("reliable_customer_support")}
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;

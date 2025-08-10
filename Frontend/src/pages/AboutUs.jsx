import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SkeletonImage from "../components/Skeleton";
import LiveChat from "../components/LiveChat";
import useLanguage from "./useLanguage";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-fit bg-animated-dark overflow-x-hidden text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px] lg:pt-[150px] flex flex-col items-center">
        <h1 className="text-[25px] lg:text-[40px] text-center font-bold">
          {t("about_title")}
        </h1>
        <p className="w-[90%] mt-5 text-[14px] text-center lg:text-[20px]">
          {t("about_description")}
        </p>
        <div className="mt-3 lg:mt-7 flex justify-between space-x-10">
          <Link to={"/Contact"}>
            <Button text={t("contact")} />
          </Link>
          <Link to={"/Contact"}>
            <Button text={t("work_with_us")} />
          </Link>
        </div>
      </div>

      <div className="w-full mt-[100px] flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="w-full lg:w-[30%] mb-5 lg:mb-0">
          <div className="w-full h-full px-6">
            <SkeletonImage
              isLoading={isLoading}
              src="Abel.webp"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[600px] rounded-[10px]"
            />
          </div>
        </div>
        <div className="w-full lg:w-[70%] mr-10">
          <h1 className="text-[12px] lg:text-[22px]  pl-10 pr-1.5">
            {t("about_understanding")}
          </h1>
          <div className="mt-10 grid lg:grid-cols-2 gap-1">
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-accent rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] h-fit flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">{t("quality_variety_title")}</h1>
                <p>
                  {t("quality_variety_description")}
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-accent rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">{t("affordable_rates_title")}</h1>
                <p>
                  {t("affordable_rates_description")}
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-accent rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">{t("easy_booking_title_about")}</h1>
                <p>
                  {t("easy_booking_description")}
                </p>
              </div>
            </div>
            <div className="w-full h-[300px] pl-5 flex items-center space-x-5 card">
              <div className="p-3 flex items-center bg-accent rounded-full">
                <img
                  src="Icons/car.png"
                  className="w-10 h-10"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="w-[90%] flex flex-col justify-center">
                <h1 className="text-[30px] font-bold">
                  {t("customer_satisfaction_title")}
                </h1>
                <p>
                  {t("customer_satisfaction_description")}
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

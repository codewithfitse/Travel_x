import React, { lazy, Suspense, useState, useEffect } from "react";
import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import SkeletonImage from "../components/Skeleton";
import useLanguage from "./useLanguage";
const LiveChat = lazy(() => import("../components/LiveChat"));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="w-full overflow-x-hidden min-h-screen bg-animated-dark text-amber-50">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>

        <Suspense fallback={<div>Loading chat...</div>}>
          <LiveChat />
        </Suspense>
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-[100px] lg:pt-[150px] pl-[20px] lg:pl-[40px] relative">
          <div className="w-full lg:w-[100%]">
            <h1 className="text-[30px] lg:text-[45px] font-semibold">
              <span className="text-[40px] lg:text-[60px] text-accent font-bold font-serif">
                Time
              </span>{" "}
              {t("hero_title")}
            </h1>
            <p className="text-[20px]/7 lg:text-[30px]/10 my-3 lg:my-6">
              {t("hero_subtitle")}
            </p>
            <div className="flex  mt-5 lg:mt-10 space-x-2.5">
              <Link to={"/Contact"}>
                <Button text={t("contact_us")} />
              </Link>
              <Link to={"/Booking"}>
                <Button text={t("our_services")} />
              </Link>
            </div>
          </div>

          <div className="w-[100%] mt-10 lg:w-[100%] flex justify-center">



            <img
              loading="lazy"
              //isLoading={isLoading}
              src="mercedis.webp"
              imgClass="w-[600px] lg:w-[700px] h-fit lg:absolute lg:right-[10px] hover:scale-102 hover:transition-1s"
              alt="Mercedis"
            />
          </div>
        </div>

        <div className="w-full mt-20 lg:mt-50 grid lg:grid-cols-2 justify-between">
          <div className="w-[100%] lg:w-[100%] px-[20px] lg:pl-10">
            <h1 className="text-[25px] lg:text-[40px] text-center font-bold">
              {t("welcome_title")}
            </h1>
            <h1 className="text-[18px] text-center lg:text-[22px] text-accent py-2">
              {t("welcome_subtitle")}
            </h1>
            <p className="text-[15px] text-center lg:text-[18px]">
              {t("welcome_description")}
            </p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={t("choose_your_ride")} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] lg:w-[100%] flex justify-center">
            <SkeletonImage
              isLoading={isLoading}
              src="MersedisFront.webp"
              imgClass="w-[300px] mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] h-[300px] bg-gray-300 rounded-[10px] animate-pulse"
            />
          </div>
        </div>

        <div className="w-full h-fit grid lg:grid-cols-4 justify-around mt-[100px] lg:mt-[250px] gap-3">
          <div className="w-[100%] h-fit py-3 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="compact.webp"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px]"
            />
            <h1 className="text-[50px] text-white font-bold">{t("compact")}</h1>
            <p className="text-[25px] text-white ">{t("from_day")}1560{t("a_day")}</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={t("book_now")} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] h-fit py-3 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="economy.webp"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit transition-all"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px]"
            />
            <h1 className="text-[50px] text-white font-bold">{t("economy")}</h1>
            <p className="text-[25px] text-white ">{t("from_day")}2070{t("a_day")}</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={t("book_now")} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] h-fit pt-10 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="midsuv.webp"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px]"
            />
            <h1 className="text-[50px] text-white font-bold">{t("mid_suv")}</h1>
            <p className="text-[25px] text-white ">{t("from_day")}1770{t("a_day")}</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={t("book_now")} />
              </Link>
            </div>
          </div>
          <div className="w-[100%] h-fit py-3 pb-5 flex flex-col items-center card">
            <SkeletonImage
              isLoading={isLoading}
              src="minivan.webp"
              imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
              skeletonClass="w-[400px] lg:w-[300px] h-[300px]"
            />
            <h1 className="text-[50px] text-white font-bold">{t("mini_van")}</h1>
            <p className="text-[25px] text-white ">{t("from_day")}2570{t("a_day")}</p>
            <div className="mt-3 lg:mt-7 flex justify-center">
              <Link to={"/Booking"}>
                <Button text={t("book_now")} />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-fit mt-15 lg:mt-30 flex flex-col items-center">
          <div className="py-5 lg:py-10">
            <h1 className="text-[25px] lg:text-6xl text-center font-bold">
              {t("easy_booking_title")}
            </h1>
            <h1 className="text-[20px] lg:text-[30px] text-accent text-center mt-2 lg:mt-6">
              {t("easy_booking_subtitle")}
            </h1>
          </div>

          <div className="w-full h-fit lg:mt-5 grid lg:grid-cols-3 gap-3 justify-around">
            <div className="w-full px-3 pt-3 pb-5 text-[30px] font-bold card">
              <SkeletonImage
                isLoading={isLoading}
                src="carlist.webp"
                imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
                skeletonClass="w-[400px] h-[300px]"
              />
              <h1 className="mt-2 ml-3">
                <span className="text-accent">{t("step_01")}</span>
                <br />
                {t("click_ride")}
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 text-[30px] font-bold card">
              <SkeletonImage
                isLoading={isLoading}
                src="send.jpg"
                imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
                skeletonClass="w-[400px] h-[300px]"
              />
              <h1 className="mt-2 ml-3">
                <span className="text-accent">{t("step_02")}</span>
                <br />
                {t("send_request")}
              </h1>
            </div>
            <div className="w-full px-3 pt-3 pb-5 text-[30px] font-bold card">
              <SkeletonImage
                isLoading={isLoading}
                src="enjoy.jpg"
                imgClass="w-full mt-13 lg:mt-5 lg:w-[400px] h-fit"
                skeletonClass="w-[400px] h-[300px]"
              />
              <h1 className="mt-2 ml-3">
                <span className="text-accent">{t("step_03")}</span>
                <br />
                {t("enjoy_ride")}
              </h1>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;

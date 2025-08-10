import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import useLanguage from "../pages/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            {t('footer_services_title')}
          </h1>
          <h2 className="text-[10px] lg:text-[20px] text-2xl">
            {t('footer_customer_service')}
          </h2>
        </div>
        <div className="lg:mt-7 flex justify-center items-center">
          <Link to={"/Vehicles"}>
            <Button text={t('footer_book_now')} />
          </Link>
        </div>
      </div>
      <div className="w-full h-auto lg:mb-0 lg:mt-30 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-5 lg:px-10 py-6">
        <div className="flex pb-3 lg:pb-6 justify-between items-center">
          <div className="py-2 lg:py-5">
            <h1 className="text-[12px] lg:text-[28px] font-bold">
              {t('footer_newsletter_title')}
            </h1>
            <h2 className="text-[10px] lg:text-[20px]">
              {t('footer_newsletter_subtitle')}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={t('footer_email_placeholder')}
              className="py-2 px-3 w-[160px] lg:w-[380px] bg-white/10 text-white placeholder:text-white/60 rounded-2xl ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <button className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 text-sm font-semibold hover:bg-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 transition-colors">Subscribe</button>
          </div>
        </div>
        <div className="flex justify-around items-start">
          <div className="w-[30%] pl-4 lg:pl-8 flex flex-col space-y-1">
            <h1 className="text-[15px] lg:text-[28px] text-accent font-bold">
              <span className="text-[40px]">T</span>{t('footer_time_title')}
            </h1>
            <h2 className="text-[10px] lg:text-[16px]">
              {t('footer_brand_description')}
            </h2>
            <div className="flex flex-col mt-2 space-y-2">
              <h1 className="mb-2">{t('footer_find_us')}</h1>
              <div className="w-[130px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] font-bold lg:w-[280px] box">
                <h1>{t('footer_phone')}</h1>
              </div>
              <div className="w-[130px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] font-bold lg:w-[280px] box">
                <h1>{t('footer_address')}</h1>
              </div>
              <div className="w-[130px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] font-bold lg:w-[280px] box">
                <h1>{t('footer_mail')}</h1>
              </div>
            </div>
          </div>

          <div className="w-[33%] flex flex-col items-center">
            <div className="w-[70%] pb-3 mb-2 border-b-2 border-amber-400">
              <h1 className="text-center text-[13px] lg:text-[23px]">
                {t('footer_latest_news')}
              </h1>
            </div>
            <h2 className=" text-[12px] lg:text-[23px]">{t('footer_read_all')}</h2>
          </div>

          <div className="w-[33%] flex flex-col items-center ">
            <div className="w-[70%] pb-3 border-b-2 border-amber-400">
              <h1 className="text-center text-[13px] lg:text-[28px]">
                {t('footer_important_links')}
              </h1>
            </div>
            <div className="flex flex-col mt-2 space-y-2 font-bold">
              <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
                <h1>{t('footer_casual_cars')}</h1>
              </div>
              <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
                <h1>{t('footer_wedding_cars')}</h1>
              </div>
              <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
                <h1>{t('footer_gallery')}</h1>
              </div>
              <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
                <h1>{t('footer_about_us')}</h1>
              </div>
              <div className="w-[80px] py-1 lg:py-2 px-2 text-[8px] lg:text-[18px] text-center font-bold lg:w-[200px] box">
                <h1>{t('footer_contact_us')}</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

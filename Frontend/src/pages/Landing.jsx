import { Link } from "react-router-dom";
import Button from "../components/Button";

export const Landing = () => {
  return (
    <div className="w-full h-screen bg-animated-dark overflow-x-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/40" />
      <div className="relative h-screen pt-36 lg:pt-64 px-5 lg:px-16 pb-10 text-white font-serif">
        <h1 className="mb-3 text-lum font-serif ">
          <span className="text-[72px] lg:text-[96px] leading-none">T</span>ime
          <br />
        </h1>
        <h1 className="text-3xl lg:text-6xl font-bold">Car Rental Website</h1>
        <p className="text-white/90 text-base lg:text-2xl mt-2 max-w-3xl">
          Find a variety of the car of your dreams, <br />
          at a good price and quality.
        </p>
        <div className="mt-10 flex justify-center lg:justify-start">
          <Link to="/Home">
            <button className="w-full h-fit py-3 px-10 lg:py-4 lg:px-14 text-lg lg:text-3xl font-bold bg-gradient-to-r from-teal-500 to-emerald-700 text-slate-950 rounded-2xl shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";
import axios from "axios";

const Demo = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [destination, setDestination] = useState();
  const [item, setItem] = useState();

  function handleClick(e) {
    e.preventDefault();
    axios
      .post(
        "https://travel-x-408k.onrender.com/dashboard/demo",
        {
          fullName,
          email,
          phone,
          item,
          destination,
        },
        { withCredentials: true }
      )
      .then((user) => {
        console.log(user);
        setFullName(""), setEmail(""), setPhone("");
        setDestination("");
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#1d1d1f] via-[#2c2c2e] to-[#3a3a3c] px-4">
      <div className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl p-10 max-w-xl w-full text-center transition-all duration-500 ease-out hover:backdrop-blur-xl hover:shadow-2xl hover:border-white/30 hover:scale-105">
        {/* Glow Border Animation */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/30 group-hover:opacity-100 opacity-0 transition-all duration-500 pointer-events-none"></div>

        <h1 className="text-5xl font-semibold text-white tracking-tight mb-4">
          Welcome to Travel X
        </h1>
        <p className="text-lg text-white/70 font-light mb-8">
          Explore. Discover. Travel with elegance.
        </p>
        <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Demo;

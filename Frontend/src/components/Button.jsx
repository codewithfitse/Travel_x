import React from "react";
//import { Button } from "flowbite-react";

const Buttons = ({ text }) => {
  return (
    <button
      className="w-fit h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] font-bold bg-gradient-to-r from-teal-500 to-emerald-700 text-slate-950 rounded-[12px] shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 active:scale-[0.98]"
    >
      {text}
    </button>
  );
};

export default Buttons;

export const LoadingButtons = ({ text, color }) => {
  return (
    <Button
      color={color}
      outline
      className="w-full h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] font-bold"
    >
      {text}
    </Button>
  );
};

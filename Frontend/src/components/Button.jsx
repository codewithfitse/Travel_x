import React from "react";

export const Button = ({ text }) => {
  return (
    <button className="w-fit h-fit py-1 px-2 lg:py-2 lg:px-3 text-[13px] lg:text-[30px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg">
      {text}
    </button>
  );
};

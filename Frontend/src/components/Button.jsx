import React from "react";
//import { Button } from "flowbite-react";

const Buttons = ({ text }) => {
  return (
    <button
      outline
                      className="w-fit h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg"
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

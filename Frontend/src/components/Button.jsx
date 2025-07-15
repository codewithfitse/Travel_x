import React from "react";
import { Button } from "flowbite-react";

const Buttons = ({ text, color }) => {
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

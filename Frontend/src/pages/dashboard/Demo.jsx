import React from "react";
<<<<<<< HEAD

export const Demo = () => {
  return (
    <div className="w-full h-screen flex bg-gray-900">
      <div></div>
=======
import { useState } from "react";
import { Card } from "../../components/Card";

export const Demo = () => {
  const [open, setOpen] = useState(false);
  const btn =
    "w-fit h-fit flex gap-2 items-center justify-center text-[30px] font-bold py-2 px-4 rounded-lg";
  const btnLight = "bg-white text-gray-400";
  const btnDanger = "text-white bg-red-600 shadow-red-400/40";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-500">
      <div>
        <button className={`${btn} ${btnDanger}`} onClick={() => setOpen(true)}>
          Delete
        </button>
        <Card open={open} onClose={() => setOpen(false)}>
          <button className={`${btn} ${btnDanger}`}>Delete</button>
        </Card>
      </div>
>>>>>>> Try
    </div>
  );
};

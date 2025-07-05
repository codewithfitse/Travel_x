import React from "react";

export const Demo = () => {
  const btn =
    "flex gap-2 items-center justify-center text-[30px] font-bold py-2 px-4 rounded-lg";
  const btnLight = "bg-white text-gray-400";
  const btnDanger = "text-white bg-red-600 shadow-red-400/40";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-500">
      <div>
        <button className={`${btn} ${btnDanger}`}>Delete</button>
      </div>
    </div>
  );
};

import React from "react";

export const Card = ({ open, children, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="size-52 flex flex-col justify-center items-center bg-amber-50 rounded-2xl relative">
        <div
          className="absolute top-0 right-2 w-fit h-fit text-2xl p-2"
          onClick={onClose}
        >
          X
        </div>
        <div className="mb-5">
          <h1 className="text-[30px]">Are you sure</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

import React from "react";
import { FiX } from "react-icons/fi";

export const Card = ({ open, children, onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 flex justify-center items-center ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div className="min-w-[280px] max-w-md px-6 py-5 flex flex-col justify-center items-center bg-white/10 backdrop-blur-2xl text-amber-50 rounded-2xl relative border border-white/10 shadow-2xl">
        <button
          aria-label="Close dialog"
          className="absolute top-2 right-2 inline-flex items-center justify-center p-2 rounded-lg bg-white/10 hover:bg-white/20 ring-1 ring-white/20"
          onClick={onClose}
        >
          <FiX className="w-5 h-5" />
        </button>
        <div className="mb-5">
          <h1 className="text-[30px]">Are you sure</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

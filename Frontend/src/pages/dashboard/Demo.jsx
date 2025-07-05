import React from "react";
import { useState } from "react";
import { Card } from "../../components/Card";

export const Demo = () => {
  const [open, setOpen] = useState(false);
  const btnLight = "bg-white text-gray-400";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-500">
      <div>
        <button className={`btn btnDanger`} onClick={() => setOpen(true)}>
          Delete
        </button>
        <Card open={open} onClose={() => setOpen(false)}>
          <button className={`btn1 btnDanger`}>Delete</button>
        </Card>
      </div>
    </div>
  );
};

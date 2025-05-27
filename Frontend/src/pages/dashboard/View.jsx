import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
const ViewDashboard = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <div className="text-red-500">⚠️ No user data found</div>;
  }

  return (
    <div className="w-full h-full overflow-hidden bg-gray-900 text-amber-50">
      <Header />
      <div className="w-full h-full mt-50 flex bg-gray-800">
        <div className="w-[200px] h-full bg-gray-800">
          <Link to="/Admin" className="text-blue-400 hover:underline">
            <h1 className="mx-4 mt-2 text-center border-b-2 border-amber-50">
              Dashboard
            </h1>
          </Link>
        </div>
        <div className="w-full h-full pl-2 bg-gray-700">
          <h1 className="w-[70%] px-3 mx-4 my-2 text-center border-b-2 border-amber-50">
            View Users Data
          </h1>

          <h1 className=" font-bold capitalize">
            ObjectId: <span className="font-semibold">{user._id}</span>
          </h1>
          <h1 className="font-bold capitalize">
            Name:{" "}
            <span className="font-semibold">
              {user.firstName} {user.lastName}
            </span>
          </h1>
          <h1 className="font-bold capitalize">
            Email: <span className="font-semibold">{user.email}</span>{" "}
          </h1>
          <h1 className="font-bold capitalize">
            Password: <span className="font-semibold">{user.password}</span>{" "}
          </h1>
          <h1 className="font-bold capitalize">
            Control:{" "}
            <span className="font-semibold">
              <Link
                to="/Edit"
                state={{ user }}
                className="text-blue-400 hover:underline"
              >
                Edit
              </Link>
              <Link
                to="/Delete"
                state={{ user }}
                className="ml-2 text-blue-400 hover:underline"
              >
                Delete
              </Link>
            </span>{" "}
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewDashboard;

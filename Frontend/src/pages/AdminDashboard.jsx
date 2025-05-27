import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";
import UserLogin from "../../../Server/models/usersDb";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      axios
        .get("https://travel-x-408k.onrender.com/dashboard")
        .then((result) => {
          console.log(result);
          setData(result.data);
        })
        .catch((err) => console.log(err));
      // const res = await fetch("http://localhost:3000/");
      // const json = await res.json();
      // setData(json);
    }
    loadData();
  }, []);

  return (
    <div className="w-full h-full overflow-hidden bg-gray-900 text-amber-50">
      <Header />
      <div className="w-full h-full mt-50 flex bg-gray-800">
        <div className="w-[200px] h-full bg-gray-800">
          <h1 className="mx-4 mt-2 text-center border-b-2 border-amber-50">
            Dashboard
          </h1>
        </div>
        <div className="w-full h-full bg-gray-700">
          <h1 className="w-[70%] px-3 mx-4 mt-2 text-center border-b-2 border-amber-50">
            Users
          </h1>
          {data.map((user) => (
            <div className="m-2 pr-2 lg:text-2xl">
              <h1 className=" font-bold capitalize">
                ObjectId: <span className="font-semibold">{user._id}</span>
              </h1>
              <h1 className="font-bold capitalize">
                First Name:{" "}
                <span className="font-semibold">{user.firstName}</span>
              </h1>
              <h1 className="font-bold capitalize">
                Last Name:{" "}
                <span className="font-semibold">{user.lastName}</span>
              </h1>
              <h1 className="font-bold capitalize">
                Email: <span className="font-semibold">{user.email}</span>{" "}
              </h1>
              <h1 className="font-bold capitalize">
                Password: <span className="font-semibold">{user.password}</span>{" "}
              </h1>
              <h1 className="font-bold capitalize">
                Admin: <span className="font-semibold">{user.isAdmin}</span>{" "}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;

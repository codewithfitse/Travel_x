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
        .get("http://localhost:3000/dashboard")
        .then((result) => {
          console.log(result);
          setData(result);
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
            <div className="m-2 text-2xl">
              <h1 className="capitalize">First Name: {user.firstName}</h1>
              <h1 className="capitalize">Last Name: {user.lastName}</h1>
              <h1>Email: {user.email}</h1>
              <h1>Password: {user.password}</h1>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;

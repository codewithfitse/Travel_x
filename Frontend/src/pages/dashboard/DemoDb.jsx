import { useEffect } from "react";
import { useState } from "react"; 
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom"; 

export const LandingDemoDb = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook", {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Demo Status
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Demo
                    </button>
                  </div>
                </div>

                <div className="w-full flex justify-between space-x-2">
                  <Link to="/AllDemoDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row items-center justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold mr-2">All</h1>
                        <i class="fa fa-address-book w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>

                  <Link to="/PendingDemoDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Pending</h1>
                        <i class="fa fa-address-book w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>

                  <Link to="/SucessfullDemoDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Successful</h1>
                        <i class="fa fa-address-book w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>

                  <Link to="/CancledDemoDb">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Cancled</h1>
                        <i class="fa fa-address-book w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditDemoDb" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              <h1 className="font-bold text-[40px]">
                                {user.customName?.charAt(0).toUpperCase()}{" "}
                              </h1>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.customName} Car Name:{user.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            {/* Member since January 15, 2023{" "} */}
                            {new Date(user.createdAt).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">{user.item}</h1>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-fit py-2 flex flex-col space-y-3">
                              <div className="w-fit h-full py-1">
                                <h1 className="text-[20px] text-gray-300 font-bold">
                                  Status
                                </h1>
                              </div>
                              <div className="w-full h-fit flex gap-3">
                                <h1
                                  className={`capitalize ${
                                    user.status === "Pending" && "text-green"
                                  }`}
                                >
                                  {user.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))) || <h1>There is now Bookings here</h1>}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const PendingDemoDb = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/Pending", {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Demo Status Pending
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/LandingDemoDb">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditDemoDb" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              <h1 className="font-bold text-[40px]">
                                {user.customName?.charAt(0).toUpperCase()}{" "}
                              </h1>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.customName} Car Name:{user.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            {/* Member since January 15, 2023{" "} */}
                            {new Date(user.createdAt).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">{user.item}</h1>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-fit py-2 flex flex-col space-y-3">
                              <div className="w-fit h-full py-1">
                                <h1 className="text-[20px] text-gray-300 font-bold">
                                  Status
                                </h1>
                              </div>
                              <div className="w-full h-fit flex gap-3">
                                <h1
                                  className={`capitalize ${
                                    user.status === "Pending" && "text-green"
                                  }`}
                                >
                                  {user.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))) || <h1>There is now Bookings here</h1>}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const SucessfullDemoDb = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/Successful", {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Demo Status Successful
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/LandingDemoDb">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditDemoDb" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              <h1 className="font-bold text-[40px]">
                                {user.customName?.charAt(0).toUpperCase()}{" "}
                              </h1>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.customName} Car Name:{user.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            {/* Member since January 15, 2023{" "} */}
                            {new Date(user.createdAt).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">{user.item}</h1>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-fit py-2 flex flex-col space-y-3">
                              <div className="w-fit h-full py-1">
                                <h1 className="text-[20px] text-gray-300 font-bold">
                                  Status
                                </h1>
                              </div>
                              <div className="w-full h-fit flex gap-3">
                                <h1
                                  className={`capitalize ${
                                    user.status === "Pending" && "text-green"
                                  }`}
                                >
                                  {user.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))) || <h1>There is now Bookings here</h1>}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const AllDemoDb = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook", {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Demo Status All
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/LandingDemoDb">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditDemoDb" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              <h1 className="font-bold text-[40px]">
                                {user.customName?.charAt(0).toUpperCase()}{" "}
                              </h1>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.customName} Car Name:{user.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            {/* Member since January 15, 2023{" "} */}
                            {new Date(user.createdAt).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">{user.item}</h1>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-fit py-2 flex flex-col space-y-3">
                              <div className="w-fit h-full py-1">
                                <h1 className="text-[20px] text-gray-300 font-bold">
                                  Status
                                </h1>
                              </div>
                              <div className="w-full h-fit flex gap-3">
                                <h1
                                  className={`capitalize ${
                                    user.status === "Pending" && "text-green"
                                  }`}
                                >
                                  {user.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))) || <h1>There is now Bookings here</h1>}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const CancledDemoDb = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/Canceled", {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Demo Status Cancel
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/LandingDemoDb">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditDemoDb" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              <h1 className="font-bold text-[40px]">
                                {user.customName?.charAt(0).toUpperCase()}{" "}
                              </h1>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.customName} Car Name:{user.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            {/* Member since January 15, 2023{" "} */}
                            {new Date(user.createdAt).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">{user.item}</h1>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-fit py-2 flex flex-col space-y-3">
                              <div className="w-fit h-full py-1">
                                <h1 className="text-[20px] text-gray-300 font-bold">
                                  Status
                                </h1>
                              </div>
                              <div className="w-full h-fit flex gap-3">
                                <h1
                                  className={`capitalize ${
                                    user.status === "Pending" && "text-green"
                                  }`}
                                >
                                  {user.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))) || <h1>There is now Bookings here</h1>}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};


export const UserDemoDb = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/demo", {
            withCredentials: true,
          })
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Demo
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Demo
                    </button>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditDemoDb" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              <h1 className="font-bold text-[40px]">
                                {user.customName?.charAt(0).toUpperCase()}{" "}
                              </h1>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.customName} Car Name:{user.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            {/* Member since January 15, 2023{" "} */}
                            {new Date(user.createdAt).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">{user.item}</h1>
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-fit py-2 flex flex-col space-y-3">
                              <div className="w-fit h-full py-1">
                                <h1 className="text-[20px] text-gray-300 font-bold">
                                  Status
                                </h1>
                              </div>
                              <div className="w-full h-fit flex gap-3">
                                <h1
                                  className={`capitalize ${
                                    user.status === "Pending" && "text-green"
                                  }`}
                                >
                                  {user.status}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))) || <h1>There is now Bookings here</h1>}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const EditDemoDb = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const {
    customName,
    _id,
    createdAt,
    email,
    phone,
    price,
    model,
    item,
    status,
  } = location?.state?.user;
  const navigate = useNavigate();

  const [stat, setStat] = useState(null);

  async function handleDelete(_id) {
    try {
      await axios.delete(`https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/${_id}`, {
        withCredentials: true,
      });
      alert("Successfully Deleted!");
      navigate("/LandingDemoDb");
    } catch (error) {
      alert("Not Deleted Try Again!");
      console.log(error);
    }
  }

  async function handleStatus(_id) {
    try {
      await axios.patch(`https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/${_id}`, {
        stat,
      });
      alert(`Successfully Change Status to ${stat}!`);
      navigate("/LandingDemoDb");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      User Bookings
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Bookings
                    </button>
                  </div>
                </div>

                <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                  <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                    <div className="relative">
                      <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                        <h1 className="font-bold text-[40px]">
                          {customName?.charAt(0).toUpperCase()}{" "}
                        </h1>
                      </div>
                      <div
                        className="w-8 h-8 lg:w-10 lg:h-10 bg-red-100 flex justify-center items-center rounded-[10px] absolute -top-7 left-25 sm:-top-7 sm:right-40 md:-top-7 md:right-60 lg:-top-7 lg:left-24"
                        onClick={() => handleDelete(_id)}
                      >
                        <i class="fa fa-trash w-fit text-red-500 hover:text-red-700 transition duration-300 !text-[25px] lg:!text-[30px] cursor-pointer"></i>
                      </div>
                      <div
                        className="w-8 h-8 lg:w-10 lg:h-10 bg-red-100 flex justify-center items-center rounded-[10px] absolute -top-7 left-15  sm:-top-7 sm:-left-40 md:-top-7 md:-left-60 lg:-top-7 lg:-left-12"
                        onClick={() => handleStatus(_id)}
                      >
                        <i class="fa fa-trash w-fit text-green-500 hover:text-green-700 transition duration-300 !text-[25px] lg:!text-[30px] cursor-pointer"></i>
                      </div>
                      <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                    </div>
                    <h1 className="mt-2 text-2xl text-white text-center font-bold">
                      Customer:{customName}
                    </h1>
                    <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                      {model}
                    </h1>
                    <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                      {/* Member since January 15, 2023{" "} */}
                      {new Date(createdAt).toLocaleString("en-GB")}
                    </h1>
                  </div>
                  <div className="w-full h-full py-5 px-5 bg-gray-800">
                    <div className="w-full h-full">
                      <div className="border-b-2 pb-2 border-gray-400">
                        <div className="w-full flex flex-col lg:flex-row gap-1">
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Email</h1>
                            <h1 className="font-semibold">{email}</h1>
                          </div>
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Phone</h1>
                            <h1 className="font-semibold">{phone}</h1>
                          </div>
                        </div>
                        <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Price</h1>
                            <h1 className="font-semibold">{price}</h1>
                          </div>
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Car type</h1>
                            <h1 className="font-semibold">{item}</h1>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-fit py-2 flex flex-col space-y-3">
                        <div className="w-fit h-full py-1">
                          <h1 className="text-[20px] text-gray-300 font-bold">
                            Status
                          </h1>
                        </div>
                        <div className="w-full h-fit flex gap-3">
                          <h1 className="">{status}</h1>
                        </div>
                        <div className="w-full h-fit flex gap-3">
                          <select
                            name="Hell"
                            id=""
                            onChange={(e) => setStat(e.target.value)}
                          >
                            <option value="">Choose Status</option>
                            <option value="pending">Pending</option>
                            <option value="successful">Successful</option>
                            <option value="canceled">Canceled</option>
                          </select>

                          <input
                            type="text"
                            value={stat}
                            onChange={(e) => setStat(e.target.value)}
                          />
                          <h1 className="">{status}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

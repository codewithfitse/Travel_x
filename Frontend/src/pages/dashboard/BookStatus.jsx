import { useEffect } from "react";
import { useState } from "react";
import {
  Header,
  SideBar,
  SubHeader,
  SubSideBar,
  UserHeader,
  UserSideBar,
} from "../dashboard/component";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Render = import.meta.env.VITE_BACKEND_URL;

export const LandingBookStatus = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get(
            "https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook",
            {
              withCredentials: true,
            }
          )
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
                    <h1
                      className={`text-white font-bold ${
                        toggle ? "text-[20px]" : "text-[30px]"
                      }`}
                    >
                      Booking Status
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/Admin">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Edit Demo
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  className={`w-full grid lg:grid-cols-4 ${
                    toggle ? "grid-cols-1" : "grid-cols-2"
                  } gap-2`}
                >
                  <Link to="/AllBookStatus">
                    <div
                      className={`w-full h-auto mt-4 lg:mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[20px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full flex justify-between items-center">
                        <h1
                          className={`text-center font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "w-fit text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "w-full text-[22px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          All
                        </h1>
                      </div>
                    </div>
                  </Link>

                  <Link to="/StatusOfBook" state={{ status: "pending" }}>
                    <div
                      className={`w-full h-auto mt-4 lg:mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[20px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full flex justify-between items-center">
                        <h1
                          className={`text-center font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "w-fit text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "w-full text-[22px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          Pending
                        </h1>
                      </div>
                    </div>
                  </Link>

                  <Link to="/StatusOfBook" state={{ status: "successful" }}>
                    <div
                      className={`w-full h-auto mt-4 lg:mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[20px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full flex justify-between items-center">
                        <h1
                          className={`text-center font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "w-fit text-[20px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "w-full text-[22px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          Successful
                        </h1>
                      </div>
                    </div>
                  </Link>

                  <Link to="/StatusOfBook" state={{ status: "canceled" }}>
                    <div
                      className={`w-full h-auto mt-4 lg:mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[20px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full flex justify-between items-center">
                        <h1
                          className={`text-center font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "w-fit text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "w-full text-[22px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          Canceled
                        </h1>
                      </div>
                    </div>
                  </Link>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditBookStatus" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full h-full">
                          <img
                            src={user.data.url}
                            alt=""
                            className="w-auto lg:w-full h-[200px] lg:h-[400px] rounded-t-[10px]"
                          />
                        </div>
                        <div className="w-fit lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              {user.data.avatar ? (
                                <img
                                  src={user?.data?.avatar}
                                  className="w-full h-full object-cover rounded-full"
                                  alt="Profile Pic"
                                />
                              ) : (
                                <h1 className="font-bold text-[40px]">
                                  {user?.data?.customName
                                    ?.charAt(0)
                                    .toUpperCase()}{" "}
                                </h1>
                              )}
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.data.customName}
                          </h1>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Car Name:{user.data.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.data.model}
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
                                    {user.data.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.data.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Destination</h1>
                                  <h1 className="font-semibold">
                                    {user.data.destination}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Message</h1>
                                  <h1 className="font-semibold">
                                    {user.data.message}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.data.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">
                                    {user.data.item}
                                  </h1>
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
                                    user.data.status === "Pending" &&
                                    "text-green"
                                  }`}
                                >
                                  {user.data.status}
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

export const StatusOfBook = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const status = location?.state?.status;

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get(
            `https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/${status}`,
            {
              withCredentials: true,
            }
          )
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
                    <h1
                      className={`text-white font-bold ${
                        toggle ? "text-[20px]" : "text-[30px] "
                      }`}
                    >
                      Status {status}
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/LandingBookStatus">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditBookStatus" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full h-full">
                          <img
                            src={user.data.url}
                            alt=""
                            className="w-full  h-[200px] lg:h-[400px] rounded-t-[10px]"
                          />
                        </div>
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              {user.data.avatar ? (
                                <img
                                  src={user?.data?.avatar}
                                  className="w-full h-full object-cover rounded-full"
                                  alt="Profile Pic"
                                />
                              ) : (
                                <h1 className="font-bold text-[40px]">
                                  {user?.data?.customName
                                    ?.charAt(0)
                                    .toUpperCase()}{" "}
                                </h1>
                              )}
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user?.data?.customName} Car Name:
                            {user?.data.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user?.data?.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            Booked At:{" "}
                            {new Date(user?.createdAt).toLocaleString("en-GB")}{" "}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            Appointed time:{" "}
                            {new Date(user.data?.date).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user?.data?.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user?.data?.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user?.data?.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">
                                    {user?.data?.item}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Destination</h1>
                                  <h1 className="font-semibold">
                                    {user?.data?.destination}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Message</h1>
                                  <h1 className="font-semibold">
                                    {user?.data?.message}
                                  </h1>
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
                                    user?.data?.status === "Pending" &&
                                    "text-green"
                                  }`}
                                >
                                  {user?.data?.status}
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

export const AllBookStatus = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        await axios
          .get(
            "https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook",
            {
              withCredentials: true,
            }
          )
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
                    <h1
                      className={`text-white font-bold ${
                        toggle ? "text-[20px]" : "text-[30px]"
                      }`}
                    >
                      Status All
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/LandingBookStatus">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="/EditBookStatus" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full h-full">
                          <img
                            src={user.data.url}
                            alt=""
                            className="w-full  h-[200px] lg:h-[400px] rounded-t-[10px]"
                          />
                        </div>
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              {user.data.avatar ? (
                                <img
                                  src={user?.data?.avatar}
                                  className="w-full h-full object-cover rounded-full"
                                  alt="Profile Pic"
                                />
                              ) : (
                                <h1 className="font-bold text-[40px]">
                                  {user?.data?.customName
                                    ?.charAt(0)
                                    .toUpperCase()}{" "}
                                </h1>
                              )}
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.data.customName} Car Name:
                            {user.data.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.data.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            Booked At:{" "}
                            {new Date(user.createdAt).toLocaleString("en-GB")}{" "}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            Appointed time:{" "}
                            {new Date(user.data.date).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.data.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.data.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.data.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">
                                    {user.data.item}
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row gap-1">
                              <div className="w-full h-15">
                                <h1 className="text-gray-400">Destination</h1>
                                <h1 className="font-semibold">
                                  {user.data.destination}
                                </h1>
                              </div>
                              <div className="w-full h-15">
                                <h1 className="text-gray-400">Message</h1>
                                <h1 className="font-semibold">
                                  {user.data.message}
                                </h1>
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
                                    user.data.status === "Pending" &&
                                    "text-green"
                                  }`}
                                >
                                  {user.data.status}
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

export const SubBookStatus = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function load() {
      try {
        await axios
          .get(
            "https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBookUser",
            {
              withCredentials: true,
            }
          )
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
          <SubSideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <SubHeader toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1
                      className={`text-white font-bold ${
                        toggle ? "text-[20px]" : "text-[30px]"
                      }`}
                    >
                      One Day Booking!
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="" state={{ user }}>
                      <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                        <div className="w-full h-full">
                          <img
                            src={user.data.url}
                            alt=""
                            className="w-full  h-[200px] lg:h-[400px] rounded-t-[10px]"
                          />
                        </div>
                        <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                          <div className="relative">
                            <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                              {user.data.avatar ? (
                                <img
                                  src={user?.data?.avatar}
                                  className="w-full h-full object-cover rounded-full"
                                  alt="Profile Pic"
                                />
                              ) : (
                                <h1 className="font-bold text-[40px]">
                                  {user?.data?.customName
                                    ?.charAt(0)
                                    .toUpperCase()}{" "}
                                </h1>
                              )}
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                          </div>
                          <h1 className="mt-2 text-2xl text-white text-center font-bold">
                            Customer:{user.data.customName} Car Name:
                            {user.data.ownerName}
                          </h1>
                          <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                            Model:{user.data.model}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            Booked At:{" "}
                            {new Date(user.data.createdAt).toLocaleString(
                              "en-GB"
                            )}{" "}
                          </h1>
                          <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                            Appointed time:{" "}
                            {new Date(user.data.date).toLocaleString("en-GB")}
                          </h1>
                        </div>
                        <div className="w-full h-full py-5 px-5 bg-gray-800">
                          <div className="w-full h-full">
                            <div className="border-b-2 pb-2 border-gray-400">
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Email</h1>
                                  <h1 className="font-semibold">
                                    {user.data.email}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Phone</h1>
                                  <h1 className="font-semibold">
                                    {user.data.phone}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Price</h1>
                                  <h1 className="font-semibold">
                                    {user.data.price}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Car type</h1>
                                  <h1 className="font-semibold">
                                    {user.data.item}
                                  </h1>
                                </div>
                              </div>
                              <div className="w-full flex flex-col lg:flex-row gap-1">
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Destination</h1>
                                  <h1 className="font-semibold">
                                    {user.data.destination}
                                  </h1>
                                </div>
                                <div className="w-full h-15">
                                  <h1 className="text-gray-400">Message</h1>
                                  <h1 className="font-semibold">
                                    {user.data.message}
                                  </h1>
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
                                    user.data.status === "Pending" &&
                                    "text-green"
                                  }`}
                                >
                                  {user.data.status}
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

export const UserBookStatus = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function load() {
      try {
        await axios
          .get(
            "https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBookUser",
            {
              withCredentials: true,
            }
          )
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
          <UserSideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <UserHeader toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1
                      className={`text-white font-bold ${
                        toggle ? "text-[13px]" : "text-[30px]"
                      }`}
                    >
                      One Day Booking!
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                {isLoading && <h1>Loading...</h1>}
                {(data &&
                  data.map((user) => (
                    <Link to="" state={{ user }}>
                      <div className="w-full h-auto mt-4 lg:mt-8 p-5 bg-white/10 backdrop-blur-[10px] rounded-2xl">
                        <div className="w-full h-full">
                          <img
                            src={user.data.url}
                            alt=""
                            className="w-full  h-[200px] lg:h-[400px] rounded-t-[10px]"
                          />
                        </div>
                        <div className="w-full h-auto flex flex-col lg:flex-row justify-between">
                          <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 lg:pr-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                            <div className="relative">
                              <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                                {user.data.avatar ? (
                                  <img
                                    src={user?.data?.avatar}
                                    className="w-full h-full object-cover rounded-full"
                                    alt="Profile Pic"
                                  />
                                ) : (
                                  <h1 className="font-bold text-[40px]">
                                    {user?.data?.customName
                                      ?.charAt(0)
                                      .toUpperCase()}{" "}
                                  </h1>
                                )}
                              </div>
                              <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                            </div>
                            <h1 className="mt-2 text-[18px] lg:text-2xl text-white text-center font-bold">
                              Customer:{user.data.customName}
                            </h1>
                            <h1 className="mt-2 text-[18px] lg:text-2xl text-white text-center font-bold">
                              Car Name:{user.data.ownerName}
                            </h1>
                            <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                              Model:{user.data.model}
                            </h1>
                            <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                              Booked At:{" "}
                              {new Date(user.createdAt).toLocaleString("en-GB")}{" "}
                            </h1>
                            <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                              Appointed time:{" "}
                              {new Date(user.data.date).toLocaleString("en-GB")}
                            </h1>
                          </div>
                          <div className="w-full h-full py-5 px-5">
                            <div className="w-full h-full">
                              <div className="border-b-2 pb-2 border-gray-400">
                                <div className="w-full flex flex-col lg:flex-row gap-1">
                                  <div className="w-full h-15">
                                    <h1 className="text-gray-400">Email</h1>
                                    <h1 className="font-semibold">
                                      {user.data.email}
                                    </h1>
                                  </div>
                                  <div className="w-full h-15">
                                    <h1 className="text-gray-400">Phone</h1>
                                    <h1 className="font-semibold">
                                      {user.data.phone}
                                    </h1>
                                  </div>
                                </div>
                                <div className="w-full flex flex-col lg:flex-row gap-1">
                                  <div className="w-full h-15">
                                    <h1 className="text-gray-400">
                                      Destination
                                    </h1>
                                    <h1 className="font-semibold">
                                      {user.data.destination}
                                    </h1>
                                  </div>
                                  <div className="w-full h-15">
                                    <h1 className="text-gray-400">Message</h1>
                                    <h1 className="font-semibold">
                                      {user.data.message}
                                    </h1>
                                  </div>
                                </div>
                                <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                                  <div className="w-full h-15">
                                    <h1 className="text-gray-400">Price</h1>
                                    <h1 className="font-semibold">
                                      {user.data.price}
                                    </h1>
                                  </div>
                                  <div className="w-full h-15">
                                    <h1 className="text-gray-400">Car type</h1>
                                    <h1 className="font-semibold capitalize">
                                      {user.data.item}
                                    </h1>
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
                                      user.data.status === "Pending" &&
                                      "text-green"
                                    }`}
                                  >
                                    {user.data.status}
                                  </h1>
                                </div>
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

export const EditBookStatus = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const user = location?.state?.user;
  const navigate = useNavigate();

  const [stat, setStat] = useState(null);

  async function handleDelete(id) {
    try {
      await axios.delete(
        `https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/${id}`,
        {
          withCredentials: true,
        }
      );
      alert("Successfully Deleted!");
      navigate("/LandingBookStatus");
    } catch (error) {
      alert("Not Deleted Try Again!");
      console.log(error);
    }
  }

  async function handleStatus(id) {
    try {
      await axios.patch(
        `https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook/${id}`,
        {
          stat,
        },
        { withCredentials: true }
      );
      alert(`Successfully Change Status to ${stat}!`);
      navigate("/LandingBookStatus");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-full flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`w-fit h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1
                      className={`text-white font-bold ${
                        toggle ? "text-[20px]" : "text-[30px]"
                      }`}
                    >
                      Edit Bookings
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <Link to="/LandingDemoDb">
                      <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                        Edit Demo
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                  <div className="w-full h-full">
                    <img
                      src={user.data.url}
                      alt=""
                      className="w-auto h-[200px] lg:h-[400px] rounded-t-[10px]"
                    />
                  </div>
                  <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                    <div className="relative">
                      <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                        {user.data.avatar ? (
                          <img
                            src={user?.data?.avatar}
                            className="w-full h-full object-cover rounded-full"
                            alt="Profile Pic"
                          />
                        ) : (
                          <h1 className="font-bold text-[40px]">
                            {user?.data?.customName?.charAt(0).toUpperCase()}{" "}
                          </h1>
                        )}
                      </div>
                      <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h1 className="mt-2 text-2xl text-white text-center font-bold">
                        Customer:{user?.data?.customName}
                      </h1>
                      <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                        {user.data.model}
                      </h1>
                      <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                        Booked At:{" "}
                        {new Date(user.createdAt).toLocaleString("en-GB")}{" "}
                      </h1>
                      <h1 className="text-[13px] text-gray-400 text-center font-semibold">
                        Appointed time:{" "}
                        {new Date(user.data.date).toLocaleString("en-GB")}
                      </h1>
                      <a
                        href={user.transactionId}
                        className="text-[13px] text-blue-400 text-center font-semibold"
                      >
                        Transaction Link: {user.transactionId}
                      </a>
                    </div>
                  </div>
                  <div className="w-full h-full py-5 px-5 bg-gray-800">
                    <div className="w-full h-full">
                      <div className="border-b-2 pb-2 border-gray-400">
                        <div className="w-full flex flex-col lg:flex-row gap-1">
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Email</h1>
                            <h1 className="font-semibold">{user.data.email}</h1>
                          </div>
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Phone</h1>
                            <h1 className="font-semibold">{user.data.phone}</h1>
                          </div>
                        </div>
                        <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Price</h1>
                            <h1 className="font-semibold">{user.data.price}</h1>
                          </div>
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Car type</h1>
                            <h1 className="font-semibold">{user.data.item}</h1>
                          </div>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row gap-1">
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Destination</h1>
                            <h1 className="font-semibold">
                              {user.data.destination}
                            </h1>
                          </div>
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Message</h1>
                            <h1 className="font-semibold">
                              {user.data.message}
                            </h1>
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
                          <h1 className="">{user.data.status}</h1>
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
                          <div
                            className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 flex justify-center items-center rounded-[10px]"
                            onClick={() => handleStatus(user._id)}
                          >
                            <i class="fa fa-edit w-fit text-white hover:text-green-700 transition duration-300 !text-[25px] lg:!text-[30px] cursor-pointer"></i>
                          </div>
                          <div
                            className="w-8 h-8 lg:w-10 lg:h-10 bg-red-100 flex justify-center items-center rounded-[10px]"
                            onClick={() => handleDelete(user._id)}
                          >
                            <i class="fa fa-trash w-fit text-red-500 hover:text-red-700 transition duration-300 !text-[25px] lg:!text-[30px] cursor-pointer"></i>
                          </div>
                          <h1 className="">{user.data.status}</h1>
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

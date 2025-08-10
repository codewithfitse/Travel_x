import { useEffect } from "react";
import { useState } from "react";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Render = import.meta.env.VITE_BACKEND_URL;

export const ContactDb = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function load() {
      try {
        await axios
          .get("https://travel-x-408k.onrender.com/dashboard/contact")
          .then((result) => {
            console.log(result.data);
            setData(result.data);
            //console.log(data);
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
        <div className="w-full h-full flex bg-[#020817] text-white">
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
                      Users Contacts
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Contacts
                    </button>
                  </div>
                </div>

                {data.map((user, index) => (
                  <Link to="/EditContactDb" state={{ user }}>
                    <div
                      key={index}
                      className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl"
                    >
                      <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                        <div className="relative">
                          <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                            <h1 className="font-bold text-[40px]">
                              {user.firstName?.charAt(0).toUpperCase()}{" "}
                              {user.lastName?.charAt(0).toUpperCase()}
                            </h1>
                          </div>
                          <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                        </div>
                        <h1 className="mt-2 text-2xl text-white text-center capitalize font-bold">
                          {user.firstName} {user.lastName}
                        </h1>
                        <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                          {user.isAdmin === true ? "Admin" : "User"}
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
                                <h1 className="text-gray-400 capitalize">
                                  Name
                                </h1>
                                <h1 className="font-semibold capitalize">
                                  {user.firstName}
                                </h1>
                              </div>
                              <div className="w-full h-15">
                                <h1 className="text-gray-400">Email</h1>
                                <h1 className="font-semibold">{user.email}</h1>
                              </div>
                            </div>
                            <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                              <div className="w-full h-15">
                                <h1 className="text-gray-400">Phone</h1>
                                <h1 className="font-semibold">{user.phone}</h1>
                              </div>
                              {/* <div className="w-full h-15">
                              <h1 className="text-gray-400">Car type</h1>
                              <h1 className="font-semibold">Suv</h1>
                            </div> */}
                            </div>
                          </div>
                          <div className="w-full h-fit py-2 flex flex-col space-y-3">
                            <div className="w-fit h-full py-1">
                              <h1 className="text-[20px] text-gray-300 font-bold">
                                Message
                              </h1>
                            </div>
                            <div className="w-full h-fit flex gap-3">
                              <h1 className="">{user.message}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const EditContactDb = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const {
    firstName,
    lastName,
    _id,
    createdAt,
    email,
    phone,
    isAdmin,
    message,
  } = location?.state?.user;
  const navigate = useNavigate();

  async function handleDelete(_id) {
    try {
      const res = await axios.delete(
        `https://travel-x-408k.onrender.com/dashboard/contact/${_id}`
      );
      alert("Successfully Deleted!");
      navigate("/ContactDb");
    } catch (error) {
      alert("Not Deleted Try Again!");
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
                className={`h-full lg:px-30 bg-gray-900 transition-all duration-300 ease-in-out ${
                  toggle ? "w-auto ml-22 p-3" : "p-5 "
                }`}
              >
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Users Contacts
                    </h1>
                  </div>
                  <div className="w-fit h-full">
                    <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Contacts
                    </button>
                  </div>
                </div>

                <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                  <div className="w-full lg:w-[300px] h-auto flex flex-col items-center py-5 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-600 relative">
                    <div className="relative">
                      <div className="w-30 h-30 flex justify-center items-center bg-amber-900 border-4 border-gray-600 rounded-full">
                        <h1 className="font-bold text-[40px]">
                          {firstName?.charAt(0).toUpperCase()}{" "}
                          {lastName?.charAt(0).toUpperCase()}
                        </h1>
                      </div>
                      <div
                        className="w-8 h-8 lg:w-10 lg:h-10 bg-red-100 flex justify-center items-center rounded-[10px] absolute -top-7 -left-15  sm:-top-7 sm:-left-40 md:-top-7 md:-left-60 lg:-top-7 lg:-left-12"
                        onClick={() => handleDelete(_id)}
                      >
                        <i class="fa fa-trash w-fit text-red-500 hover:text-red-700 transition duration-300 !text-[25px] lg:!text-[30px] cursor-pointer"></i>
                      </div>
                      <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 -right-1"></div>
                    </div>
                    <h1 className="mt-2 text-2xl text-white text-center capitalize font-bold">
                      {firstName} {lastName}
                    </h1>
                    <h1 className="text-[18px] text-blue-400 text-center font-semibold">
                      {isAdmin === true ? "Admin" : "User"}
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
                            <h1 className="text-gray-400 capitalize">Name</h1>
                            <h1 className="font-semibold capitalize">
                              {firstName}
                            </h1>
                          </div>
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Email</h1>
                            <h1 className="font-semibold">{email}</h1>
                          </div>
                        </div>
                        <div className="w-full mt-1 flex flex-col lg:flex-row gap-1">
                          <div className="w-full h-15">
                            <h1 className="text-gray-400">Phone</h1>
                            <h1 className="font-semibold">{phone}</h1>
                          </div>
                          {/* <div className="w-full h-15">
                              <h1 className="text-gray-400">Car type</h1>
                              <h1 className="font-semibold">Suv</h1>
                            </div> */}
                        </div>
                      </div>
                      <div className="w-full h-fit py-2 flex flex-col space-y-3">
                        <div className="w-fit h-full py-1">
                          <h1 className="text-[20px] text-gray-300 font-bold">
                            Message
                          </h1>
                        </div>
                        <div className="w-full h-fit flex gap-3">
                          <h1 className="">{message}</h1>
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

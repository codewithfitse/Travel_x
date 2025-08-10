import { Link } from "react-router-dom";
import { Header, SideBar } from "../dashboard/component";
import axios from "axios";
import { useEffect, useState } from "react";
const Render = import.meta.env.VITE_BACKEND_URL;

const UserDb = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    async function loadData() {
      //setIsLoading(true);
      axios
        .get(`${Render}/dashboard/user`)
        .then((result) => {
          console.log(result);
          setData(result.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
    loadData();
  }, []);

  useEffect(() => {
    try {
      async function loadData() {
        //setIsLoading(true);
        axios
          .get("https://travel-x-408k.onrender.com/dashboard/userGoogle")
          .then((result) => {
            console.log(result);
            setData1(result.data);
          })
          .catch((err) => console.log(err));
      }
      loadData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <section className="min-h-screen overflow-x-hidden">
      <div className="w-full h-screen flex bg-[#020817] text-white">
        <SideBar />
        <div className="ml-14 flex flex-col flex-1">
          <Header />
          <main className="pt-20 p-5 bg-transparent">
            <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
              <div className="w-full h-fit flex justify-between items-center">
                <div className="w-fit h-full py-1">
                  <h1 className="text-[30px] text-white font-bold">
                    Users Data
                  </h1>
                </div>
                <div className="w-fit h-full">
                  {/* <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                      Edit Profile
                    </button> */}
                </div>
              </div>
              {isLoading ? (
                <h1 className="text-[30px]">Loading...</h1>
              ) : (
                <div className="">
                  {data.map((user) => (
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="w-full text-[30px] font-bold">
                          {user.firstName} {user.lastName}
                        </h1>
                        <div className="w-fit flex space-x-3 lg:space-x-7 items-center">
                          <Link to="/View" state={{ user }}>
                            <i class="fas fa-eye w-7 !text-[25px] lg:!text-[30px]"></i>
                          </Link>
                          <Link to="/Edit" state={{ user }}>
                            <i class="fas fa-edit w-7 !text-[25px] lg:!text-[30px]"></i>
                          </Link>
                          <Link to="/Delete" state={{ user }}>
                            <i class="fa fa-trash w-7 !text-[25px] lg:!text-[30px]"></i>{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {isLoading ? (
                <h1 className="text-[30px]">Loading...</h1>
              ) : (
                <div className="">
                  {data1.map((user) => (
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="w-full text-[30px] font-bold">
                          {user?.name}
                        </h1>
                        <div className="w-fit flex space-x-3 lg:space-x-7 items-center">
                          <Link to="/View" state={{ user }}>
                            <i class="fas fa-eye w-7 !text-[25px] lg:!text-[30px]"></i>
                          </Link>
                          <Link to="/Edit" state={{ user }}>
                            <i class="fas fa-edit w-7 !text-[25px] lg:!text-[30px]"></i>
                          </Link>
                          <Link to="/Delete" state={{ user }}>
                            <i class="fa fa-trash w-7 !text-[25px] lg:!text-[30px]"></i>{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
export default UserDb;

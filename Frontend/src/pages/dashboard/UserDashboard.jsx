import { useState, useEffect } from "react";
import { UserHeader, UserSideBar } from "../dashboard/component";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LiveChat from "../../components/LiveChat";
const Render = import.meta.env.VITE_BACKEND_URL;

const UserDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await axios.get(`${Render}/profile`, {
          withCredentials: true,
        });
        if (res.data.user.isAdmin) {
          navigate("/Admin");
        } else if (res.data.user.isSubAdmin) {
          navigate("/SubAdmin");
        } else {
          navigate("/UserDashboard");
        }
        console.log(res.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/Login");
      } finally {
        setIsLoading(false);
      }
    }

    loadProfile();
  }, [navigate]);
  return (
    <>
      <section className="min-h-full overflow-x-hidden">
        <LiveChat />
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <UserSideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <UserHeader toggle={toggle} setToggle={setToggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 ${
                  toggle
                    ? "w-auto ml-22 p-3 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                    : " p-5 text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
                }`}
              >
                <div
                  className={`h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                    toggle
                      ? "w-auto text-[200px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                      : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                  }`}
                >
                  <div className="w-full px-5 flex justify-between items-center">
                    <h1
                      className={`font-bold transition-all duration-300 ease-in-out text-white ${
                        toggle
                          ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                          : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                      }`}
                    >
                      Bookings
                    </h1>
                  </div>
                </div>

                {isLoading ? (
                  <p className="text-[20px] lg:text-[30px] text-white">
                    Loading...
                  </p>
                ) : (
                  <Link to="/UserBookStatus">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">One Booking</h1>
                        <i className="fa fa-group w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;

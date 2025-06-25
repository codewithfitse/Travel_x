import { UserHeader, UserSideBar } from "../dashboard/component";
import { Link } from "react-router-dom";
//import { Button } from "../../components/Button";

const UserDashboard = () => {
  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <UserSideBar />
          <div className="ml-14 flex flex-col flex-1">
            <UserHeader />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-30 bg-gray-900">
                <div className="w-full h-fit flex justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      DataBase
                    </h1>
                  </div>
                  <div className="w-fit h-full"></div>
                </div>

                <Link to="/UserDemoDb">
                  <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                    <div className="w-full px-5 flex justify-between items-center">
                      <h1 className="text-[30px] font-bold">One Booking</h1>
                      <i className="fa fa-group w-2 !text-[30px]"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;

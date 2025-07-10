import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Header, SideBar } from "./component";

const ViewDashboard = () => {
  const location = useLocation();
  const user = location.state?.user;

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
                    View Users Data
                  </h1>
                </div>
                <div className="w-fit h-full">
                  {/* <button className="px-3 py-2 text-white font-semibold rounded-[10px] bg-blue-500">
                          Edit Profile
                        </button> */}
                </div>
              </div>

              <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                <div className="w-full px-5 flex">
                  <div className="W-full">
                    <h1 className="font-bold capitalize">
                      ObjectId:{" "}
                      <span className="font-semibold">{user._id}</span>
                    </h1>
                    <h1 className="font-bold capitalize">
                      Name:{" "}
                      <span className="font-semibold">
                        {user.firstName} {user.lastName} {user?.name}
                      </span>
                    </h1>
                    <h1 className="font-bold capitalize">
                      Email: <span className="font-semibold">{user.email}</span>{" "}
                    </h1>
                    <h1 className="font-bold capitalize">
                      Phone: <span className="font-semibold">{user.phone}</span>{" "}
                    </h1>
                    <h1 className="font-bold capitalize">
                      Password:{" "}
                      <span className="font-semibold">{user.password}</span>{" "}
                    </h1>
                    <h1 className="font-bold capitalize">
                      {user.isAdmin === true ? "Admin" : "User"}:{" "}
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
                  <div className="">
                    <Link
                      to="/UserDb"
                      state={{ user }}
                      className="ml-2 text-blue-400 hover:underline"
                    >
                      <i class="fas fa-hand-point-left text-white text-[36px]"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ViewDashboard;

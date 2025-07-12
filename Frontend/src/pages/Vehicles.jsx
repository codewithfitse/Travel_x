import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/Button";
import axios from "axios";
import SkeletonImage from "../components/Skeleton";
import LiveChat from "../components/LiveChat";
const Render = import.meta.env.VITE_BACKEND_URL;

const Vehicles = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-lum ">Our</span> Cars
        </h1>
      </div>

      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        <Link to="/VehiclesTypes" state={{ type: "suv" }}>
          <div className="w-full h-auto py-5 card">
            <SkeletonImage
              isLoading={isLoading}
              src="economy2.png"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px] rounded-[10px]"
            />
            <div className="w-full pl-5">
              <h1 className="text-[40px] text-lum font-bold">Economy</h1>
              <h2>Starting $60</h2>
              <h2>Toyota VITZ or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 4 Person Seat</li>
                <li>° Automatic</li>
                <li>° Perfect for in city</li>
                <li>° Pick up at airport</li>
              </ul>
            </div>
          </div>
        </Link>

        <Link to="/VehiclesTypes" state={{ type: "suv" }}>
          <div className="w-full py-5 card">
            <SkeletonImage
              isLoading={isLoading}
              src="standard.png"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px] rounded-[20px]"
            />
            <div className="pl-5">
              <h1 className="text-[40px] text-lum font-bold">Standard</h1>
              <h2>Starting $60</h2>
              <h2>Toyota VITZ or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 4 Person Seat</li>
                <li>° Automatic</li>
                <li>° Perfect for in city</li>
                <li>° Pick up at airport</li>
              </ul>
            </div>
          </div>
        </Link>
        <Link to="/VehiclesTypes" state={{ type: "midsuv" }}>
          <div className="w-full py-5 card">
            <SkeletonImage
              isLoading={isLoading}
              src="midsizesuv.png"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px] rounded-[10px]"
            />
            <div className="pl-5">
              <h1 className="text-[40px] text-lum font-bold">Mid Suv</h1>
              <h2>Starting 1,400,000 - 5,500,000Br</h2>
              <h2>Hyundai Tucson or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 5 to 7 Person Seat</li>
                <li>° Automatic and Manual</li>
                <li>° Perfect for in Family + City</li>
                <li>° Pick up at airport</li>
              </ul>
            </div>
          </div>
        </Link>
        <Link to="/VehiclesTypes" state={{ type: "fullsuv" }}>
          <div className="w-full py-5 card">
            <SkeletonImage
              isLoading={isLoading}
              src="fullsuv.png"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px] rounded-[10px]"
            />
            <div className="pl-5">
              <h1 className="text-[40px] text-lum font-bold">Full Suv</h1>
              <h2>Starting 1,200,000 - 37,000,000Br</h2>
              <h2>Jetour X70 or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 7 to 8 Person Seat</li>
                <li>° Automatic and Manual </li>
                <li>° Perfect for in city, More Cargo</li>
                <li>° Pick up at airport</li>
              </ul>
            </div>
          </div>
        </Link>
        <Link to="/VehiclesTypes" state={{ type: "minivan" }}>
          <div className="w-full py-5 card">
            <SkeletonImage
              isLoading={isLoading}
              src="minivan.png"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px]rounded-[10px]"
            />
            <div className="pl-5">
              <h1 className="text-[40px] text-lum font-bold">Mini Van</h1>
              <h2>Starting 900,000 to 7,250,000Br</h2>
              <h2>Toyota Hiace or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 10 to 15 Person Seat</li>
                <li>° Automatic And Manual</li>
                <li>° Perfect for Trip + Cargo Palace</li>
                <li>° Pick up at airport </li>
              </ul>
            </div>
          </div>
        </Link>
        <Link to="/VehiclesTypes" state={{ type: "pickup" }}>
          <div className="w-full py-8 card">
            <SkeletonImage
              isLoading={isLoading}
              src="pickup.png"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px] rounded-[10px]"
            />
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Pick Up</h1>
              <h2>Starting 1,200,000 to 9,000,000Br</h2>
              <h2>Toyota Revo or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 2 to 5 Person Seat</li>
                <li>° Automatic And Manual</li>
                <li>° Perfect for Heavy Duty + Utility</li>
                <li>° Pick up at airport</li>
              </ul>
            </div>
          </div>
        </Link>

        <Link to="/OneDayVehicles">
          <div className="w-full py-8 card" key="user._id">
            <SkeletonImage
              isLoading={isLoading}
              src="send.jpg"
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px] rounded-[10px]"
            />
            <div className="pl-5">
              <h1 className="text-[40px] text-lum font-bold">
                One Day with Driver!
              </h1>
              <h2>Starting 2200Br - 5000Br</h2>
              <h2>Toyota VITZ or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 4 Person Seat</li>
                <li>° Automatic</li>
                <li>° Perfect for in city</li>
                <li>° Pick up at airport</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-lum">SERVICES</span>
          </h1>
          <h2 className="text-[10px] lg:text-[20px] text-2xl">
            We Always Have The Best Customer Services In Town
          </h2>
        </div>
        <div className="lg:mt-7 flex justify-center items-center">
          <Link to={"/Booking"}>
            <Button text={"Book Now!"} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vehicles;

export const VehiclesTypes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const location = useLocation();
  const type = location?.state?.type;

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${Render}/uploads/type/${type}`);
      setImages(res.data);
    } catch (err) {
      console.error("Fetching images failed:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-lum ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {images.map((img) => (
          <div key={img._id} className="w-full py-5 card">
            <SkeletonImage
              isLoading={isLoading}
              src={img.url}
              alt={img.filename}
              imgClass="w-full h-auto rounded-[20px]"
              skeletonClass="w-[400px] h-[300px] rounded-[10px]"
            />
            <div className="pl-5">
              <h1 className="text-[40px] text-lum font-bold capitalize">
                {img.name}
              </h1>
              <h2>Starting ${img.price}</h2>
              <h2>Toyota VITZ or Similar</h2>
              <h2>Vehicle Feature {img.item}</h2>
              <ul>
                <li>° 4 Person Seat</li>
                <li>° Automatic</li>
                <li>° Perfect for in city</li>
                <li>° Pick up at airport</li>
              </ul>
              <Link to="/Home">Home</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-lum">SERVICES</span>
          </h1>
          <h2 className="text-[10px] lg:text-[20px] text-2xl">
            We Always Have The Best Customer Services In Town
          </h2>
        </div>
        <div className="lg:mt-7 flex justify-center items-center">
          <Link to={"/Booking"}>
            <Button text={"Book Now!"} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const OneDayVehicles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  ///const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${Render}/uploads/Ones`, {
          withCredentials: true,
        });
        setData(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full min-h-screen background text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-lum">Our</span> Cars
        </h1>
      </div>

      <div className="w-full h-[50px] lg:mt-10 pl-5 flex">
        <div className="w-full h-full flex space-x-2">
          <input
            type="text"
            value={search}
            className="w-full h-full p-2 bg-amber-50 text-black rounded-2xl placeholder:text-amber-800"
            placeholder="Search Your Type!"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className=" w-fit h-full p-2 rounded-2xl font-bold bg-lum">
            Search
          </button>
        </div>

        <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 gap-3 place-items-center">
          <Link to={"/Pricing"} state={{ price: "3k" }}>
            <div className="w-full px-3 py-2 bg-gray-900 rounded-2xl">
              <h1 className="text-[15px] lg:text-[30px]">3K - 4K</h1>
            </div>
          </Link>
          <Link to={"/Pricing"} state={{ price: "5k" }}>
            <div className="w-fit px-3 py-2 bg-gray-900 rounded-2xl">
              <h1 className="text-[15px] lg:text-[30px]">5K - 6K</h1>
            </div>
          </Link>
          <Link to={"/Pricing"} state={{ price: "7k" }}>
            <div className="w-fit px-3 py-2 bg-gray-900 rounded-2xl">
              <h1 className="text-[15px] lg:text-[30px]">7K - 8K</h1>
            </div>
          </Link>
          <Link to={"/Pricing"} state={{ price: "9k" }}>
            <div className="w-fit px-3 py-2 bg-gray-900 rounded-2xl">
              <h1 className="text-[15px] lg:text-[30px]">+9K</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="pt-10 px-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data
          .filter((img) => {
            return (
              (search && search === "" && img) || img.name.includes(search)
              // img.price.includes(search) ||
              // img.model.includes(search) ||
              // img.item.includes(search)
            );
          })
          .map((img) => (
            <div
              key={img._id}
              className="w-full h-fit max-w-[500px] mx-auto text-white rounded-lg shadow-md overflow-hidden card"
            >
              <SkeletonImage
                isLoading={isLoading}
                src={img.url}
                alt={img.filename}
                imgClass="w-full h-[400px] object-cover rounded-[10px]"
                skeletonClass="w-full h-[250px] rounded-[10px] "
              />

              <div className="p-4 space-y-1">
                <h1 className="text-2xl font-bold text-lum capitalize">
                  {img.name}
                </h1>
                <h2 className="text-sm">Starting {img.price} Br</h2>
                <h2 className="text-sm text-gray-200">
                  {img.model} or Similar
                </h2>
                <h2 className="text-sm font-semibold">
                  Vehicle Feature: {img.item}
                </h2>
                <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
                  <li>4 Person Seat</li>
                  <li>Automatic</li>
                  <li>Perfect for in city</li>
                  <li>Pick up at airport</li>
                </ul>
                {img.quantity <= 0 ? (
                  <div className="w-fit mt-3 py-2 px-4 border-4 border-red-600 rounded-[10px]">
                    <h1 className="text-red-600 text-[30px] font-bold">
                      Sold Out
                    </h1>
                  </div>
                ) : (
                  <div className="mt-3">
                    <div className="w-fit py-2 px-4 border-4 border-green-600 rounded-[10px]">
                      <h1 className="text-green-600 text-[30px]">
                        Available now: {img.quantity}
                      </h1>
                    </div>
                    <Link
                      to="/OneDayVehiclesBook"
                      state={{ img }}
                      className="block mt-4"
                    >
                      <Button text={"Book Now!"} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      <div className="my-16 lg:my-40 px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="text-center lg:text-left">
          <h1 className="text-xl lg:text-4xl font-bold">
            COME & TRY OUR <span className="text-lum">SERVICES</span>
          </h1>
          <h2 className="text-sm lg:text-xl">
            We Always Have The Best Customer Services In Town
          </h2>
        </div>
        <Link to="/Booking">
          <Button text={"Book Now!"} />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadings, setIsLoadings] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const Suv = "";
  const user = "";
  //const FullSuv = "";

  const price = location?.state?.price;

  async function handleBooking() {
    setIsLoadings(true);
    try {
      //alert("Successfully Booked!");
      navigate("/OneDayBook", { state: { bookingDetails: user } });
    } catch (error) {
      alert("You forgot to login bro");
      navigate("/Login");
      console.log(error);
    } finally {
      setIsLoadings(false);
    }
  }

  useEffect(() => {
    if (!price) {
      console.warn("🚨 Price is undefined. Skipping fetch.");
      return;
    }

    // Fetch images from backend
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${Render}/uploads/price/${price}`, {
          withCredentials: true,
        });
        console.log("✅ Received data:", res.data); // Debug
        setData(res.data);
      } catch (err) {
        console.error("❌ Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [price]); // ✅ Add 'price' here

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-lum ">Our</span> Cars
        </h1>
      </div>

      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {data.map((user) => (
          <Link to="/SuvVehicles" state={{ Suv }}>
            <div id={user?.id} className="w-full h-auto py-5 card">
              <SkeletonImage
                isLoading={isLoading}
                src={user?.url}
                alt={user?.filename}
                imgClass="w-full h-auto rounded-[20px]"
                skeletonClass="w-[400px] h-[300px] bg-gray-300 rounded-[10px] animate-pulse"
              />
              <div className="w-full pl-5">
                <h1 className="text-[40px] text-lum font-bold">{user?.name}</h1>
                <h2>Starting {user?.price}Br</h2>
                <h2>{user?.model} or Similar</h2>
                <h2>Vehicle Feature</h2>
                <ul>
                  <li>° 4 Person Seat</li>
                  <li>° Automatic</li>
                  <li>° Perfect for in city</li>
                  <li>° Pick up at airport</li>
                </ul>
                <div className="flex mt-3 lg:mt-5 space-x-5">
                  <button
                    className="w-fit h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg"
                    onClick={handleBooking}
                  >
                    {isLoadings ? "Ordering..." : "Order"}
                  </button>
                  <Link to="/Vehicles">
                    <button
                      className="w-fit h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] text-white font-bold bg-gradient-to-r from-red-500 to-red-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg"
                      onClick={handleBooking}
                    >
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-lum">SERVICES</span>
          </h1>
          <h2 className="text-[10px] lg:text-[20px] text-2xl">
            We Always Have The Best Customer Services In Town
          </h2>
        </div>
        <div className="lg:mt-7 flex justify-center items-center">
          <Link to={"/Booking"}>
            <Button text={"Book Now!"} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const OneDayVehiclesBook = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadings, setIsLoadings] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.img;

  async function handleBooking() {
    try {
      //alert("Successfully Booked!");
      navigate("/OneDayBook", { state: { bookingDetails: user } });
    } catch (error) {
      alert("You forgot to login bro");
      navigate("/Login");
      console.log(error);
    } finally {
      setIsLoadings(false);
    }
  }

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${Render}/uploads/one`, {
          withCredentials: true,
        });
        setData(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };

    fetchImages();
  }, [data]);

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <LiveChat />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold ">
          <span className="text-lum ">Our</span> Cars
        </h1>
      </div>

      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        <div key={user._id} className="w-full py-5 card">
          <SkeletonImage
            isLoading={isLoading}
            src={user.url}
            alt={user.filename}
            imgClass="w-full h-[400px] object-cover rounded-[10px]"
            skeletonClass="w-full h-[250px] rounded-[10px]"
          />
          <div className="pl-5">
            <h1 className="text-[40px] text-lum font-bold capitalize">
              {user.name}
            </h1>
            <h2>Starting ${user.price}</h2>
            <h2>{user.model} or Similar</h2>
            <h2>Vehicle Feature {user.item}</h2>
            <ul>
              <li>° 4 Person Seat</li>
              <li>° Automatic</li>
              <li>° Perfect for in city</li>
              <li>° Pick up at airport</li>
            </ul>
            <div className="flex mt-3 lg:mt-5 space-x-5">
              <button
                className="w-fit h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg"
                onClick={handleBooking}
              >
                {isLoadings ? "Ordering..." : "Order"}
              </button>
              <Link to="/Vehicles">
                <button
                  className="w-fit h-fit py-2 px-4 lg:py-2 lg:px-3 text-[17px] lg:text-[30px] text-white font-bold bg-gradient-to-r from-red-500 to-red-900 rounded-[10px] hover:shadow-emerald-500/80 hover:shadow-lg"
                  onClick={handleBooking}
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-lum">SERVICES</span>
          </h1>
          <h2 className="text-[10px] lg:text-[20px] text-2xl">
            We Always Have The Best Customer Services In Town
          </h2>
        </div>
        <div className="lg:mt-7 flex justify-center items-center">
          <Link to={"/Booking"}>
            <Button text={"Book Now!"} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/Button";
import axios from "axios";

const Vehicles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const Suv = "";
  const MidSuv = "";
  const FullSuv = "";

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://travel-x-408k.onrender.com/uploads/one",
          { withCredentials: true }
        );
        setData(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        <Link to="/SuvVehicles" state={{ Suv }}>
          <div className="w-full py-5 card">
            <div className="flex justify-center">
              <img src="economy2.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Economy</h1>
              <h2>Starting $60</h2>
              <h2>Toyota VITZ or Similar</h2>
              <h2>Vehicle Feature</h2>
              <ul>
                <li>° 4 Person Seat</li>
                <li>° Automatic</li>
                <li>° Perfect for in city</li>
                <li>° Pick up at airport</li>
              </ul>

              <Link to="/MidSuvVehicles" state={{ MidSuv }}>
                Mid Suv
              </Link>
              <Link to="/PickUpVehicles" state={{ FullSuv }}>
                Pick UP
              </Link>
            </div>
          </div>
        </Link>

        <Link to="/SuvVehicles" state={{ Suv }}>
          <div className="w-full py-5 card">
            <div className="flex justify-center">
              <img src="standard.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Standard</h1>
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
        <Link to="/MidSuvVehicles" state={{ Suv }}>
          <div className="w-full py-5 card">
            <div className="pt-4 flex justify-center">
              <img src="midsizesuv.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Mid Suv</h1>
              <h2>Starting $60</h2>
              <h2>Toyota Rav4 or Similar</h2>
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
        <Link to="/FullSuvVehicles" state={{ MidSuv }}>
          <div className="w-full py-5 card">
            <div className="pb-15 flex justify-center">
              <img src="chery-jetour.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Full Suv</h1>
              <h2>Starting $60</h2>
              <h2>Toyota VITZ or Similar</h2>
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
        <Link to="/MiniVanVehicles" state={{ Suv }}>
          <div className="w-full py-5 card">
            <div className="flex justify-center">
              <img src="minivan.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Mini Van</h1>
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
        <Link to="/PickUpVehicles" state={{ Suv }}>
          <div className="w-full py-8 card">
            <div className="pb-15 flex justify-center">
              <img src="pickup.png" alt="" srcset="" />
            </div>
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
            <div className="pb-15 flex justify-center">
              <img src="send.jpg" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">
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
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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

export const SuvVehicles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const Suv = "Suv";
  const MidSuv = "Suv";
  const FullSuv = "Suv";

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://travel-x-408k.onrender.com/uploads/suv"
      );
      setImages(res.data);
    } catch (err) {
      console.error("Fetching images failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {isLoading ? (
          <p className="text-[50px] font-bold">Loading..</p>
        ) : (
          images.map((img) => (
            <div key={img._id} className="w-full py-5 card">
              <div className="flex justify-center">
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="pl-5">
                <h1 className="text-[40px] text-[#16fe01] font-bold capitalize">
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
          ))
        )}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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

export const MidSuvVehicles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const Suv = "Suv";
  const MidSuv = "Suv";
  const FullSuv = "Suv";

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://travel-x-408k.onrender.com/uploads/midsuv"
      );
      setImages(res.data);
    } catch (err) {
      console.error("Fetching images failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {isLoading ? (
          <p className="text-[50px] font-bold">Loading..</p>
        ) : (
          images.map((img) => (
            <div key={img._id} className="w-full py-5 card">
              <div className="flex justify-center">
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="pl-5">
                <h1 className="text-[40px] text-[#16fe01] font-bold capitalize">
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
          ))
        )}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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

export const FullSuvVehicles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const Suv = "Suv";
  const MidSuv = "Suv";
  const FullSuv = "Suv";

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://travel-x-408k.onrender.com/uploads/fullsuv"
      );
      setImages(res.data);
    } catch (err) {
      console.error("Fetching images failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {isLoading ? (
          <p className="text-[50px] font-bold">Loading..</p>
        ) : (
          images.map((img) => (
            <div key={img._id} className="w-full py-5 card">
              <div className="flex justify-center">
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="pl-5">
                <h1 className="text-[40px] text-[#16fe01] font-bold capitalize">
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
          ))
        )}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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

export const MiniVanVehicles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const Suv = "Suv";
  const MidSuv = "Suv";
  const FullSuv = "Suv";

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://travel-x-408k.onrender.com/uploads/minivan"
      );
      setImages(res.data);
    } catch (err) {
      console.error("Fetching images failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {isLoading ? (
          <p className="text-[50px] font-bold">Loading..</p>
        ) : (
          images.map((img) => (
            <div key={img._id} className="w-full py-5 card">
              <div className="flex justify-center">
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="pl-5">
                <h1 className="text-[40px] text-[#16fe01] font-bold capitalize">
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
          ))
        )}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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

export const PickUpVehicles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const Suv = "Suv";
  const MidSuv = "Suv";
  const FullSuv = "Suv";

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://travel-x-408k.onrender.com/uploads/pickup"
      );
      setImages(res.data);
    } catch (err) {
      console.error("Fetching images failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {isLoading ? (
          <p className="text-[50px] font-bold">Loading..</p>
        ) : (
          images.map((img) => (
            <div key={img._id} className="w-full py-5 card">
              <div className="flex justify-center">
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="pl-5">
                <h1 className="text-[40px] text-[#16fe01] font-bold capitalize">
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
          ))
        )}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://travel-x-408k.onrender.com/uploads/Ones",
          { withCredentials: true }
        );
        setData(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {isLoading ? (
          <p className="text-[50px] font-bold">Loading..</p>
        ) : (
          data.map((img) => (
            <div key={img._id} className="w-full py-5 card">
              <div className="flex justify-center">
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-full h-auto object-cover rounded-[10px]"
                />
              </div>
              <div className="pl-5">
                <h1 className="text-[40px] text-[#16fe01] font-bold capitalize">
                  {img.name}
                </h1>
                <h2>Starting {img.price}Br</h2>
                <h2>Toyota VITZ or Similar</h2>
                <h2>Vehicle Feature {img.item}</h2>
                <ul>
                  <li>° 4 Person Seat</li>
                  <li>° Automatic</li>
                  <li>° Perfect for in city</li>
                  <li>° Pick up at airport</li>
                </ul>
                <Link to="/OneDayVehiclesBook" state={{ img }}>
                  <Button text={"Book Now!"} />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.img;

  async function handleBooking() {
    setIsLoading(true);
    try {
      await axios.post(
        `https://travel-x-408k.onrender.com/dashboard/OneDayVehiclesBook`,
        user,
        {
          withCredentials: true,
        }
      );
      alert("Successfully Booked!");
      navigate("/UserDashboard");
    } catch (error) {
      alert("You forgot to login bro");
      navigate("/Login");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://travel-x-408k.onrender.com/uploads/one",
          { withCredentials: true }
        );
        setData(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />
      <div className="pt-[100px]">
        <h1 className="text-[40px] lg:text-[80px] text-center font-bold">
          <span className="text-[#16fe01] ">Our</span> Cars
        </h1>
      </div>
      <div className="pt-[40px] px-2 w-full grid lg:grid-cols-3 place-items-center gap-3 space-y-3">
        {isLoading ? (
          <p className="text-[50px] font-bold">Loading..</p>
        ) : (
          <div key={user._id} className="w-full py-5 card">
            <div className="flex justify-center">
              <img
                src={user.url}
                alt={user.filename}
                className="w-full h-auto object-cover rounded-[10px]"
              />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold capitalize">
                {user.name}
              </h1>
              <h2>Starting ${user.price}</h2>
              <h2>Toyota VITZ or Similar</h2>
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
                  {isLoading ? "Ordering..." : "Order"}
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
        )}
      </div>

      <div className="my-[40px] lg:mt-[200px] px-5 lg:px-20 flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-[15px] lg:text-[40px] font-bold">
            COME & TRY OUR <span className="text-[#16fe01]">SERVICES</span>
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

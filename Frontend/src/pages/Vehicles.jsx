import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
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
        const res = await axios.get("https://travel-x-408k.onrender.com/uploads/one", { withCredentials: true });
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
          Suv
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
          Ecomony
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
          Ecomony
          <div className="w-full py-5 card">
            <div className="pt-4 flex justify-center">
              <img src="midsizesuv.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Mini Suv</h1>
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
        <Link to="/FullSuvVehicles" state={{ MidSuv }}>
          Ecomony
          <div className="w-full py-5 card">
            <div className="pb-15 flex justify-center">
              <img src="fullsizesuv.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Full Suv</h1>
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
        <Link to="/MiniVanVehicles" state={{ Suv }}>
          Ecomony
          <div className="w-full py-5 card">
            <div className="flex justify-center">
              <img src="minivan.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Mini Van</h1>
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
        <Link to="/PickUpVehicles" state={{ Suv }}>
          Ecomony
          <div className="w-full py-8 card">
            <div className="pb-15 flex justify-center">
              <img src="pickup.png" alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Pick Up</h1>
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

        <Link to="/OneDayVehicles">
          {user?.name}
          <div className="w-full py-8 card" key="user._id">
            <div className="pb-15 flex justify-center">
              <img src={user?.url} alt="" srcset="" />
            </div>
            <div className="pl-5">
              <h1 className="text-[40px] text-[#16fe01] font-bold">Pick Up</h1>
              <h2>Starting ${user?.price}</h2>
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
      const res = await axios.get("https://travel-x-408k.onrender.com/uploads/suv");
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
            <div key={img._id}
 className="w-full py-5 card">
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
      const res = await axios.get("https://travel-x-408k.onrender.com/uploads/midsuv");
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
            <div key={img._id}
 className="w-full py-5 card">
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
      const res = await axios.get("https://travel-x-408k.onrender.com/uploads/fullsuv");
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
            <div key={img._id}
 className="w-full py-5 card">
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
      const res = await axios.get("https://travel-x-408k.onrender.com/uploads/minivan");
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
            <div key={img._id}
 className="w-full py-5 card">
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
      const res = await axios.get("https://travel-x-408k.onrender.com/uploads/pickup");
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
            <div key={img._id}
 className="w-full py-5 card">
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
        const res = await axios.get("https://travel-x-408k.onrender.com/uploads/one", { withCredentials: true });
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
            <div key={img._id}
 className="w-full py-5 card">
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


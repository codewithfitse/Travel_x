import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Header, SideBar, SubHeader, SubSideBar } from "./component";
const Render = import.meta.env.VITE_BACKEND_URL;

export const AdminOneLandingVehicle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 ${
                  toggle
                    ? "w-auto ml-22 p-3 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                    : " p-5 text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
                }`}
              >
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap flex-col gap-4">
                  <Link to="/AdminOneDayVehicleGet">
                    <div
                      className={`h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[200px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1
                          className={`font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          See Posts
                        </h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>

                  <Link to="/OnePost">
                    <div
                      className={`h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[200px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1
                          className={`font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          Upload Posts
                        </h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const OneLandingVehicle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SubSideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <SubHeader toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 ${
                  toggle
                    ? "w-auto ml-22 p-3 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                    : " p-5 text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
                }`}
              >
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap flex-col gap-4">
                  <Link to="/OneGet">
                    <div
                      className={`h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[200px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1
                          className={`font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          See Posts
                        </h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>

                  <Link to="/OnePost">
                    <div
                      className={`h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl  ${
                        toggle
                          ? "w-auto text-[200px] sm:text-[14px] md:text-[180px] lg:text-[240px] xl:text-[300px]"
                          : "text-[300px] sm:text-[360px] md:text-[400px] lg:text-[44px] xl:text-[48px]"
                      }`}
                    >
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1
                          className={`font-bold transition-all duration-300 ease-in-out ${
                            toggle
                              ? "text-[22px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                              : "text-[28px] sm:text-[32px] md:text-[46px] lg:text-[40px] xl:text-[44px]"
                          }`}
                        >
                          Upload Posts
                        </h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const OneGet = () => {
  const [err, setErr] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${Render}/uploads/one`, {
          withCredentials: true,
        });
        setImages(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
        setErr(err.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <section className="min-h-full overflow-x-hidden ">
        <div className="w-full h-full flex bg-[#020817] text-white">
          <SubSideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <SubHeader toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 ${
                  toggle
                    ? "w-auto ml-22 p-3 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                    : " p-5 text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
                }`}
              >
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                    <h1 className="text-[30px] text-white font-bold">
                      {isLoading ? "Loading..." : null}
                    </h1>
                    {err && (
                      <h1 className="text-[30px] text-red-500 font-bold">
                        {err}
                      </h1>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {images.map((img) => (
                    <div
                      key={img._id}
                      className="flex-[1_1_calc(50%-1rem)] min-w-[300px] p-4 bg-gray-800 rounded-2xl"
                    >
                      <p>
                        <strong>Name:</strong> {img.name}
                      </p>
                      <p>
                        <strong>Item:</strong> {img.item}
                      </p>
                      <p>
                        <strong>Price:</strong> {img.price}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {img.quantity}
                      </p>

                      <Link to="/OneViews" state={{ img, err }}>
                        <button className="text-blue-300 text-2xl font-semibold">
                          Views
                        </button>
                      </Link>

                      <p>{img.filename}</p>

                      <div className="flex justify-center mt-2">
                        <img
                          src={img.url}
                          alt={img.filename}
                          className="w-full h-auto object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const AdminOneDayVehicleGet = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${Render}/uploads/ones`, {
          withCredentials: true,
        });
        setImages(res.data);
      } catch (err) {
        setErr(err.error);
        console.error("Error fetching images:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <section className="min-h-full overflow-x-hidden">
        <div className="w-full h-full flex bg-[#020817] text-white">
          <SideBar toggle={toggle} setToggle={setToggle} />
          <div className="ml-14 flex flex-col flex-1">
            <Header toggle={toggle} />
            <main className="pt-20 p-5 bg-transparent">
              <div
                className={`h-full lg:px-30 bg-gray-900 ${
                  toggle
                    ? "w-auto ml-22 p-3 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[30px]"
                    : " p-5 text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px]"
                }`}
              >
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                    <h1 className="text-[30px] text-white font-bold">
                      {isLoading ? "Loading..." : null}
                    </h1>
                    {err && (
                      <h1 className="text-[30px] text-red-500 font-bold">
                        {err}
                      </h1>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {images.map((img) => (
                    <div
                      key={img._id}
                      className="flex-[1_1_calc(50%-1rem)] min-w-[300px] p-4 bg-gray-800 rounded-2xl"
                    >
                      <p>
                        <strong>Name:</strong> {img.name}
                      </p>
                      <p>
                        <strong>Item:</strong> {img.item}
                      </p>
                      <p>
                        <strong>Price:</strong> {img.price}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {img.quantity}
                      </p>

                      <div className="w-full h-fit space-x-3">
                        <Link to="/AdminOneDayVehicleEdits" state={{ img }}>
                          <button className="text-blue-300 text-2xl font-semibold">
                            Edits
                          </button>
                        </Link>
                        <Link to="/AdminOneDayVehicleDeletes" state={{ img }}>
                          <button className="text-blue-300 text-2xl font-semibold">
                            Delete
                          </button>
                        </Link>
                      </div>

                      <p>{img.filename}</p>

                      <div className="flex justify-center mt-2">
                        <img
                          src={img.url}
                          alt={img.filename}
                          className="w-full h-auto object-cover rounded-[10px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export const OnePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [item, setItem] = useState();
  const [model, setModel] = useState("");
  const [images, setImages] = useState([]);

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!image) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("item", item);
    formData.append("model", model);
    formData.append("price", Number(price));
    formData.append("quantity", Number(quantity));
    formData.append("image", image);

    try {
      await axios.post(`${Render}/uploads/one`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchImages();
      setName("");
      setItem("");
      setQuantity("");
      setPrice("");
      setModel("");
      setImage("");
      alert("Upload Success");
    } catch (err) {
      const errorStatus = err.response?.status;
      const errorMsg = err.response?.data?.error;
      if (errorStatus === 401) {
        alert(errorMsg);
      } else if (errorStatus === 400) {
        alert(errorMsg);
      }
      console.error(err);
      setErr(err);
      alert("Upload failed");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get(
        "https://travel-x-408k.onrender.com/uploads/one",
        { withCredentials: true }
      );
      setImages(res.data);
    } catch (err) {
      setErr(err);
      console.error("Fetching images failed:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="h-full p-3 bg-gray-950 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
        <form
          action=""
          onSubmit={handleUpload}
          className="flex flex-col space-y-3"
        >
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Name"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Item:
            </label>
            <select
              name="item"
              type="text"
              className="py-1 px-2 text-gray-600 bg-amber-50 capitalize rounded-[5px]"
              onChange={(e) => setItem(e.target.value)}
            >
              <option value="none">Choose here!</option>
              <option value="suv">suv</option>
              <option value="midsuv">midSuv</option>
              <option value="fullsuv">fullSuv</option>
              <option value="pickup">pickup</option>
              <option value="minivan">minivan</option>
            </select>
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Price:
            </label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Price"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Quantity of cars"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Model:
            </label>
            <input
              type="text"
              name="model"
              onChange={(e) => setModel(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Model"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              File:
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose File"
            />
          </div>
          {err && <h1 className="text-[30px] text-red-500 font-bold">{err}</h1>}
          <div className="w-full">
            <button
              type="submit"
              className="py-2 px-3 bg-gray-700 rounded-[10px]"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
        <div className="w-fit h-fit p-2 flex flex-col items-center justify-center bg-gray-700 space-y-3">
          {images.map((img) => (
            <div
              key={img._id}
              className="w-fit h-fit p-3 flex flex-col justify-center bg-gray-800 rounded-2xl"
            >
              <p>
                <strong>Name:</strong> {img.name}
              </p>
              <p>
                <strong>Item:</strong> {img.item}
              </p>
              <p>
                <strong>Price:</strong> {img.price}
              </p>
              <p>
                <strong>Model:</strong> {img.model}
              </p>
              <p>
                <strong>Quantity:</strong> {img.quantity}
              </p>

              <p>{img.filename}</p>
              <div className=" flex justify-center">
                <img
                  src={img.url}
                  alt={img.filename}
                  className="w-50 h-100 bg-center rounded-[10px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AdminOneDayVehicleEdits = () => {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const location = useLocation();
  const img = location?.state?.img;
  const navigate = useNavigate();

  async function updatePost(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("item", item);
    formData.append("model", model);
    formData.append("price", price);
    formData.append("quantity", quantity);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios
        .put(`${Render}/uploads/one/${img._id}`, formData, {
          withCredentials: true,
        })
        .then((res) => {
          const done = res.data?.message || "Successfully Updated!";
          alert(done);
          navigate("/AdminOneLandingVehicle");
        })
        .catch((err) => {
          const errorStatus = err.response?.status;
          const errorMsg = err.response?.data?.error;
          if (errorStatus === 404) {
            alert(errorMsg);
          } else if (errorStatus === 400) {
            alert(errorMsg);
          }
          setErr(errorMsg);
          console.log(errorMsg);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!img) {
      navigate("/Get"); // Redirect back to your image list
    }
  }, [img, navigate]);

  return (
    <div className="h-full p-3 bg-gray-950 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
        <form
          action=""
          onSubmit={updatePost}
          className="flex flex-col space-y-3"
        >
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Name:
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Name"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Item:
            </label>
            <select
              name="item"
              type="text"
              className="py-1 px-2 text-gray-600 bg-amber-50 capitalize rounded-[5px]"
              onChange={(e) => setItem(e.target.value)}
            >
              <option value="none">Choose here!</option>
              <option value="suv">suv</option>
              <option value="midsuv">midSuv</option>
              <option value="fullsuv">fullSuv</option>
              <option value="pickup">pickup</option>
              <option value="minivan">minivan</option>
            </select>
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Price:
            </label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Description"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Quantity of cars"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Model:
            </label>
            <input
              type="text"
              name="model"
              onChange={(e) => setModel(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Description"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              File:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose File"
            />
          </div>
          {err && (
            <h1 className="text-[30px] text-red-500 font-bold ">{err}</h1>
          )}

          <div className="w-full">
            <button
              type="submit"
              className="py-2 px-3 bg-gray-700 rounded-[10px]"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const OneEdits = () => {
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const location = useLocation();
  const img = location?.state?.img;
  const navigate = useNavigate();

  async function updatePost(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("item", item);
    formData.append("model", model);
    formData.append("price", price);
    formData.append("quantity", quantity);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios
        .put(`${Render}/uploads/one/${img._id}`, formData, {
          withCredentials: true,
        })
        .then((res) => {
          const done = res.data?.message || "Successfully Updated!";
          alert(done);
          navigate("/OneLandingVehicle");
        })
        .catch((err) => {
          const errorStatus = err.response?.status;
          const errorMsg = err.response?.data?.error;
          if (errorStatus === 404) {
            alert(errorMsg);
          } else if (errorStatus === 400) {
            alert(errorMsg);
          }
          setErr(errorMsg);
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!img) {
      navigate("/Get"); // Redirect back to your image list
    }
  }, [img, navigate]);

  return (
    <div className="h-full p-3 bg-gray-950 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
        <form
          action=""
          onSubmit={updatePost}
          className="flex flex-col space-y-3"
        >
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Name:
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Name"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Item:
            </label>
            <select
              name="item"
              type="text"
              className="py-1 px-2 text-gray-600 bg-amber-50 capitalize rounded-[5px]"
              onChange={(e) => setItem(e.target.value)}
            >
              <option value="none">Choose here!</option>
              <option value="suv">suv</option>
              <option value="midsuv">midSuv</option>
              <option value="fullsuv">fullSuv</option>
              <option value="pickup">pickup</option>
              <option value="minivan">minivan</option>
            </select>
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Price:
            </label>
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Description"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Quantity of cars"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Model:
            </label>
            <input
              type="text"
              name="model"
              onChange={(e) => setModel(e.target.value)}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose Description"
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              File:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose File"
            />
          </div>
          {err && (
            <h1 className="text-[30px] text-red-500 font-bold ">{err}</h1>
          )}
          <div className="w-full">
            <button
              type="submit"
              className="py-2 px-3 bg-gray-700 rounded-[10px]"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const AdminOneDayVehicleDeletes = () => {
  const [err, setErr] = useState();
  const location = useLocation();
  const img = location?.state?.img;
  const navigate = useNavigate();

  async function handleDelete(_id) {
    await axios
      .delete(`${Render}/uploads/one/${_id}`, {
        withCredentials: true,
      })
      .then((res) => {
        const done = res?.data?.message || "Successfully deleted!";
        alert(done);
        navigate("/AdminOneDayVehicleGet");
      })
      .catch((err) => {
        const errorStatus = err.response?.status;
        const errorMsg = err.response?.data?.error;
        if (errorStatus === 404) {
          alert(errorMsg);
        } else if (errorStatus === 500) {
          alert(errorMsg);
        }
        setErr(errorMsg);
        console.log(errorMsg);
      });
  }

  return (
    <div className="h-screen p-3 bg-gray-950 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
        <div className="w-fit h-fit p-2 flex flex-col items-center justify-center bg-gray-700 space-y-3">
          <h1 className="text-[30px] font-bold">Delete Cars Collection</h1>
          {err && (
            <h1 className="text-[30px] text-red-500 font-bold ">{err}</h1>
          )}
          <div
            key={img._id}
            className="w-fit h-fit p-3 flex flex-col justify-center bg-gray-800 rounded-2xl"
          >
            <p>
              <strong>Name:</strong> {img.name}
            </p>
            <p>
              <strong>Item:</strong> {img.item}
            </p>
            <p>
              <strong>Price:</strong> {img.price}
            </p>
            <p>
              <strong>Quantity:</strong> {img?.quantity}
            </p>
            <p>
              <strong>Model:</strong> {img.model}
            </p>
            <div className="flex space-x-4">
              <p>Are you sure:</p>
              <button
                className="text-red-600"
                onClick={() => handleDelete(img._id)}
              >
                Yes
              </button>
              <button onClick={() => navigate("/Get")}>No</button>
            </div>

            <p>{img.filename}</p>
            <div className=" flex justify-center">
              <img
                src={img.url}
                alt={img.filename}
                className="w-50 h-50 bg-center rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OneDeletes = () => {
  const [err, setErr] = useState();
  const location = useLocation();
  const img = location?.state?.img;
  const navigate = useNavigate();

  async function handleDelete(_id) {
    await axios
      .delete(`${Render}/uploads/one/${_id}`, {
        withCredentials: true,
      })
      .then((res) => {
        const done = res?.data?.message || "Successfully deleted!";
        alert(done);
        navigate("/OneGet");
      })
      .catch((err) => {
        const errorStatus = err.response.status;
        const errorMsg = err.response?.data?.error;
        if (errorStatus === 404) {
          alert(errorMsg);
        } else if (errorStatus === 500) {
          alert(errorMsg);
        }
        alert(errorMsg);
        setErr(errorMsg);
        console.log(errorMsg);
      });
  }

  return (
    <div className="h-screen p-3 bg-gray-950 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
        <div className="w-fit h-fit p-2 flex flex-col items-center justify-center bg-gray-700 space-y-3">
          <h1 className="text-[30px] font-bold">Delete Cars Collection</h1>
          {err && (
            <h1 className="text-[30px] text-red-500 font-bold ">{err}</h1>
          )}
          <div
            key={img._id}
            className="w-fit h-fit p-3 flex flex-col justify-center bg-gray-800 rounded-2xl"
          >
            <p>
              <strong>Name:</strong> {img.name || img.displayname}
            </p>
            <p>
              <strong>Item:</strong> {img.item}
            </p>
            <p>
              <strong>Price:</strong> {img.price}
            </p>
            <p>
              <strong>Quantity:</strong> {img?.quantity}
            </p>
            <p>
              <strong>Model:</strong> {img.model}
            </p>
            <div className="flex space-x-4">
              <p>Are you sure:</p>
              <button
                className="text-red-600"
                onClick={() => handleDelete(img._id)}
              >
                Yes
              </button>
              <button onClick={() => navigate("/Get")}>No</button>
            </div>

            <p>{img.filename}</p>
            <div className=" flex justify-center">
              <img
                src={img.url}
                alt={img.filename}
                className="w-50 h-50 bg-center rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Header, SideBar, SubHeader, SubSideBar } from "./component";
const Render = import.meta.env.VITE_BACKEND_URL;

export const LandingVehicle = () => {
  const [isloading, setIsloading] = useState(false);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SideBar />
          <div className="ml-14 flex flex-col flex-1">
            <Header />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-10 bg-gray-900">
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap flex-col gap-4">
                  <Link to="/GetAdmin">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">See Posts</h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                  <Link to="/Post">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Upload Posts</h1>
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

export const SubLandingVehicle = () => {
  return (
    <>
      <section className="min-h-screen overflow-x-hidden">
        <div className="w-full h-screen flex bg-[#020817] text-white">
          <SubSideBar />
          <div className="ml-14 flex flex-col flex-1">
            <SubHeader />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-10 bg-gray-900">
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                  </div>
                </div>

                <div className="flex flex-wrap flex-col gap-4">
                  <Link to="/Get">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">See Posts</h1>
                        <i className="fa fa-bookmark w-2 !text-[30px]"></i>
                      </div>
                    </div>
                  </Link>
                  <Link to="/Post">
                    <div className="w-full h-auto mt-8 p-5 flex flex-col lg:flex-row justify-between bg-gray-800 rounded-2xl">
                      <div className="w-full px-5 flex justify-between items-center">
                        <h1 className="text-[30px] font-bold">Upload Posts</h1>
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

export const GetAdmin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // To Fetch Vehicle images from backend!
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          "https://travel-x-408k.onrender.com/uploads",
          { withCredentials: true }
        );
        setImages(res.data);
      } catch (err) {
        const errorMsg = err.response?.data?.error || "Error fetching images:";
        console.error(errorMsg);
        navigate("/LandingVehicle");
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
          <SideBar />
          <div className="ml-14 flex flex-col flex-1">
            <Header />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-10 bg-gray-900">
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                    <h1 className="text-[30px] text-white font-bold">
                      {isLoading ? "Loading..." : null}
                    </h1>
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

                      <Link to="/Views" state={{ img }}>
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

export const Get = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          "https://travel-x-408k.onrender.com/uploads/sub",
          { withCredentials: true }
        );
        setImages(res.data);
      } catch (err) {
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
          <SubSideBar />
          <div className="ml-14 flex flex-col flex-1">
            <SubHeader />
            <main className="pt-20 p-5 bg-transparent">
              <div className="w-full h-full p-5 lg:px-10 bg-gray-900">
                <div className="w-full h-fit flex flex-col justify-between items-center">
                  <div className="w-fit h-full py-1">
                    <h1 className="text-[30px] text-white font-bold">
                      Cars Collection DataBase
                    </h1>
                    <h1 className="text-[30px] text-white font-bold">
                      {isLoading ? "Loading..." : null}
                    </h1>
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

                      <Link to="/Views" state={{ img }}>
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

export const Post = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [item, setItem] = useState();
  const [images, setImages] = useState([]);

  const handleUpload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!image) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("item", item);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "https://travel-x-408k.onrender.com/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      fetchImages();
      setName("");
      setItem("");
      setPrice("");
      setImage("");
      alert("Upload Success");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchImages = async () => {
    try {
      const res = await axios.get("https://travel-x-408k.onrender.com/uploads");
      setImages(res.data);
    } catch (err) {
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
              type="text"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
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
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Choose File"
            />
          </div>
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

export const Views = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const img = location?.state?.img;

  return (
    <div className="h-full p-3 bg-gray-950 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
        <div className="w-fit h-fit p-2 flex flex-col items-center justify-center bg-gray-700 space-y-3">
          <h1 className="text-[30px] font-bold">View Cars Collection</h1>

          <div
            key={img?._id}
            className="w-fit h-fit p-3 flex flex-col justify-center bg-gray-800 rounded-2xl"
          >
            <p>
              <strong>Name:</strong> {img?.name}
            </p>
            <p>
              <strong>Item:</strong> {img?.item}
            </p>
            <p>
              <strong>Price:</strong> {img?.price}
            </p>
            <div className="flex space-x-4">
              <Link to="/Edits" state={{ img }}>
                Update
              </Link>
              <Link to="/Deletes" state={{ img }}>
                Delete
              </Link>
            </div>

            <p>{img?.filename}</p>
            <div className=" flex justify-center">
              <img
                src={img.url}
                alt={img?.filename}
                className="w-50 h-50 bg-center rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Edits = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState();
  const [images, setImages] = useState([]);
  const location = useLocation();
  const img = location?.state?.img;
  const navigate = useNavigate();

  async function updatePost(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("item", item);
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios
        .put(`https://travel-x-408k.onrender.com/uploads/${img._id}`, formData)
        .then(() => navigate("/Get"))
        .catch((err) => console.log(err));
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
          {/* <div className="w-full flex flex-col relative">
            <label htmlFor="" className="text-[30px] font-semibold">
              Name:
            </label>
            <input
              type="text"
              className="w-[80%] h-fit py-2 px-3 text-gray-800 bg-amber-50 rounded-[10px]"
              placeholder="Name File"
            />
          </div> */}
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
              type="text"
              onChange={(e) => setPrice(e.target.value)}
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

export const Deletes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const img = location?.state?.img;
  const navigate = useNavigate();

  async function handleDelete(_id) {
    await axios
      .delete(`https://travel-x-408k.onrender.com/uploads/${_id}`)
      .then(() => {
        alert("successfully deleted");
        navigate("/LandingVehicle");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="h-screen p-3 bg-gray-950 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-900">
        <div className="w-fit h-fit p-2 flex flex-col items-center justify-center bg-gray-700 space-y-3">
          <h1 className="text-[30px] font-bold">Delete Cars Collection</h1>

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

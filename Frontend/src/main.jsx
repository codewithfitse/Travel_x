import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import NotFound from "./pages/404.jsx";
import Booking from "./pages/Booking.jsx";
import Vehicles, {
  SuvVehicles,
  MidSuvVehicles,
  FullSuvVehicles,
  MiniVanVehicles,
  PickUpVehicles,
} from "./pages/Vehicles.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { Landing } from "./pages/Landing.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import {
  EditDashboard,
  ViewDashboard,
  DeleteDashboard,
} from "./pages/dashboard/CRUDUSER.jsx";
import {
  Deletes,
  Edits,
  Views,
  Post,
  Get,
} from "./pages/dashboard/CRUDVECHICL.jsx";
import SubDashboard from "./pages/dashboard/SubAdminDashboard.jsx";
import { Profile } from "./pages/dashboard/Profile.jsx";
import { ContactDb } from "./pages/dashboard/ContactDb.jsx";
import { BookingDb } from "./pages/dashboard/BookingDb.jsx";
// import { Dash } from "./pages/Dash.jsx";
import UserDb from "./pages/dashboard/UserDb.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/AboutUS",
    element: <AboutUs />,
  },
  {
    path: "/Booking",
    element: <Booking />,
  },
  {
    path: "/Vehicles",
    element: <Vehicles />,
  },
  {
    path: "/SuvVehicles",
    element: <SuvVehicles />,
  },
  {
    path: "/MidSuvVehicles",
    element: <MidSuvVehicles />,
  },
  {
    path: "/FullSuvVehicles",
    element: <FullSuvVehicles />,
  },
  {
    path: "/MiniVanVehicles",
    element: <MiniVanVehicles />,
  },
  {
    path: "/PickUpVehicles",
    element: <PickUpVehicles />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/Admin",
    element: <AdminDashboard />,
  },
  {
    path: "/Post",
    element: <Post />,
  },
  {
    path: "/Get",
    element: <Get />,
  },
  {
    path: "/Views",
    element: <Views />,
  },
  {
    path: "/Edits",
    element: <Edits />,
  },
  {
    path: "/Deletes",
    element: <Deletes />,
  },
  {
    path: "/SubAdmin",
    element: <SubDashboard />,
  },  
  {
    path: "/Edit",
    element: <EditDashboard />,
  },
  {
    path: "/View",
    element: <ViewDashboard />,
  },
  {
    path: "/Delete",
    element: <DeleteDashboard />,
  },
  {
    path: "/UserDb",
    element: <UserDb />,
  },
  {
    path: "/ContactDb",
    element: <ContactDb />,
  },
  {
    path: "/BookingDb",
    element: <BookingDb />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);

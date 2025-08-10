import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import NotFound from "./pages/404.jsx";
import Booking from "./pages/Booking.jsx";
import OneDayBook from "./pages/Bookings.jsx";
import Vehicles, {
  Pricing,
  VehiclesTypes,
  OneDayVehicles,
  OneDayVehiclesBook,
} from "./pages/Vehicles.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { Landing } from "./pages/Landing.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import SubDashboard from "./pages/dashboard/SubAdminDashboard.jsx";
import UserDashboard from "./pages/dashboard/UserDashboard.jsx";
import {
  EditUserInfo,
  ViewUserInfo,
  DeleteUserInfo,
} from "./pages/dashboard/CRUDUSER.jsx";
import {
  LandingVehicle,
  SubLandingVehicle,
  Deletes,
  Edits,
  Views,
  Post,
  GetAdmin,
  Get,
} from "./pages/dashboard/CRUDVECHICL.jsx";
import {
  OneLandingVehicle,
  AdminOneLandingVehicle,
  OneGet,
  AdminOneDayVehicleGet,
  OnePost,
  AdminOneDayVehicleEdits,
  OneEdits,
  AdminOneDayVehicleDeletes,
  OneDeletes,
} from "./pages/dashboard/CRUDONEDAYVEHICLE.jsx";
import {
  Profile,
  SubProfile,
  UserProfile,
} from "./pages/dashboard/Profile.jsx";
import { ContactDb, EditContactDb } from "./pages/dashboard/ContactDb.jsx";
import { BookingDb, EditBookingDb } from "./pages/dashboard/BookingDb.jsx";
import UserDb from "./pages/dashboard/UserDb.jsx";
import {
  AllBookStatus,
  EditBookStatus,
  LandingBookStatus,
  StatusOfBook,
  SubBookStatus,
  UserBookStatus,
} from "./pages/dashboard/BookStatus.jsx";
import { Tutorial } from "./pages/Tutorial.jsx";
import  Demo  from "./pages/Demo.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFound />,
  },
  {
    path: "/Demo",
    element: <Demo />,
  },
  {
    path: "/Demo",
    element: <Demo />,
  },
  {
    path: "/Tutorial",
    element: <Tutorial />,
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
    path: "/OneDayBook",
    element: <OneDayBook />,
  },
  {
    path: "/Vehicles",
    element: <Vehicles />,
  },
  {
    path: "/Pricing",
    element: <Pricing />,
  },
  {
    path: "/VehiclesTypes",
    element: <VehiclesTypes />,
  },
  {
    path: "/OneDayVehicles",
    element: <OneDayVehicles />,
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
    path: "/Admin",
    element: <AdminDashboard />,
  },
  {
    path: "/SubAdmin",
    element: <SubDashboard />,
  },
  {
    path: "/UserDashboard",
    element: <UserDashboard />,
  },
  {
    path: "/LandingVehicle",
    element: <LandingVehicle />,
  },
  {
    path: "/SubLandingVehicle",
    element: <SubLandingVehicle />,
  },
  {
    path: "/Post",
    element: <Post />,
  },
  {
    path: "/GetAdmin",
    element: <GetAdmin />,
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
    path: "/OneLandingVehicle",
    element: <OneLandingVehicle />,
  },
  {
    path: "/AdminOneLandingVehicle",
    element: <AdminOneLandingVehicle />,
  },
  {
    path: "/OneDayVehiclesBook",
    element: <OneDayVehiclesBook />,
  },
  {
    path: "/OnePost",
    element: <OnePost />,
  },
  {
    path: "/OneGet",
    element: <OneGet />,
  },
  {
    path: "/AdminOneDayVehicleGet",
    element: <AdminOneDayVehicleGet />,
  },
  {
    path: "/OneEdits",
    element: <OneEdits />,
  },
  {
    path: "/AdminOneDayVehicleEdits",
    element: <AdminOneDayVehicleEdits />,
  },
  {
    path: "/AdminOneDayVehicleDeletes",
    element: <AdminOneDayVehicleDeletes />,
  },
  {
    path: "/OneDeletes",
    element: <OneDeletes />,
  },
  {
    path: "/Edit",
    element: <EditUserInfo />,
  },
  {
    path: "/View",
    element: <ViewUserInfo />,
  },
  {
    path: "/Delete",
    element: <DeleteUserInfo />,
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
    path: "/EditContactDb",
    element: <EditContactDb />,
  },
  {
    path: "/BookingDb",
    element: <BookingDb />,
  },
  {
    path: "/EditBookingDb",
    element: <EditBookingDb />,
  },
  {
    path: "/LandingBookStatus",
    element: <LandingBookStatus />,
  },
  {
    path: "/AllBookStatus",
    element: <AllBookStatus />,
  },
  {
    path: "/StatusOfBook",
    element: <StatusOfBook />,
  },
  {
    path: "/UserBookStatus",
    element: <UserBookStatus />,
  },
  {
    path: "/SubBookStatus",
    element: <SubBookStatus />,
  },
  {
    path: "/EditBookStatus",
    element: <EditBookStatus />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  {
    path: "/SubProfile",
    element: <SubProfile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </StrictMode>
);

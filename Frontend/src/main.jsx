import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs.jsx";
import NotFound from "./pages/404.jsx";
import Booking from "./pages/Booking.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import { Landing } from "./pages/Landing.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import { Profile } from "./pages/Profile.jsx";
import EditDashboard from "./pages/dashboard/Edit.jsx";
import ViewDashboard from "./pages/dashboard/View.jsx";
import DeleteDashboard from "./pages/dashboard/Delete.jsx";

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
    path: "/Profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);

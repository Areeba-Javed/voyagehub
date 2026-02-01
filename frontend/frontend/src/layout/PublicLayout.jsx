import React from "react";
import { useLocation } from "react-router-dom";

// Components
// Pages
import Navbar from "../components/Header/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx"
import Main from "./pages/Home/Main.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Adventure from "./pages/Adventure/Adventure.jsx";
import Trip from "./pages/Trip/Trip.jsx";
import TripDetail from "./pages/Trip/TripDetail.jsx";
import BookingForm from "./pages/Trip/BookingForm.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";

export default function PublicLayout() {
  const location = useLocation();
  const path = location.pathname;

  let PageComponent;

  // Decide which page to render
  switch (true) {
    case path === "/":
      PageComponent = <Main />;
      break;
    case path === "/about":
      PageComponent = <About />;
      break;
    case path === "/contact":
      PageComponent = <Contact />;
      break;
    case path === "/adventure":
      PageComponent = <Adventure />;
      break;
    case path === "/trip":
      PageComponent = <Trip />;
      break;
    case path.startsWith("/trip/") && path !== "/trip":
      PageComponent = <TripDetail />;
      break;
    case path.startsWith("/booking/"):
      PageComponent = <BookingForm />;
      break;
    case path === "/login":
      PageComponent = <Login />;
      break;
    case path === "/signup":
      PageComponent = <Signup />;
      break;
    default:
      PageComponent = <Main />; // fallback
  }

  return (
    <>
      <Navbar />
      <main>{PageComponent}</main>
      <Footer />
    </>
  );
}

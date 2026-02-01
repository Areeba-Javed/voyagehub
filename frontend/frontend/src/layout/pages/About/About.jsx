import React from "react";
import Aboutus from "../Home/Aboutus";

const About = () => {
  return (
    <div className="about-page">

      {/* 🔹 Hero Section */}
      <div
        className="container position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          width: "90%",
          height: "75vh",
          borderRadius: "24px",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(/images/aboutus.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
        }}
      >
        <div className="px-4">
          <span
            className="text-warning text-uppercase fw-semibold d-block mb-2"
            style={{ letterSpacing: "2px", fontSize: "0.9rem" }}
          >
            Who We Are
          </span>

          <h1
            className="fw-semibold text-white mb-3"
            style={{ fontSize: "3rem" }}
          >
            About Us
          </h1>

          <p
            className="text-light mb-4"
            style={{
              maxWidth: "650px",
              fontSize: "1.05rem",
              margin: "0 auto",
            }}
          >
            VoyageHub is your trusted travel partner, creating unforgettable journeys
            and experiences around the globe with care and excellence.
          </p>

          <button className="btn btn-warning px-5 py-2 fw-medium shadow">
            Learn More
          </button>
        </div>
      </div>

      {/* 🔹 About Section (Our Values / Features) */}
      <div className="container mt-5">
        <Aboutus />
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>

      {/* 🔹 Hero Section */}
      <div
  className="container position-relative d-flex flex-column align-items-center justify-content-center text-center"
  style={{
    width: "90%",
    height: "75vh",
    borderRadius: "24px",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(/images/aboutus.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
  }}
>
  {/* Content */}
  <div className="px-4">
    {/* Tagline */}
    <span
      className="text-warning text-uppercase fw-semibold d-block mb-2"
      style={{ letterSpacing: "2px", fontSize: "0.9rem" }}
    >
      Get in Touch
    </span>

    {/* Heading */}
    <h1
      className="fw-semibold text-white mb-3"
      style={{ fontSize: "2.6rem" }}
    >
      Contact Us
    </h1>

    {/* Description */}
    <p
      className="text-light mb-4"
      style={{ maxWidth: "600px", fontSize: "1rem", margin: "0 auto" }}
    >
      Have questions or need help planning your adventure? Our travel experts
      are here to assist you 24/7.
    </p>

    {/* Call-to-action button */}
    <button className="btn btn-warning px-5 py-2 fw-medium shadow">
      Reach Out Now
    </button>
  </div>
</div>



      {/* 🔹 Contact Section */}
      <div className="container mt-5">
  <div className="row gy-4">

    {/* ================= Left Side: Contact Info ================= */}
    <div className="col-md-4 d-flex flex-column gap-4">
      
      {/* Contact Card */}
      {[
        { icon: <FaPhoneAlt size={22} />, title: "Phone", value: "+123 456 7890" },
        { icon: <FaEnvelope size={22} />, title: "Email", value: "info@example.com" },
        { icon: <FaMapMarkerAlt size={22} />, title: "Address", value: "123 Street, City, Country" }
      ].map((item, index) => (
        <div
          key={index}
          className="rounded text-center text-white p-4 shadow-lg d-flex flex-column align-items-center justify-content-center"
          style={{
            background: "linear-gradient(135deg, #1c534d, #1e7d71)",
            transition: "all 0.3s",
            cursor: "pointer",
          }}
        >
          <div className="mb-2">{item.icon}</div>
          <h5 className="fw-bold mb-1">{item.title}</h5>
          <span className="fw-medium">{item.value}</span>
        </div>
      ))}

    </div>

    {/* ================= Right Side: Contact Form ================= */}
    <div className="col-md-8">
      <div
        className="rounded-4 p-5 shadow-lg position-relative overflow-hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        <h3 className="fw-bold text-center mb-4 text-dark">Send Us a Message</h3>

        <form>
          <div className="row gy-3">
            <div className="col-md-6">
              <input type="text" className="form-control rounded-pill" placeholder="Your Name" />
            </div>

            <div className="col-md-6">
              <input type="email" className="form-control rounded-pill" placeholder="Your Email" />
            </div>

            <div className="col-12">
              <input type="text" className="form-control rounded-pill" placeholder="Subject" />
            </div>

            <div className="col-12">
              <textarea className="form-control rounded-3" rows="5" placeholder="Your Message"></textarea>
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn text-white fw-bold px-5 py-2"
                style={{
                  background: "linear-gradient(135deg, #1c534d, #1e7d71)",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                  transition: "all 0.3s"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>

        {/* Optional floating shapes for decoration */}
        <span
          style={{
            position: "absolute",
            top: "-20px",
            right: "-20px",
            width: "80px",
            height: "80px",
            background: "rgba(28,83,77,0.3)",
            borderRadius: "50%",
            filter: "blur(20px)"
          }}
        ></span>

        <span
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "100px",
            height: "100px",
            background: "rgba(30,125,113,0.25)",
            borderRadius: "50%",
            filter: "blur(25px)"
          }}
        ></span>
      </div>
    </div>

  </div>
</div>

    </div>
  );
};

export default Contact;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

const Trip = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrips = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/book/");
        console.log("API Response:", res.data); // DEBUG
        if (res.data.success) setTrips(res.data.trips);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getTrips();
  }, []);

  return (
    <div className="w-100">
      {/* HERO */}
     <div
  className="container-fluid position-relative d-flex align-items-center justify-content-center text-center"
  style={{
    width: "90%",
    height: "75vh",
    borderRadius: "22px",
    overflow: "hidden",
  }}
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      objectFit: "cover",
    }}
  >
    <source src="./public/videos/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.65))",
    }}
  ></div>

  {/* Content */}
  <div className="position-relative px-4">
    <span className="text-warning fw-semibold text-uppercase mb-2 d-block">
      Explore • Discover • Travel
    </span>

    <h1 className="fw-semibold text-white mb-3" style={{ fontSize: "2.6rem" }}>
      Book Your Next Adventure
    </h1>

    <p
      className="text-light mb-4"
      style={{ fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}
    >
      Experience unforgettable journeys with carefully curated destinations
      and seamless travel planning.
    </p>

    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <button className="btn btn-warning px-4 py-2 fw-medium">
        Explore Trips
      </button>

      <button className="btn btn-outline-light px-4 py-2 fw-medium">
        Contact Us
      </button>
    </div>
  </div>
</div>


      {/* TRIPS */}
      <div className="container my-5">
        <div className="row justify-content-center">
          {loading && <h4 className="text-center">Loading trips...</h4>}
          {!loading && trips.length === 0 && (
            <h4 className="text-center">No trips available</h4>
          )}
          {trips.map((trip) => (
            <div key={trip._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="p-3 rounded shadow h-100" style={{ backgroundColor: "whitesmoke" }}>
                <img
                  src={`http://localhost:5000/uploads/${trip.photo}`}
                  alt={trip.title}
                  className="img-fluid rounded"
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <h4 className="mt-3 fw-bold">{trip.title}</h4>
                <div className="d-flex align-items-center mt-1">
                  <CiLocationOn className="me-2" size={22} style={{ color: "rgba(28, 83, 77, 1)" }} />
                  <p className="mb-0 fw-bold">{trip.location}</p>
                </div>
                <p className="mt-2">{trip.description}</p>
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex align-items-center">
                    <CiCalendar className="me-2" size={22} style={{ color: "rgba(28, 83, 77, 1)" }} />
                    <p className="mb-0">{trip.days} days</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FiUsers className="me-2" size={22} style={{ color: "rgba(28, 83, 77, 1)" }} />
                    <p className="mb-0">{trip.remainingSeats}</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">
                    <b style={{ color: "rgba(28, 83, 77, 1)" }}>${trip.price}</b>/person
                  </p>
                  <Link to={`/trip/${trip._id}`}>
                    <button className="btn fw-bold text-light" style={{ backgroundColor: "rgba(28, 83, 77, 1)" }}>
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trip;

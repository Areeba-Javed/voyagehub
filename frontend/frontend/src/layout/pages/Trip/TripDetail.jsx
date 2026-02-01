import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot, FaCalendarDays, FaPerson } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";

const TripDetail = () => {
  const { pid } = useParams(); // route param
  const navigate = useNavigate();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/book/${pid}`);
        if (res.data.success) {
          setTrip(res.data.trip);
        }
      } catch (error) {
        console.error("Trip detail error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [pid]);

  if (loading)
    return <h3 className="text-center py-5">Loading trip details...</h3>;
  if (!trip) return <h3 className="text-center py-5">Trip not found</h3>;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Image */}
        <div className="col-lg-6 mb-4">
          <img
            src={`http://localhost:5000/uploads/${trip.photo}`}
            className="img-fluid rounded shadow-sm"
            alt={trip.title}
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Details */}
        <div className="col-lg-6">
          <h2 className="fw-bold" style={{ color: "rgba(28, 83, 77, 1)" }}>
            {trip.title}
          </h2>

          {/* Location */}
          <div className="d-flex align-items-center mb-2">
            <FaLocationDot style={{ color: "rgba(28, 83, 77, 1)" }} />
            <span className="ms-2 fs-5">{trip.location}</span>
          </div>

          {/* Days & People */}
          <div className="d-flex gap-4 my-4">
            <div>
              <FaCalendarDays /> {trip.days} days
            </div>
            <div>
              <FaPerson /> {trip.remainingSeats} seats left
            </div>
          </div>

          <hr />

          {/* Description */}
          <p>{trip.description}</p>

          {/* Price & Book Now */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3 className="fw-bold" style={{ color: "rgba(28, 83, 77, 1)" }}>
              ${trip.price}
              <span className="fs-6 text-muted"> / person</span>
            </h3>

            <button
              className="btn text-light px-4"
              style={{ backgroundColor: "rgba(28, 83, 77, 1)" }}
              onClick={() => navigate(`/booking/${trip._id}`, { state: trip })}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;

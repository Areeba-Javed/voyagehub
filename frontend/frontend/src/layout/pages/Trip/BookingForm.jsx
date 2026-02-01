import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaLocationDot, FaCalendarDays, FaPerson } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

const BookingForm = () => {
  const { state: trip } = useLocation(); // get trip from params/state
  const navigate = useNavigate();

  // if trip not passed (user refreshed the page)
  if (!trip) {
    return (
      <div className="container my-5 text-center">
        <h3>No trip selected</h3>
        <p>Please go back and select a trip.</p>
      </div>
    );
  }

  const availableSeats = trip.people - (trip.bookedPeople || 0);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: 1,
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalAmount = formData.guests * trip.price;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const data = new FormData();
      data.append("tripId", trip._id);
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("guests", formData.guests);
      data.append("specialRequest", formData.specialRequest);

      const res = await axios.post(
        "http://localhost:5000/api/trip/create",
        data
      );

      alert(res.data.message);
      navigate("/"); // go back home after booking
    } catch (error) {
      alert(error.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Complete Your Booking</h2>
      <div className="row g-4">
        {/* Booking Form */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                className="form-control mb-3"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Registered Email"
                required
                onChange={handleChange}
              />
              <input
                type="number"
                name="guests"
                className="form-control mb-3"
                min="1"
                max={availableSeats}
                value={formData.guests}
                onChange={handleChange}
                required
              />
              <textarea
                name="specialRequest"
                className="form-control mb-4"
                rows="3"
                placeholder="Special requests (optional)"
                onChange={handleChange}
              />
              <h4 className="mb-3">
                Total: <FaDollarSign /> {totalAmount}
              </h4>
              <button
                type="submit"
                className="btn text-light w-100 py-2"
                style={{ backgroundColor: "rgba(28, 83, 77, 1)" }}
                disabled={loading}
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>

        {/* Trip Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-3">
            <h5>Trip Summary</h5>
            {/* Correct image path */}
            <img
              src={`http://localhost:5000/uploads/${trip.photo}`}
              alt={trip.title}
              className="img-fluid rounded mb-3"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <h6 className="fw-bold">{trip.title}</h6>
            <ul className="list-unstyled">
              <li>
                <FaLocationDot /> {trip.location}
              </li>
              <li>
                <FaCalendarDays /> {trip.days} days
              </li>
              <li>
                <FaPerson /> {availableSeats} seats left
              </li>
              <li>
                <FaDollarSign /> {trip.price} / person
              </li>
            </ul>
            <hr />
            <div className="fw-bold d-flex justify-content-between">
              <span>Total</span>
              <span>
                <FaDollarSign /> {totalAmount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

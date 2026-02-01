import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const res = await axios.get(
        "http://localhost:5000/api/trip/mybooking",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data.bookings || []);
    } catch (err) {
      console.error("Frontend error:", err.response?.data || err.message);
      setError("Failed to load your bookings");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ UI STATES ------------------ */

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-danger mt-5">
        {error}
      </p>
    );
  }

  return (
    <div className="container py-4">
      <h4 className="fw-semibold mb-4">My Bookings</h4>

      <div className="row g-3">
        {bookings.map((booking) => (
          <div className="col-md-6 col-lg-4" key={booking._id}>
            <div className="card shadow-sm h-100">

              {/* Header */}
              <div className="card-header " style={{borderColor:"rgba(28, 83, 77, 1)",backgroundColor:"rgba(28, 83, 77, 1)"}}>
                <h6 className="mb-0 fw-bold text-white" >
                  {booking.trip?.title || "Trip Title"}
                </h6>
                <small className="text-white">
                  {booking.trip?.location || "Location"}
                </small>
              </div>

              {/* Body */}
              <div className="card-body small">
                <p className="mb-1">
                  <b>Guests:</b> {booking.guests}
                </p>
                <p className="mb-1">
                  <b>Total:</b> ${booking.totalPrice}
                </p>
                <p className="mb-1">
                  <b>Date:</b>{" "}
                  {new Date(booking.createdAt).toLocaleDateString()}
                </p>

                {booking.specialRequest && (
                  <div className="mt-2">
                    <small className="text-muted">Special Request</small>
                    <div className="border rounded px-2 py-1 bg-light">
                      {booking.specialRequest}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="card-footer bg-white text-muted small">
                Booking ID: {booking._id.slice(-6).toUpperCase()}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {!bookings.length && (
        <p className="text-center text-muted mt-5">
          You have no bookings yet.
        </p>
      )}
    </div>
  );
};

export default MyBookings;

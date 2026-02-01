import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const AllBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Edit states
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    guests: 1,
    specialRequest: "",
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  // =====================
  // Fetch all bookings
  // =====================
  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/trip/all");
      setBookings(res.data.bookings || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  // =====================
  // Delete booking
  // =====================
  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/trip/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
      alert("Booking deleted");
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  // =====================
  // Open Edit Modal
  // =====================
  const openEditModal = (booking) => {
    setEditId(booking._id);
    setFormData({
      fullName: booking.fullName,
      guests: booking.guests,
      specialRequest: booking.specialRequest || "",
    });
    setShowModal(true);
  };

  // =====================
  // Update Booking (PUT)
  // =====================
  const updateBooking = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/trip/${editId}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      // Update state without reload
      setBookings((prev) =>
        prev.map((b) =>
          b._id === editId ? res.data.booking : b
        )
      );

      setShowModal(false);
      alert("Booking updated successfully");
    } catch (error) {
      console.error(error.response || error);
      alert(error.response?.data?.message || "Update failed");
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-75">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">

        <div className="d-flex justify-content-between mb-4">
          <h4>All Bookings</h4>
          <span>Total: {bookings.length}</span>
        </div>

        <div className="row g-3">
          {bookings.map((booking) => (
            <div className="col-md-6 col-xl-4" key={booking._id}>
              <div className="card h-100 shadow-sm">

                <div className="card-header d-flex justify-content-between">
                  <div>
                    <h6 className="fw-bold">
                      {booking.trip?.title}
                    </h6>
                    <small>{booking.trip?.location}</small>
                  </div>
                  <span className="badge bg-success " style={{height:"30px"}}>
                    {booking.guests} Guests
                  </span>
                </div>

                <div className="card-body small">
                  <strong>{booking.fullName}</strong>
                  <div>{booking.email}</div>
                  <div>${booking.totalPrice}</div>
                </div>

                <div className="card-footer d-flex justify-content-between">
                  <small>ID: {booking._id.slice(-6)}</small>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => openEditModal(booking)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteBooking(booking._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {showModal && (
        <div className="modal fade show d-block bg-dark bg-opacity-50">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5>Edit Booking</h5>
                <button className="btn-close" onClick={() => setShowModal(false)} />
              </div>

              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />

                <input
                  type="number"
                  min="1"
                  className="form-control mb-2"
                  placeholder="Guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                />

                <textarea
                  className="form-control"
                  placeholder="Special Request"
                  value={formData.specialRequest}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequest: e.target.value })
                  }
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-success"
                  onClick={updateBooking}
                >
                  Update
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBooking;

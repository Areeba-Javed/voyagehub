import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

const TripView = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("auth"));
  const token = auth?.token;

  const getTrips = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/book/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setTrips(res.data.trips);
      }
    } catch (error) {
      console.error("Admin trips error:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTrip = async (id) => {
    if (!window.confirm("Are you sure you want to delete this trip?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/book/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getTrips();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  if (loading)
    return <h4 className="text-center mt-5 text-muted">Loading trips...</h4>;

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Manage Trips</h2>
          <p className="text-muted mb-0">
            View, update or delete all trips
          </p>
        </div>

        <button
          className="btn btn-success px-4"
          onClick={() => navigate("/dashboard/admin/add-trip")}
        >
          + Add New Trip
        </button>
      </div>

      {trips.length === 0 && (
        <div className="alert alert-info text-center">
          No trips available
        </div>
      )}

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Trip</th>
                <th>Location</th>
                <th>Price</th>
                <th>Seats</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {trips.map((trip) => (
                <tr key={trip._id}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={`http://localhost:5000/uploads/${trip.photo}`}
                        alt={trip.title}
                        width="70"
                        height="55"
                        className="rounded"
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold">
                          {trip.title}
                        </h6>
                        <small className="text-muted">
                          {trip.days} days
                        </small>
                      </div>
                    </div>
                  </td>

                  <td>{trip.location}</td>

                  <td className="fw-semibold">${trip.price}</td>

                  <td>
                    <span
                      className={`badge ${
                        trip.remainingSeats > 0
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {trip.remainingSeats} seats
                    </span>
                  </td>

                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() =>
                        navigate(`/dashboard/admin/update-trip/${trip._id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteTrip(trip._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TripView;

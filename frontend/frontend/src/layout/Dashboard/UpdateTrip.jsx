import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateTrip = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    title: "",
    location: "",
    days: "",
    people: "",
    price: "",
    description: "",
    photo: null,
  });

  const auth = JSON.parse(localStorage.getItem("auth"));
  const token = auth?.token;

  // Fetch trip details
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/book/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setTrip(res.data.trip))
      .catch(console.error);
  }, [id]);

  // Input change
  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setTrip({ ...trip, photo: e.target.files[0] });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(trip).forEach((key) => {
      if (trip[key]) formData.append(key, trip[key]);
    });

    try {
      await axios.put(
        `http://localhost:5000/api/book/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ Success alert (optional)
      alert("Trip updated successfully!");

      // ✅ Navigate back to TripView page
      navigate("/dashboard/admin");

    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4">Update Trip</h3>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          className="form-control mb-2"
          name="title"
          value={trip.title}
          onChange={handleChange}
          placeholder="Trip Title"
        />

        {/* Location */}
        <input
          className="form-control mb-2"
          name="location"
          value={trip.location}
          onChange={handleChange}
          placeholder="Location"
        />

        {/* Days */}
        <input
          className="form-control mb-2"
          name="days"
          value={trip.days}
          onChange={handleChange}
          placeholder="Days"
        />

        {/* People */}
        <input
          className="form-control mb-2"
          name="people"
          value={trip.people}
          onChange={handleChange}
          placeholder="People"
        />

        {/* Price */}
        <input
          className="form-control mb-2"
          name="price"
          value={trip.price}
          onChange={handleChange}
          placeholder="Price"
        />

        {/* Description */}
        <textarea
          className="form-control mb-2"
          name="description"
          value={trip.description}
          onChange={handleChange}
          placeholder="Description"
        />

        {/* Photo */}
        <input
          type="file"
          className="form-control mb-3"
          onChange={handleFile}
        />

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Update Trip
          </button>

          {/* Optional Back Button */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/dashboard/admin")}
          >
            ← Back to Trips
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTrip;

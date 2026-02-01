import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Booking = () => {
  const [trip, setTrip] = useState({
    title: "",
    location: "",
    days: "",
    people: "",
    price: "",
    img: null,
    description: "",
  });

  // Handle text inputs
  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setTrip({ ...trip, img: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Token check
    const auth = JSON.parse(localStorage.getItem("auth") || "{}");
    const token = auth?.token;

    if (!token) {
      alert("Please login first");
      return;
    }

    if (!trip.img) {
      alert("Please select an image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", trip.title);
      formData.append("location", trip.location);
      formData.append("days", Number(trip.days));
      formData.append("people", Number(trip.people));
      formData.append("price", Number(trip.price));
      formData.append("description", trip.description);
      formData.append("photo", trip.img); // must match backend

      const res = await axios.post(
        "http://localhost:5000/api/book/trip",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || "Trip added successfully");

      // Reset form
      setTrip({
        title: "",
        location: "",
        days: "",
        people: "",
        price: "",
        img: null,
        description: "",
      });

      document.getElementById("tripImg").value = "";
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Trip add failed");
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow p-4">
            <h4 className="fw-bold mb-4">Add New Trip</h4>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Trip Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={trip.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={trip.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Duration (Days)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="days"
                    value={trip.days}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Max People</label>
                  <input
                    type="number"
                    className="form-control"
                    name="people"
                    value={trip.people}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Price / Person</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={trip.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  id="tripImg"
                  name="photo"
                  className="form-control"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  value={trip.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-dark px-4">
                Add Trip
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

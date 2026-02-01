import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
const adventures = [
  {
    id: 1,
    title: "Mountain Expedition",
    location: "Swiss Alps",
    days: "7 days",
    people: "12 max",
    price: 1299,
    img: "/images/memory.jpg", // ✅ fixed
    description: "Experience breathtaking views and challenging trails in the Swiss Alps.",
  },
  {
    id: 2,
    title: "Desert Safari",
    location: "Sahara",
    days: "5 days",
    people: "8 max",
    price: 999,
    img: "/images/steps2.jpg",
    description: "Explore the vast deserts and enjoy thrilling desert adventures.",
  },
  {
    id: 3,
    title: "Beach Retreat",
    location: "Maldives",
    days: "6 days",
    people: "10 max",
    price: 1499,
    img: "/images/beach.jpg",
    description: "Relax on pristine beaches and enjoy the tropical paradise of Maldives.",
  },
];

const TopAdventure = () => {
  return (
    <div className="container py-5">
  {/* Heading and Button */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h3 className="fw-bold mb-0 ms-5">New Adventure</h3>
    <button
      style={{ backgroundColor: 'rgba(28, 83, 77, 1)' }}
      className="btn rounded text-light fw-bold"
    >
      View All
    </button>
  </div>

  {/* Adventure Cards */}
  <div className="row justify-content-center">
    {adventures.map((adventure) => (
      <div
        key={adventure.id}
        className="col-md-3 m-3 p-3 rounded shadow"
        style={{ backgroundColor: "whitesmoke" }}
      >
        {/* Image */}
        <img
          src={adventure.img}
          alt={adventure.title}
          className="img-fluid rounded"
          style={{ height: "180px", width: "100%", objectFit: "cover" }}
        />

        {/* Title */}
        <h5 className="mt-3 fw-bold">{adventure.title}</h5>

        {/* Location */}
        <div className="d-flex align-items-center mt-1">
          <CiLocationOn className="me-2 " style={{color:"rgba(28, 83, 77, 1)"}} />
          <p className="mb-0">{adventure.location}</p>
        </div>

        {/* Main paragraph */}
        <p className="mt-2">{adventure.description}</p>

        {/* Days and people */}
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex align-items-center">
            <CiCalendar className="me-2" style={{color:"rgba(28, 83, 77, 1)"}} />
            <p className="mb-0" style={{color:"rgba(28, 83, 77, 1)"}}>{adventure.days}</p>
          </div>
          <div className="d-flex align-items-center">
            <FiUsers className="me-2" style={{color:"rgba(28, 83, 77, 1)"}} />
            <p className="mb-0" style={{color:"rgba(28, 83, 77, 1)"}}>{adventure.people}</p>
          </div>
        </div>

        <hr />

        {/* Price and button */}
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            <b className=" fw-bold" style={{color:"rgba(28, 83, 77, 1)"}} >${adventure.price}</b>/person
          </p>
          <Link  to={`/trip/${adventure.id}`}>          
          <button className="btn  text-light fw-bold" style={{backgroundColor:"rgba(28, 83, 77, 1)"}}>
            View Details
          </button>
          </Link>

        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default TopAdventure;

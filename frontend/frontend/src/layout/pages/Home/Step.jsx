import React from 'react';
import { LuMountain ,LuPlane  } from "react-icons/lu";
import { AiOutlineSafety } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";


const Step = () => {
  const destinations = [
  {
    id: 1,
    title: "Amazing Destinations",
    icon: <LuMountain size={25} color="white" />,
    description:"Curated trips to the world's most beautiful locations."
  },
  {
    id: 2,
    title: "Expert Guides",
    icon: <BsPeople  size={25} color="white" />,
    description:"Highly professional and experienced trip agents dedicated to providing  services."
  },
  {
    id: 3,
    title: "Safe & Secure",
    icon: <AiOutlineSafety size={25} color="white" />,
    description:"We ensure your bookings and personal information remain fully protected through secure."
  },
  {
    id: 4,
    title: "Easy Booking",
    icon: <LuPlane size={25} color="white" />,
    description:"Enjoy a simple, fast, and user-friendly online reservation process."
  },
];

  return (
   <div>
    <div className="container py-5">

  <div className="row align-items-center justify-content-around">

    {/* Left side: Steps */}
    <div className="col-lg-5 mb-4">
      <h1 className='fw-bold ms-5' 
      style={{ color: 'rgba(28, 83, 77, 1)', fontSize: "2rem" }} >HOW IT WORKS</h1>

      <div className="mt-3 p-3  bg-hover rounded-3 ">
        <p style={{  fontSize: "1rem" }} className="mb-0 ">
          <b className='me-5'>Step 01</b>Select Your Trip</p>
      </div>
      <div className="mt-3 p-3 ms-5  bg-hover rounded-3 ">
        <p style={{  fontSize: "1rem" }} className="mb-0 ">
          <b className='me-5'>Step 02</b>Review Details</p>
      </div>
      <div className="mt-3 p-3  bg-hover rounded-3 ">
        <p style={{  fontSize: "1rem" }} className="mb-0 ">
          <b className='me-5'>Step 03</b>Confirm Booking</p>
      </div>
      <div className="mt-3 p-3 ms-5 bg-hover rounded-3 ">
        <p style={{  fontSize: "1rem" }} className="mb-0 ">
          <b className='me-5'>Step 04</b>Receive Confirmation</p>
      </div>
      
     
    </div>

    {/* Right side: Image */}
    <div className="col-lg-5 text-center">
      <img
        src="./images/steps2.jpg"
        className="img-fluid rounded shadow-sm"
        alt="Steps Illustration"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
    </div>

  </div>

</div>


    {/* Why choose us */}
<div className="container py-5 text-center">

  {/* Heading */}
  <h1 className="fw-bold">Why Choose Us</h1>
  <p className="text-muted">Curated trips to the world's most beautiful locations</p>

  {/* Cards */}
  <div className="row justify-content-center ">

    {destinations.map((item) => (
      <div
        key={item.id}
        className="col-sm-3 m-3 p-3 rounded shadow hover-card"
        style={{
          width: "230px",
          height: "340px",
          backgroundColor: "whitesmoke",
         
        }}
      >

        {/* Icon Box  */}
        <div
  className="rounded-3 mx-auto d-flex justify-content-center align-items-center "
  style={{
    backgroundColor: "rgba(28, 83, 77, 1)",
    width: "70px",
    height: "70px",
    marginTop: "20px", 
  }}
>
  {item.icon}
</div>

        {/* Title */}
        <h5 className="mt-5 fw-bold">{item.title}</h5>

        {/*  DESCRIPTION */}
        <p className="text-muted mt-2" style={{ fontSize: "1rem" }}>
          {item.description}
        </p>

      </div>
    ))}

  </div>
</div>


      </div>
  );
};

export default Step;

import React from "react";

const Aboutus = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">

        {/* Left: Images Section */}
        <div className="col-md-6">

          {/* Top Image */}
          <img
            className="rounded w-100 mb-3 shadow-sm"
            style={{ height: "250px", objectFit: "cover" }}
            src="/images/about3.jpg"
            alt="Top Image"
          />

          {/* Bottom 3 Images */}
          <div className="row g-3">
            <div className="col-4">
              <img
                className="rounded w-100 shadow-sm"
                style={{ height: "180px", objectFit: "cover" }}
                src="/images/about2.jpg"
                alt="Image 1"
              />
            </div>
            <div className="col-4">
              <img
                className="rounded w-100 shadow-sm"
                style={{ height: "180px", objectFit: "cover" }}
                src="/images/about4.jpg"
                alt="Image 2"
              />
            </div>
            <div className="col-4">
              <img
                className="rounded w-100 shadow-sm"
                style={{ height: "180px", objectFit: "cover" }}
                src="/images/about5.jpg"
                alt="Image 3"
              />
            </div>
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="col-md-6 text-md-start ps-md-4">
          <h1 className="fw-bold mb-3">About Us</h1>

          <p style={{ color: "gray", fontSize: "16px" }}>
            Our team of professionals brings expertise, innovation, and dedication
            to every aspect of our work. We strive not only to meet expectations
            but to exceed them — creating lasting impact and setting new
            standards in our industry.
          </p>

          <ul className="list-unstyled mt-3" style={{ lineHeight: "1.8", fontSize: "16px", color: "gray" }}>
            {[
              "Our journey began with a simple mission.",
              "We aim to deliver the best quality and service.",
              "Our team is dedicated and experienced.",
              "We continue to grow and innovate every day."
            ].map((text, i) => (
              <li key={i} className="d-flex align-items-start mb-2">
                <img
                  className="me-2 mt-1"
                  style={{ width: "20px", height: "20px" }}
                  src="/images/correct.png"
                  alt="check"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Aboutus;

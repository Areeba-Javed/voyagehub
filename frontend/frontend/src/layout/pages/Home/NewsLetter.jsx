import React from "react";

const Newsletter = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div
        className="newsletter-container text-white text-center py-5 px-3 rounded"
        style={{
          width: "80%",
          backgroundImage: "url('/images/beach.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backdropFilter: "brightness(0.6)",
        }}
      >
        <h2 className="fw-bold mb-3">Subscribe to Our Newsletter</h2>

        <p className="mb-4" style={{ fontSize: "17px" }}>
          Get the latest updates, offers, and insights delivered straight to your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="row g-2 justify-content-center" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className="col-md-8 col-sm-12">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="col-md-4 col-sm-12">
            <button  className="btn  btn-lg w-100 text-light" style={{backgroundColor:"rgba(28, 83, 77, 1)"}}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

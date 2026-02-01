import React from "react";

const Footer = () => {
  return (
    <footer className=" text-light pt-5 pb-3 mt-5" style={{backgroundColor:'rgba(28, 83, 77, 1)'}}>
      <div className="container">
        <div className="row gy-4">

          {/* Company Info */}
          <div className="col-md-4 col-sm-12 ">
            <img
            src="/images/l2.png"
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: '40px', marginRight: '10px' }}
          />
            <p style={{ color: "#ccc",fontSize:"0.9rem" }}>
              We provide high-quality services and <br/>solutions to help your business grow.<br/>
              Stay connected with us for updates<br/> and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-sm-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">Home</a></li>
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">Services</a></li>
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-2 col-sm-6">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">FAQs</a></li>
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">Terms</a></li>
              <li><a href="#" className="text-decoration-none text-light d-block mb-2">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-sm-12">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p className="mb-1"><i className="bi bi-geo-alt me-2"></i>123 Street, City, Country</p>
            <p className="mb-1"><i className="bi bi-envelope me-2"></i>info@company.com</p>
            <p className="mb-3"><i className="bi bi-telephone me-2"></i>+123 456 7890</p>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-secondary mt-4" />

        {/* Bottom Copyright */}
        <div className="text-center" style={{ color: "#aaa" }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

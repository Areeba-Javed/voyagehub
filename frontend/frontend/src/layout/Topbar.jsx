import React from "react";
import { FaBars } from "react-icons/fa";
import { getUser } from "../utils/auth.jsx";

const Topbar = ({ toggleSidebar, role }) => {
  const user = getUser();
  const firstLetter = user?.name ? user.name.charAt(0).toUpperCase() : "";

  return (
    <nav
      className="navbar navbar-expand text-light shadow-sm px-3"
      style={{
        height: "70px",
        backgroundColor: "rgba(28, 83, 77, 1)",
        position: "fixed",  // 🔥 fixed at top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1050,       // above sidebar/content
      }}
    >
      {/* Left side */}
      <div className="d-flex align-items-center gap-3">
        {/* Mobile toggle */}
        <button
          className="btn btn-outline-secondary d-md-none"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <h6 className="mb-0 fw-bold text-light">
          {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
        </h6>
      </div>

      {/* Right side */}
      <div className="ms-auto d-flex align-items-center gap-3">
        <span className="text-light small d-none d-sm-block">
          Welcome back
        </span>

        <div
          className="d-flex align-items-center justify-content-center bg-secondary text-white rounded-circle"
          style={{
            width: "28px",
            height: "28px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {firstLetter}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;

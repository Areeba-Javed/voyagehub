import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaUser,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { Logout } from "../utils/auth.jsx";

const Sidebar = ({ role, isOpen = true, closeSidebar }) => {
  const navigate = useNavigate();

  // ✅ ABSOLUTE PATHS (IMPORTANT)
  const userMenu = [
    { name: "My Bookings", path: "/dashboard/user/my-booking", icon: <FaUser /> },
  ];

  const adminMenu = [
    { name: "View Trip", path: "/dashboard/admin/view", icon: <FaTachometerAlt /> },
    { name: "All Bookings", path: "/dashboard/admin/all-bookings", icon: <FaClipboardList /> },
    { name: "Users", path: "/dashboard/admin/users", icon: <FaUsers /> },
    { name: "Add Trip", path: "/dashboard/admin/add-trip", icon: <FaClipboardList /> },
  ];

  const menu = role === "admin" ? adminMenu : userMenu;

  const handleLogout = () => {
    Logout();
    navigate("/login", { replace: true }); // ✅ refresh ki zarurat nahi
  };

  return (
    <div
      className={`text-white p-3 position-fixed h-100 ${
        isOpen ? "d-block" : "d-none d-md-block"
      }`}
      style={{ width: "240px", backgroundColor: "rgba(28, 83, 77, 1)" }}
    >
      {/* Logo */}
      <img
        src="/images/l2.png"
        alt="Logo"
        className="img-fluid mb-4"
        style={{ maxHeight: "40px" }}
      />

      {/* Menu */}
      <div className="d-flex flex-column gap-2">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `d-flex align-items-center gap-2 px-3 py-2 rounded text-decoration-none ${
                isActive ? "bg-secondary text-white" : "text-white"
              }`
            }
            onClick={closeSidebar}
          >
            <span className="fs-5">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="position-absolute bottom-0 start-0 w-100 p-3">
        <button
          className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import { getUser } from "../utils/auth.jsx";

const SIDEBAR_WIDTH = 240;

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [role, setRole] = useState(null);

  // 🔐 Always get fresh role
  useEffect(() => {
    const user = getUser();
    setRole(user?.role || null);
  }, []);

  // 📱 detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <Sidebar
        role={role}
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: !isMobile ? SIDEBAR_WIDTH : 0,
          transition: "margin 0.3s ease",
          width: "100%",
        }}
      >
        <Topbar
          role={role}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="p-4 mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

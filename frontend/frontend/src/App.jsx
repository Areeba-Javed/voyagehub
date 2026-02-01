import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Layouts
import PublicLayout from "./layout/PublicLayout.jsx";
import DashboardLayout from "./layout/Dashboradlayout.jsx";

// Pages
import Main from "./layout/pages/Home/Main.jsx";
import About from "./layout/pages/About/About.jsx";
import Contact from "./layout/pages/Contact/Contact.jsx";
import Adventure from "./layout/pages/Adventure/Adventure.jsx";
import Trip from "./layout/pages/Trip/Trip.jsx";
import TripDetail from "./layout/pages/Trip/TripDetail.jsx";
import UpdateTrip from "./layout/Dashboard/UpdateTrip.jsx";
import BookingForm from "./layout/pages/Trip/BookingForm.jsx";
import Login from "./layout/pages/Login/Login.jsx";
import Signup from "./layout/pages/Signup/Signup.jsx";

// Dashboard Pages
import UserDashboard from "./layout/Dashboard/UserDashboard.jsx";
import MyBookings from "./layout/Dashboard/MyBookings.jsx";
import Booking from "./layout/Dashboard/Booking.jsx";
import TripView from "./layout/Dashboard/TripView.jsx";
import AllBooking from "./layout/Dashboard/AllBooking.jsx";
import User from "./layout/Dashboard/User.jsx"
// Components
import Splash from "./components/SplashScreen/Splash.jsx";

// Auth helpers
import { isLoggedIn, getUser } from "./utils/auth.jsx";

/* ================= PROTECTED ROUTE ================= */
const ProtectedRoute = ({ children, role }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  const user = getUser();

  if (role && user?.role !== role) {
    return <Navigate to="/dashboard/user" replace />;
  }

  return children;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  // ✅ SPLASH SAME
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Splash />;

  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<PublicLayout><Main /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/trip" element={<PublicLayout><Trip /></PublicLayout>} />
      <Route path="/trip/:pid" element={<PublicLayout><TripDetail /></PublicLayout>} />
      <Route path="/booking/:id" element={<PublicLayout><BookingForm /></PublicLayout>} />
      <Route path="/adventure" element={<PublicLayout><Adventure /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
      <Route path="/signup" element={<PublicLayout><Signup /></PublicLayout>} />

      {/* ================= DASHBOARD ================= */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* ===== USER ROUTES ===== */}
        <Route
          path="user"
          element={
            <ProtectedRoute role="user">
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route index element={<MyBookings/>} />
          <Route path="my-booking" element={<MyBookings />} />
        </Route>

        {/* ===== ADMIN ROUTES ===== */}
        <Route
          path="admin"
          element={
            <ProtectedRoute role="admin">
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route index element={<TripView />} />
          <Route path="view" element={<TripView />} />
          <Route path="add-trip" element={<Booking />} />
          <Route path="update-trip/:id" element={<UpdateTrip />} />
          <Route path="users" element={<User />} />

          <Route path="all-bookings" element={<AllBooking />} />
        </Route>
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

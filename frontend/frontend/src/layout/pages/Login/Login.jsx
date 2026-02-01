import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios.js";
import { saveAuth } from "../../../utils/auth.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await api.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // 🔴 DEBUG: login response
      console.log("LOGIN RESPONSE 👉", res.data);

      if (res.data.success) {
        // 🔥 IMPORTANT: token + user MUST be saved like this
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // (Optional) keep your existing helper
        saveAuth(res.data);

        // 🔴 DEBUG: confirm token saved
        console.log("TOKEN IN LOCALSTORAGE 👉", localStorage.getItem("token"));

        // Role-based redirect
        if (res.data.user.role === "admin") {
          navigate("/dashboard/admin");
        } else {
          navigate("/dashboard/user");
        }
      }
    } catch (error) {
      console.error(
        "LOGIN ERROR 👉",
        error.response?.data || error.message
      );
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="container py-3"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow border-0">
            <div className="card-body p-4 p-md-5">
              <h2
                className="mb-1 fw-bold text-center"
                style={{ color: "rgba(28, 83, 77, 1)" }}
              >
                Welcome back
              </h2>

              <p
                className="text-muted text-center mb-4"
                style={{ color: "rgba(28, 83, 77, 1)" }}
              >
                Login to continue your journey
              </p>

              {message && (
                <div className="alert alert-danger text-center py-2">
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fw-semibold"
                    style={{ color: "rgba(28, 83, 77, 1)" }}
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label fw-semibold"
                    style={{ color: "rgba(28, 83, 77, 1)" }}
                  >
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword((s) => !s)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-lg fw-semibold"
                    style={{
                      backgroundColor: "rgba(28, 83, 77, 1)",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <small className="text-muted">
                  Don't have an account?{" "}
                  <a href="#signup" className="text-decoration-none">
                    Sign up
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import api from "../../api/axios.js";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  // ---------------- Fetch Users ----------------
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token"); // admin must be logged in

      if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const res = await api.get("http://localhost:5000/api/auth/getuser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setUsers(res.data.users || []);
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      console.error("Error fetching users:", err.response?.data || err.message);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- Delete User ----------------
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const token = localStorage.getItem("token");
      await api.delete(`http://localhost:5000/api/auth/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove deleted user from state
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err.response?.data || err.message);
      alert("Failed to delete user");
    }
  };

  // ---------------- Render ----------------
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-danger mt-5">{error}</p>;
  }

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">All Users</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id || index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td className="text-break">{user.email}</td>
                    <td>
                      <span className="badge bg-primary">
                        {user.role || "User"}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          user.status === "Active" ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {user.status || "Inactive"}
                      </span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-warning me-2">
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-3">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;

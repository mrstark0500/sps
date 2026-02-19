import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAdmin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/admin/login",
        { email, password }
      );

      // ✅ STORE TOKEN
      localStorage.setItem("token", response.data.token);

      // ✅ SET ADMIN STATE FROM BACKEND
      setIsAdmin(response.data.isAdmin);

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f4f1ec]">
      <div className="w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-md p-8 md:p-10">

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
              College Login
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Academic & Administrative Access
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="admin@college.edu"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1c1c1c] text-white py-3 rounded-md font-medium tracking-wide hover:bg-black transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Authorized personnel only
            </p>
            <p className="text-xs text-gray-400 mt-1">
              © {new Date().getFullYear()} College Administration
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;

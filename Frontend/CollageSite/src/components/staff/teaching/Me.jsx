import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";

const API_BASE = "http://localhost:3000";

const Me = () => {
  const { isAdmin, loading } = useAuth();

  const [staff, setStaff] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newStaff, setNewStaff] = useState({
    name: "",
    role: "",
    qualification: "",
    experience: "",
    email: "",
    department: "Mechanical",
    imageFile: null,
    preview: "",
  });

  /* ================= AUTO SCROLL TO TOP ================= */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchStaff();
  }, []);

  /* ================= FETCH STAFF ================= */
  const fetchStaff = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/staff`);
      const staffArray = Array.isArray(res.data) ? res.data : res.data.staff;

      const filtered = staffArray.filter(
        (item) => item.department === "Mechanical"
      );

      // reverse so older staff appear first
      setStaff(filtered.reverse());

      console.log("Fetched Mechanical staff:", filtered);
    } catch (err) {
      console.error("Error fetching staff:", err.response?.data || err.message);
    }
  };

  /* ================= DELETE STAFF ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this staff member?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE}/api/staff/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchStaff();
    } catch (err) {
      console.error("Delete failed", err.response?.data || err.message);
    }
  };

  /* ================= IMAGE PICK ================= */
  const handleImagePick = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (newStaff.preview) URL.revokeObjectURL(newStaff.preview);

    setNewStaff({
      ...newStaff,
      imageFile: file,
      preview: URL.createObjectURL(file),
    });
  };

  /* ================= ADD STAFF ================= */
  const handleAddStaff = async () => {
    if (!newStaff.name || !newStaff.role || !newStaff.email) {
      alert("Name, Role, and Email are required");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("name", newStaff.name);
      formData.append("role", newStaff.role);
      formData.append("qualification", newStaff.qualification);
      formData.append("experience", newStaff.experience);
      formData.append("email", newStaff.email);
      formData.append("department", newStaff.department);

      if (newStaff.imageFile) {
        formData.append("image", newStaff.imageFile);
      }

      const res = await axios.post(`${API_BASE}/api/staff`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // append new staff to the end
      setStaff((prev) => [...prev, res.data]);

      setShowForm(false);
      setNewStaff({
        name: "",
        role: "",
        qualification: "",
        experience: "",
        email: "",
        department: "Mechanical",
        imageFile: null,
        preview: "",
      });
    } catch (err) {
      console.error("Add staff failed", err.response?.data || err.message);
    }
  };

  /* ================= HELPER ================= */
  const getStaffImage = (imagePath) => {
    if (!imagePath) return "/default.png";

    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }

    return `${API_BASE}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
  };

  if (loading) return null;

  return (
    <section className="bg-gray-50 py-14 mt-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Mechanical Department
          </h2>
          <p className="text-gray-600 mt-2">
            Engineering strength through design, mechanics & innovation
          </p>
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member) => (
            <div
              key={member._id}
              className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-6 text-center"
            >
              {isAdmin && (
                <button
                  onClick={() => handleDelete(member._id)}
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                >
                  🗑
                </button>
              )}

              <div className="flex justify-center">
                <img
                  src={getStaffImage(member.image)}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-blue-100"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {member.name}
              </h3>

              <p className="text-sm text-blue-600 font-medium mt-1">
                {member.role}
              </p>

              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p><b>Qualification:</b> {member.qualification}</p>
                <p><b>Experience:</b> {member.experience}</p>
              </div>

              <div className="mt-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}

          {/* ADD CARD */}
          {isAdmin && (
            <div
              onClick={() => setShowForm(true)}
              className="cursor-pointer bg-white border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center hover:bg-blue-50 transition"
            >
              <span className="text-4xl text-blue-500">+</span>
            </div>
          )}
        </div>

        {/* ADD STAFF MODAL */}
        {showForm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">
                Add Staff Member
              </h3>

              {/* Image Picker */}
              <div className="flex flex-col items-center mb-4">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImagePick}
                  />
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center overflow-hidden hover:bg-blue-50">
                    {newStaff.preview ? (
                      <img
                        src={newStaff.preview}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-blue-500 text-2xl">+</span>
                    )}
                  </div>
                </label>
                <p className="text-xs text-gray-500 mt-2">Upload Photo</p>
              </div>

              {/* Inputs */}
              {["name", "role", "qualification", "experience", "email"].map(
                (field) => (
                  <input
                    key={field}
                    placeholder={field}
                    value={newStaff[field]}
                    onChange={(e) =>
                      setNewStaff({ ...newStaff, [field]: e.target.value })
                    }
                    className="w-full mb-3 px-3 py-2 border rounded"
                  />
                )
              )}

              {/* Fixed Department */}
              <input
                value={newStaff.department}
                disabled
                className="w-full mb-3 px-3 py-2 border rounded bg-gray-100"
              />

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddStaff}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Me;

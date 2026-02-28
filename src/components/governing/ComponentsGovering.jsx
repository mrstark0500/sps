import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

const API_BASE = "http://localhost:3000";

export default function GoverningBody() {
  const { isAdmin } = useAuth();

  const [members, setMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    type: "",
    image: null,
    preview: "",
  });

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/governing`);
      // ✅ Reverse the fetched data to show oldest first
      const reversedStaff = (res.data.staff || []).slice().reverse();
      setMembers(reversedStaff);
    } catch (err) {
      console.error("Fetch governing failed:", err.response?.data || err.message);
    }
  };

  /* ================= IMAGE PICK ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (newMember.preview) URL.revokeObjectURL(newMember.preview);

    setNewMember({
      ...newMember,
      image: file,
      preview: URL.createObjectURL(file),
    });
  };

  /* ================= ADD MEMBER ================= */
  const handleAddMember = async () => {
    if (!newMember.name || !newMember.role || !newMember.type) {
      alert("All fields are required");
      return;
    }

    if (!newMember.image) {
      alert("Image is required");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("name", newMember.name);
      formData.append("role", newMember.role);
      formData.append("type", newMember.type);
      formData.append("image", newMember.image);

      const res = await axios.post(`${API_BASE}/api/governing`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // ✅ Append the new member at the end so it appears last
      setMembers((prev) => [...prev, res.data.staff]);

      setShowForm(false);
      setNewMember({
        name: "",
        role: "",
        type: "",
        image: null,
        preview: "",
      });
    } catch (err) {
      console.error("Add governing failed:", err.response?.data || err.message);
    }
  };

  /* ================= DELETE MEMBER ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this member?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE}/api/governing/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMembers((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
    }
  };

  /* ================= FILTER ================= */
  const governing = members.filter((m) => m.type === "governing");
  const local = members.filter((m) => m.type === "non-teaching");

  /* ================= CARD GRID ================= */
  const Grid = ({ data }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((m) => (
        <div
          key={m._id}
          className="relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition p-6 text-center"
        >
          {isAdmin && (
            <button
              onClick={() => handleDelete(m._id)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700"
              title="Delete"
            >
              🗑
            </button>
          )}

          <div className="flex justify-center">
            <img
              src={m.image || "/default.png"}
              alt={m.name}
              className="w-28 h-28 rounded-full object-cover border-4 border-indigo-100"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-4">
            {m.name}
          </h3>

          <p className="text-sm text-indigo-600 font-medium mt-1">
            {m.role}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gray-100 mt-40">
      <div className="max-w-7xl mx-auto px-4 space-y-24">

        {/* GOVERNING BODY */}
        <div>
          <div className="mb-12 text-center relative">
            <h2 className="text-3xl font-bold text-gray-900">
              Governing Body
            </h2>
            <p className="text-gray-600 mt-2">
              Visionary leaders guiding our institution
            </p>

            {isAdmin && (
              <button
                onClick={() => setShowForm(true)}
                className="absolute right-0 top-0 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              >
                + Add
              </button>
            )}
          </div>

          <Grid data={governing} />
        </div>

        {/* LOCAL BODY */}
        <div>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Local Government Body
            </h2>
            <p className="text-gray-600 mt-2">
              Community representatives and local authorities
            </p>
          </div>

          <Grid data={local} />
        </div>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Add Member
            </h3>

            <div className="flex flex-col items-center mb-4">
              {newMember.preview && (
                <img
                  src={newMember.preview}
                  className="w-32 h-32 rounded-full mb-3 object-cover"
                  alt="preview"
                />
              )}
              <input type="file" onChange={handleImageChange} />
            </div>

            <input
              placeholder="Full Name"
              className="w-full border rounded px-3 py-2 mb-3"
              value={newMember.name}
              onChange={(e) =>
                setNewMember({ ...newMember, name: e.target.value })
              }
            />

            <input
              placeholder="Role"
              className="w-full border rounded px-3 py-2 mb-3"
              value={newMember.role}
              onChange={(e) =>
                setNewMember({ ...newMember, role: e.target.value })
              }
            />

            <select
              className="w-full border rounded px-3 py-2 mb-4"
              value={newMember.type}
              onChange={(e) =>
                setNewMember({ ...newMember, type: e.target.value })
              }
            >
              <option value="">Select Type</option>
              <option value="governing">Governing</option>
              <option value="non-teaching">Local</option>
            </select>

            <div className="flex justify-end gap-3">
              <button onClick={() => setShowForm(false)}>Cancel</button>
              <button
                onClick={handleAddMember}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

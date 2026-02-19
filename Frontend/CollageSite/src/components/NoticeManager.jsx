import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const API_BASE = "http://localhost:3000";

export default function NoticeManager() {
  const { isAdmin, loading: authLoading } = useAuth();

  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ---------- BLOCK NON-ADMINS ---------- */
  if (!authLoading && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  /* ---------- FETCH NOTICES ---------- */
  const fetchNotices = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/notice`);
      setNotices(res.data.notices || []);
    } catch (err) {
      console.error("Fetch notices error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    if (isAdmin) fetchNotices();
  }, [isAdmin]);

  /* ---------- UPLOAD ---------- */
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      alert("Please provide title and PDF file");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);

      await axios.post(`${API_BASE}/api/notice`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTitle("");
      setFile(null);
      fetchNotices();
    } catch (err) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- DELETE ---------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this notice?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE}/api/notice/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotices();
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
    }
  };

  if (authLoading) {
    return <p className="mt-40 text-center">Checking permissions...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-32">
      <h2 className="text-2xl font-bold mb-6">Notice Manager (Admin Only)</h2>

      {/* UPLOAD FORM */}
      <form
        onSubmit={handleUpload}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* NOTICE LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {notices.length === 0 && (
          <p className="text-gray-500 col-span-full">No notices available</p>
        )}

        {notices.map((notice) => (
          <div
            key={notice._id}
            className="border rounded-lg p-4 flex justify-between items-center shadow-sm hover:shadow-lg transition"
          >
            <div>
              <p className="font-semibold">{notice.title}</p>
              <a
                href={notice.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Open PDF
              </a>
            </div>

            <button
              onClick={() => handleDelete(notice._id)}
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

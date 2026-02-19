import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:3000";

export default function GalleryMasonry({ isAdmin = true }) {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");

  // Fetch images
  const fetchImages = async (isMounted = true) => {
    try {
      const res = await axios.get(`${API_BASE}/api/image`);
      if (isMounted) {
        setImages(res.data.images || []);
      }
    } catch (err) {
      console.error("Fetch images error:", err.response?.data || err.message);
    }
  };

  // SAFE useEffect
  useEffect(() => {
    let isMounted = true;

    fetchImages(isMounted);

    return () => {
      isMounted = false; // cleanup
    };
  }, []);

  // Add image
  const handleAddImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !selectedYear) return alert("Please select a year.");

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("image", file);
      formData.append("name", file.name);
      formData.append("year", selectedYear);

      await axios.post(`${API_BASE}/api/image`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSelectedYear("");
      fetchImages(true);
    } catch (err) {
      console.error("Add image error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Upload failed");
    }
  };

  // Delete image
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE}/api/image/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchImages(true);
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
    }
  };

  // Group images by year
  const groupedImages = images.reduce((acc, img) => {
    acc[img.year] = acc[img.year] || [];
    acc[img.year].push(img);
    return acc;
  }, {});

  return (
    <section className="w-full bg-gray-50 py-16 mt-30">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative">
            Gallery
            <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 h-1 w-24 bg-indigo-500 rounded-full"></span>
          </h2>

          {isAdmin && (
            <div className="flex gap-2 items-center">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 text-sm px-2 py-1 rounded"
              >
                <option value="">Year</option>
                {[2025, 2024, 2023, 2022].map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>

              <label className="bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer text-sm hover:bg-indigo-700 transition">
                + Add
                <input type="file" accept="image/*" hidden onChange={handleAddImage} />
              </label>
            </div>
          )}
        </div>

        {/* Images */}
        {Object.keys(groupedImages)
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year} className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-2">
                {year}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {groupedImages[year].map((img) => (
                  <div
                    key={img._id}
                    className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group cursor-pointer"
                  >
                    <img
                      src={img.image}
                      alt={img.name}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      onClick={() => setActiveIndex(img.image)}
                    />

                    {isAdmin && (
                      <button
                        onClick={() => handleDelete(img._id)}
                        className="absolute top-2 right-2 bg-black/70 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {activeIndex && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden">
            <img src={activeIndex} alt="" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
}

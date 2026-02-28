import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.jpg";

const API_BASE = "http://localhost:3000";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [notices, setNotices] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  /* ---------- SCROLL EFFECT ---------- */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- FETCH NOTICES ---------- */
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/notice`)
      .then((res) => setNotices(res.data.notices || []))
      .catch((err) =>
        console.error("Fetch notices error:", err.response?.data || err.message)
      );
  }, []);

  const baseLi = "border-x-2 px-2 transition hover:text-blue-600";

  const liStyle = ({ isActive }) =>
    `${baseLi} ${
      scrolled ? "border-gray-700 text-black" : "border-white text-white"
    } ${isActive ? "text-blue-600" : ""}`;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div
        className={`fixed top-0 z-50 flex w-full px-4 min-[380px]:px-6 py-4 gap-6 min-[380px]:gap-10
        backdrop-blur-sm transition-all duration-300
        ${scrolled ? "bg-[#ebf9ff]/90 shadow-lg" : "bg-transparent"}`}
      >
        {/* ---------- LEFT LOGO ---------- */}
        <div className="flex items-center gap-3 px-2 min-[380px]:px-6 py-2 rounded-bl-full">
          <img
            src={logo}
            alt="Satara Logo"
            className="w-10 h-10 min-[380px]:w-14 min-[380px]:h-14
            rounded-full object-cover border border-gray-300"
          />
          <h3
            className={`font-medium transition-colors duration-300
            text-[15px] min-[380px]:text-lg
            ${scrolled ? "text-black" : "text-white"}`}
          >
            Satara Polytechnic Satara, Satara
          </h3>
        </div>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="hidden lg:flex flex-wrap items-center gap-7 text-[17px] font-semibold ml-auto">
          <li><NavLink to="/" className={liStyle}>Home</NavLink></li>
          <li><NavLink to="/governing-body" className={liStyle}>Governing Body</NavLink></li>
          <li><NavLink to="/contact" className={liStyle}>Contact</NavLink></li>
          <li><NavLink to="/placement" className={liStyle}>Placement</NavLink></li>
          <li><NavLink to="/gallery" className={liStyle}>Gallery</NavLink></li>
          <li><NavLink to="/grievance" className={liStyle}>Grievances</NavLink></li>
          <li><NavLink to="/admission" className={liStyle}>Admission Process</NavLink></li>

          {/* DEPARTMENTS */}
          <li className="relative group before:absolute before:top-full before:left-0 before:w-full before:h-4 before:content-['']">
            <span className={liStyle({})}>Departments</span>
            <ul className="absolute left-0 mt-3 w-56 rounded-2xl bg-white text-black shadow-lg border
              opacity-0 pointer-events-none translate-y-2
              group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
              transition-all duration-300 ease-out">
              {["Computer","Chemical","ENTC","Mechanical","Electrical","Automobile","GeneralScience"].map(d => (
                <li key={d} className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to={`/staff/teaching/${d}`} className="block hover:text-blue-600">
                    {d.toUpperCase()} Dept
                  </NavLink>
                </li>
              ))}
              <li className="px-4 py-2 hover:bg-gray-100">
                <NavLink to="/PrincipalDesk" className="block hover:text-blue-600">
                  Principal's Desk
                </NavLink>
              </li>
            </ul>
          </li>

          <li><NavLink to="/about" className={liStyle}>About Us</NavLink></li>

          {/* NOTICE */}
          <li className="relative group before:absolute before:top-full before:left-0 before:w-full before:h-4 before:content-['']">
            <span className={liStyle({})}>Notice</span>
            <ul className="absolute left-0 mt-3 w-72 rounded-2xl bg-white shadow-lg border
              opacity-0 pointer-events-none translate-y-2
              group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
              transition-all duration-300 ease-out">
              <li className="px-4 py-3 border-b bg-gray-50 font-semibold">
                <NavLink to="/notice" className="block hover:text-blue-600">
                  📌 Notice Manager
                </NavLink>
              </li>
              {notices.length === 0 && (
                <li className="px-4 py-3 text-gray-500">No notices available</li>
              )}
              {notices.map(n => (
                <li key={n._id} className="px-4 py-2 hover:bg-gray-100">
                  <a href={n.fileUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600">
                    📄 {n.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* ---------- HAMBURGER ---------- */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setMenuOpen(true)}
            className={`text-3xl ${scrolled ? "text-black" : "text-white"}`}
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#ebf9ff]
        shadow-lg overflow-y-auto transform transition-transform duration-300 z-50
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-3xl">
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 text-lg font-semibold">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/governing-body" onClick={() => setMenuOpen(false)}>Governing Body</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/placement" onClick={() => setMenuOpen(false)}>Placement</NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/grievance" onClick={() => setMenuOpen(false)}>Grievances</NavLink>
          <NavLink to="/admission" onClick={() => setMenuOpen(false)}>Admission Process</NavLink>

          <li>
            <span onClick={() => setDeptOpen(!deptOpen)} className="cursor-pointer">
              Departments ▼
            </span>
            <ul className={`ml-4 mt-2 flex flex-col gap-2 ${deptOpen ? "block" : "hidden"}`}>
              {["Computer","Chemical","ENTC","Mechanical","Electrical","Automobile","GeneralScience"].map(d => (
                <NavLink
                  key={d}
                  to={`/staff/teaching/${d}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {d} Dept
                </NavLink>
              ))}
              <NavLink to="/PrincipalDesk" onClick={() => setMenuOpen(false)}>
                Principal's Desk
              </NavLink>
            </ul>
          </li>

          <NavLink to="/notice" onClick={() => setMenuOpen(false)}>
            📌 Notice Manager
          </NavLink>

          {notices.map(n => (
            <a
              key={n._id}
              href={n.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              📄 {n.title}
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;

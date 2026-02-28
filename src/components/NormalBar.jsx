import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.jpg";

const API_BASE = "http://localhost:3000"; // backend URL

function NormalBar() {
  const [notices, setNotices] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  const baseLink =
    "border-x-2 px-2 border-gray-300 transition hover:text-blue-600";

  const activeLink = ({ isActive }) =>
    `${baseLink} ${isActive ? "text-blue-600" : "text-black"}`;

  /* ---------- FETCH NOTICES ---------- */
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/notice`)
      .then((res) => setNotices(res.data.notices || []))
      .catch((err) =>
        console.error("Fetch notices error:", err.response?.data || err.message)
      );
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full bg-[#ebf9ff] shadow-lg">
      {/* ---------- DESKTOP MENU ---------- */}
      <div className="hidden lg:flex w-full px-6 py-4 gap-10">
        {/* LEFT */}
        <div className="flex items-center gap-4 px-6 py-2 rounded-bl-full">
          <img
            src={logo}
            alt="Satara Logo"
            className="w-15 h-15 rounded-full object-cover border border-gray-300"
          />
          <h3 className="text-lg font-medium text-black">
            Satara Polytechnic Satara, Satara
          </h3>
        </div>

        {/* MENU */}
        <ul className="flex flex-wrap items-center gap-7 text-[17px] font-semibold ml-auto">
          <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
          <li><NavLink to="/governing-body" className={activeLink}>Governing Body</NavLink></li>
          <li><NavLink to="/contact" className={activeLink}>Contact</NavLink></li>
          <li><NavLink to="/placement" className={activeLink}>Placement</NavLink></li>
          <li><NavLink to="/gallery" className={activeLink}>Gallery</NavLink></li>
          <li><NavLink to="/grievance" className={activeLink}>Grievances</NavLink></li>
          <li><NavLink to="/admission" className={activeLink}>Admission Process</NavLink></li>

          {/* Departments */}
          <li className="relative group">
            <span className={`${baseLink} text-black cursor-pointer`}>Departments</span>
            <ul className="absolute left-0 mt-3 w-56 rounded-2xl bg-white shadow-lg border
              opacity-0 pointer-events-none translate-y-2
              group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
              transition-all duration-300 ease-out">
              {["Computer","Chemical","ENTC","Mechanical","General","Electrical","Automobile"].map(dept => (
                <li key={dept} className="px-4 py-2 hover:bg-gray-100 transition-colors">
                  <NavLink to={`/staff/teaching/${dept.toLowerCase()}`} className="block hover:text-blue-600">
                    {dept} Dept
                  </NavLink>
                </li>
              ))}
              <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                <NavLink to="/PrincipalDesk" className="block hover:text-blue-600">Principal's Desk</NavLink>
              </li>
            </ul>
          </li>

          <li><NavLink to="/about" className={activeLink}>About Us</NavLink></li>

          {/* Notices */}
          <li className="relative group">
            <span className={`${baseLink} text-black cursor-pointer`}>Notice</span>
            <ul className="absolute left-0 mt-3 w-72 rounded-2xl bg-white shadow-lg border
              opacity-0 pointer-events-none translate-y-2
              group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
              transition-all duration-300 ease-out">
              <li className="px-4 py-3 border-b bg-gray-50 hover:bg-gray-100 font-semibold">
                <NavLink to="/notice" className="block hover:text-blue-600">📌 Notice Manager</NavLink>
              </li>
              {notices.length === 0 && <li className="px-4 py-2 text-gray-500">No notices available</li>}
              {notices.map(notice => (
                <li key={notice._id} className="px-4 py-2 hover:bg-gray-100 transition-colors">
                  <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-blue-600">
                    📄 {notice.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* ---------- HAMBURGER MENU (≤ 800px) ---------- */}
      <div className="lg:hidden flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full border border-gray-300 object-cover" />
          <h3 className="text-base font-medium text-black">Satara Polytechnic</h3>
        </div>
        <button className="text-3xl p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ---------- SLIDE-IN MOBILE MENU ---------- */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#ebf9ff] shadow-lg overflow-y-auto transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close button inside menu */}
        <div className="flex justify-end px-4 py-4">
          <button onClick={() => setMenuOpen(false)} className="text-3xl p-2">
            <HiX />
          </button>
        </div>

        <ul className="flex flex-col mt-4 gap-4 px-6 text-lg">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</NavLink></li>
          <li><NavLink to="/governing-body" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Governing Body</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</NavLink></li>
          <li><NavLink to="/placement" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Placement</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Gallery</NavLink></li>
          <li><NavLink to="/grievance" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Grievances</NavLink></li>
          <li><NavLink to="/admission" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Admission Process</NavLink></li>

          {/* Departments Dropdown */}
          <li>
            <span className="font-semibold cursor-pointer" onClick={() => setDeptOpen(!deptOpen)}>Departments ▼</span>
            <ul className={`flex flex-col gap-2 mt-2 ml-2 ${deptOpen ? "block" : "hidden"}`}>
              {["Computer","Chemical","ENTC","Mechanical","General","Electrical","Automobile"].map(dept => (
                <li key={dept}>
                  <NavLink to={`/staff/teaching/${dept.toLowerCase()}`} className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                    {dept} Dept
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/PrincipalDesk" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                  Principal's Desk
                </NavLink>
              </li>
            </ul>
          </li>

          <li><NavLink to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About Us</NavLink></li>

          {/* Notices Dropdown */}
          <li>
            <span className="font-semibold cursor-pointer">Notice ▼</span>
            <ul className="flex flex-col gap-2 mt-2 ml-2">
              <li><NavLink to="/notice" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">📌 Notice Manager</NavLink></li>
              {notices.length === 0 && <li className="text-gray-500">No notices available</li>}
              {notices.map(notice => (
                <li key={notice._id}>
                  <a href={notice.fileUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>
                    📄 {notice.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NormalBar;

import React from "react";
import { NavLink } from "react-router-dom";

const Ending = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 sm:px-6 lg:px-12 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* Experience More */}
        <div>
          <h2 className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            EXPERIENCE MORE.
          </h2>
          <p className="text-sm sm:text-base mb-2 sm:mb-4">FOLLOW US</p>
        </div>

        {/* Notice Board */}
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">Notice Board</h3>
          <p className="text-sm sm:text-base font-semibold">SPS Campus :</p>
          <p className="text-sm sm:text-base mb-2 sm:mb-4">
            near NH - 4, near Khindwadi, Songaon, Maharashtra 415519
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">Quick Links</h3>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li>
              <NavLink to="/about" className="hover:text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/learnmore" className="hover:text-white">
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink to="/admission" className="hover:text-white">
                Admissions
              </NavLink>
            </li>
            <li>
              <NavLink to="/placement" className="hover:text-white">
                Placements
              </NavLink>
            </li>
          </ul>
        </div>

        {/* More Info */}
        <div>
          <h3 className="text-white font-semibold text-sm sm:text-base mb-2 sm:mb-3">More Info</h3>
          <ul className="space-y-1 text-xs sm:text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Infrastructure Video (Satara)
              </a>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/grievance" className="hover:text-white">
                Grievances Cell
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6 sm:my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4 sm:gap-0">
        <div className="text-center sm:text-left">
          <p>Office Timings:</p>
          <p>Monday to Friday | 10 am to 5 pm</p>
        </div>

        <div className="text-center">
          <p>+91 79860841722</p>
          <p>+91 9960182230</p>
        </div>

        <div className="text-center sm:text-right">
          <p>All Rights Reserved © SPS, 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Ending;

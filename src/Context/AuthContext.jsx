import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // STAFF STATE
  const [staff, setStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);

  // ================= AUTH CHECK =================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAdmin(true);   // ✅ token exists → admin logged in
    } else {
      setIsAdmin(false);
    }

    setLoading(false);
  }, []);

  // ================= FETCH STAFF =================
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/staff")
      .then((response) => {
        // ✅ backend returns { staff: [] }
        setStaff(response.data.staff);
        setFilteredStaff(response.data.staff);
      })
      .catch((error) => {
        console.error(
          "Error fetching staff:",
          error.response?.data || error.message
        );
      });
  }, []);

  // ================= FILTER STAFF =================
  const filterStaffByDepartment = (department) => {
    if (department === "all") {
      setFilteredStaff(staff);
    } else {
      const filtered = staff.filter(
        (member) => member.department === department
      );
      setFilteredStaff(filtered);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        // auth
        isAdmin,
        setIsAdmin,
        loading,

        // staff
        staff,
        filteredStaff,
        filterStaffByDepartment,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ================= CUSTOM HOOK =================
export const useAuth = () => useContext(AuthContext);

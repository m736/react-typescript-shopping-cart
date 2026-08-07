import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { usetheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
// NavLink is used when the user clicks a link.
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-200";
  const { theme, toggleTheme } = usetheme();
  const navigate=useNavigate()
  const handleLogout=()=>{
    logout();
    navigate("/login")
  }
  return (
    <nav className="bg-blue-500 text-white px-6 py-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-extrabold">
          <h1>MyApp</h1>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          {" "}
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>
          {isLoggedIn ? (
            <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={handleLogout}>Logout</button>
          ) : (
            <NavLink to="/login" className={activeClass}>
              Login
            </NavLink>
          )}
          <button
            onClick={toggleTheme}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          ☰
        </button>{" "}
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>

          <button
            onClick={toggleTheme}
            className="bg-white text-blue-600 px-3 py-1 rounded w-fit"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

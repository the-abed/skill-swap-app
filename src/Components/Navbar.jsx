import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import skillSwap2 from "../assets/SkillSwapLogo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      {[
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about-us" },
      ].map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition text-center ${
                isActive
                  ? "bg-transparent text-blue-600 dark:text-blue-400 hover:scale-105 "
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border-none hover:scale-105"
              }`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
      {user && (
        <li>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition text-center ${
                isActive
                  ? "bg-transparent text-blue-600 dark:text-blue-400 hover:scale-105 "
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 border-none hover:scale-105"
              }`
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <nav className="backdrop-blur-md bg-white/70 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 w-full z-50">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={skillSwap2} alt="SkillSwap Logo" className="w-9 h-9" />
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              SkillSwap
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6">{navLinks}</ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user.displayName || ""}
                >
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co.com/TDYt0xK7/296fe121-5dfa-43f4-98b5-db50019738a7.jpg"
                    }
                    alt="User"
                    className="w-9 h-9 rounded-full border-2 border-blue-500 cursor-pointer"
                    onClick={() => {
                      navigate("/my-profile");
                    }}
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="hidden sm:block px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex gap-2">
                <Link
                  to="/auth/login"
                  className="px-3 py-1.5 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <ul
            className=" w-6/12
    md:hidden flex flex-col space-y-2
    bg-white dark:bg-gray-900 
    border-t border-gray-200 dark:border-gray-800
    px-4 py-3 mt-2 rounded-lg shadow-lg transition-all
     max-w-xs 
    ml-auto                     
  "
          >
            <div className="w-full text-center  space-y-2 ">{navLinks}</div>

            {user ? (
              <li>
                <button
                  onClick={handleLogOut}
                  className="
            btn w-full border-none
              block px-3 py-2 rounded-md
              bg-green-500 text-white
              dark:bg-green-600 dark:text-white
              shadow-sm hover:shadow-lg
              hover:scale-105
              hover:bg-green-600 dark:hover:bg-green-700
              transition transform duration-200
          "
                >
                  Log Out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/auth/login"
                    className="btn border-none
              block px-3 py-2 rounded-md
              bg-blue-500 text-white
              dark:bg-blue-600 dark:text-white
              shadow-sm hover:shadow-lg
              hover:scale-105
              hover:bg-blue-600 dark:hover:bg-blue-700
              transition transform duration-200
            "
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/register"
                    className="btn
              block px-3 py-2 rounded-md
              bg-green-500 text-white
              dark:bg-green-600 dark:text-white
              shadow-sm hover:shadow-lg
              hover:scale-105
              hover:bg-green-600 dark:hover:bg-green-700
              transition transform duration-200 border-none
            "
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

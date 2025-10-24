import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import skillSwap2 from "../assets/SkillSwapLogo.png";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `px-3 py-2 rounded-md font-medium ${
              isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
            }`
          }
        >
          Skills
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white/90 backdrop-blur-md  z-50 shadow-sm">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={skillSwap2} alt="SkillSwap Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-gray-800">SkillSwap</span>
          </Link>
        </div>

        {/* Center: Links (Desktop) */}
        <ul className="hidden lg:flex space-x-4">{navLinks}</ul>

        {/* Right: Auth */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || ""}>
                <img
                  src={user.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-blue-500 cursor-pointer"
                />
              </div>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="hidden sm:flex gap-2">
              <Link
                to="/auth/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
              <Link
                to="/auth/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
              >
                Login
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <div className="lg:hidden relative">
            {/* Hamburger Button */}
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {open && (
              <ul className="absolute right-0 mt-2 p-3 shadow-lg bg-white rounded-md space-y-2 w-48 z-50">
                {/* Use JSX directly instead of .map() */}
                {navLinks}
                {user ? (
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/auth/login"
                        className="block px-3 py-2 rounded-md hover:bg-gray-100"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth/register"
                        className="block px-3 py-2 rounded-md hover:bg-gray-100"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

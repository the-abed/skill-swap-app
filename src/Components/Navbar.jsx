import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo1 from "../assets/logo1.png";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You logged out successfully");
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Left: Logo and Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-semibold"
          >
            {navLinks}
            {/* Show login/logout options inside mobile dropdown too */}
            {user ? (
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/auth/login">Login</Link>
                </li>
                <li>
                  <Link to="/auth/register">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
          <img className="w-12 md:w-14" src={logo1} alt="SkillSwap Logo" />
          <span className=" sm:block">SkillSwap</span>
        </Link>
      </div>

      {/* Center: Links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navLinks}</ul>
      </div>

      {/* Right: Auth Buttons */}
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || ""}
            >
              <img
                src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt="User Avatar"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-primary cursor-pointer"
              />
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-secondary btn-sm md:btn-md text-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <div className="hidden sm:flex gap-2">
            <Link to="/auth/register" className="btn btn-secondary btn-sm md:btn-md text-white">
              Sign Up
            </Link>
            <Link to="/auth/login" className="btn btn-outline btn-sm md:btn-md">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

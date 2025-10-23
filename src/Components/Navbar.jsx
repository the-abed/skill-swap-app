import React, { use, useContext } from "react";
import { Link, NavLink } from "react-router";
import logo1 from "../assets/logo1.png";
import { AuthContext } from "../Provider/AuthProvider";
// Example: import your AuthContext if you’re using Firebase auth
// import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user,logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("You logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(user)
  // For demo purpose, let’s mock a user:
  // const user = {
  //   displayName: "John Doe",
  //   photoURL: "https://i.pravatar.cc/150?img=3",
  // };

  const link = (
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
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left section */}
      <div className="navbar-start">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>

        <a className="btn btn-ghost text-2xl font-bold">
          <img className="w-[70px]" src={logo1} alt="SkillSwap Logo" />
          SkillSwap
        </a>
      </div>

      {/* Center section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{link}</ul>
      </div>

      {/* Right section */}
      <div className="navbar-end">
        <div className="relative group">
          <div
            className="tooltip tooltip-bottom flex gap-5"
            data-tip={`${user ? user.displayName: ""}`}
          >
            <img
              src={user?.photoURL || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-primary cursor-pointer"
            />
          </div>
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-secondary px-10 ml-3"
          >
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-secondary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

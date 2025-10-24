import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        return updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...createdUser, displayName: name, photoURL: photo });
            navigate("/");
            alert("Account created successfully");
          })
          .catch((updateErr) => {
            console.error("Profile update error:", updateErr);
            setUser(createdUser);
            setError("Account created but failed to update profile.");
          });
      })
      .catch((err) => {
        console.error("Create user error:", err);
        setError(err.message || "Failed to create account.");
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        alert(`Welcome ${result.user.displayName}!`);
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-800 ">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Create an Account 
        </h2>

        <form onSubmit={handleRegister} className="space-y-5 ">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full input bg-white/20 text-white border-none placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="w-full input bg-white/20 text-white border-none placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full input bg-white/20 text-white border-none placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-white mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full input bg-white/20 text-white border-none placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white/80 hover:text-pink-300"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-center">{error}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="btn w-full bg-pink-500 hover:bg-pink-600 text-white font-bold border-none"
          >
            Sign Up
          </button>

         

          {/* Google Sign-In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn w-full bg-white text-gray-800 font-semibold hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-xl text-pink-600" />
            Continue with Google
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-gray-200 font-semibold">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-pink-300 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

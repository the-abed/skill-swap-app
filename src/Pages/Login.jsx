import React, { useRef, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, googleLogin, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();

  // Handle Email Login
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError("Invalid email or password.");
      });
  };

  // Google Login
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        alert(`Welcome ${result.user.displayName}!`);
        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };

  // Forgot Password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please enter your email first!");
      return;
    }
    resetPassword(email)
      .then(() => alert("Password reset email sent!"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
     <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-8 border border-white/10">
  <h2 className="text-3xl font-extrabold text-center text-pink-400 mb-6">
    Welcome Back 
  </h2>

  <form onSubmit={handleLogIn} className="space-y-5">
    {/* Email */}
    <div>
      <label className="block text-sm font-semibold text-gray-200 mb-1">
        Email
      </label>
      <input
        ref={emailRef}
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full input bg-gray-800/80 text-gray-100 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        required
      />
    </div>

    {/* Password */}
    <div>
      <label className="block text-sm font-semibold text-gray-200 mb-1">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter your password"
          className="w-full input bg-gray-800/80 text-gray-100 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-300 hover:text-pink-400"
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
      </div>
      <p
        onClick={handleForgetPassword}
        className="text-sm text-pink-400 hover:text-pink-300 mt-2 cursor-pointer text-right"
      >
        Forgot password?
      </p>
    </div>

    {/* Error Message */}
    {error && <p className="text-red-500 text-center">{error}</p>}

    {/* Login Button */}
    <button
      type="submit"
      className="btn w-full bg-pink-600 hover:bg-pink-700 text-white font-bold border-none transition-transform hover:scale-105"
    >
      Login
    </button>

    {/* Divider */}
    <div className="divider text-gray-400">OR</div>

    {/* Google Login */}
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="btn w-full bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 flex items-center justify-center gap-2"
    >
      <FaGoogle className="text-xl text-pink-600" />
      Continue with Google
    </button>
  </form>

  {/* Sign Up Link */}
  <p className="mt-6 text-center text-gray-300 font-semibold">
    Don’t have an account?{' '}
    <Link to="/auth/register" className="text-pink-400 hover:underline">
      Sign Up
    </Link>
  </p>
</div>

    </div>
  );
};

export default Login;

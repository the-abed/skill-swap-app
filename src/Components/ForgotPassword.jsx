import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromLogin = location.state?.email || "";
  const [email, setEmail] = useState(emailFromLogin);

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // Show success toast
    toast.success("Redirecting to Gmail...");

    // Delay slightly so user can see the toast
    setTimeout(() => {
      const gmailLink = `https://mail.google.com/mail/${email}`;
      window.open(gmailLink, "_blank");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-neutral-100 dark:bg-neutral-900">
      <Toaster position="top-center" />
      <div className="bg-white dark:bg-neutral-800 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md p-8 space-y-4">
        <h2 className="text-3xl font-extrabold text-center text-neutral-900 dark:text-neutral-100 mb-2">
          Forgot Password?
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-4">
          Don’t worry, we’ll help you reset it.
        </p>

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 transition-all"
        />

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
        >
          Reset via Gmail
        </button>

        {/* Back to Login Button */}
        <button
          onClick={() => navigate("/auth/login")}
          className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

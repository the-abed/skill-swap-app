import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateUserProfile(formData.name, formData.photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        setEditMode(false);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
   <div className="my-8">
  <Toaster position="top-center" reverseOrder={false} />

  {/* Profile Card */}
  <div className="max-w-5xl mx-auto my-10 p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-200">
    
    <div className="flex flex-col md:flex-row items-center gap-10 my-5">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={user?.photoURL || "https://i.ibb.co/5Y3mY6b/default-avatar.png"}
          alt="User Avatar"
          className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          {user?.displayName || "Anonymous User"}
        </h2>
        <p className="text-gray-500 text-lg mb-4">{user?.email || "No email available"}</p>

        <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
          <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            Member since: {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toDateString() : "N/A"}
          </span>
          <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
            Last login: {user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toDateString() : "N/A"}
          </span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {user?.bio || "Welcome to your SkillSwap profile! Manage your account, update your info, and keep growing your skills."}
        </p>

        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>

    {/* Edit Form */}
    {editMode && (
      <form onSubmit={handleUpdateProfile} className="mt-10 max-w-md mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
          />
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="w-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="w-1/2 border border-gray-400 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    )}

    {/* Welcome Section */}
    <div className="max-w-5xl mx-auto my-6 p-6 text-center bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 rounded-2xl shadow-inner">
      <h3 className="text-2xl font-bold text-purple-700 mb-2">Welcome Back!</h3>
      <p className="text-gray-700">
        Check your recently booked skills, explore new learning opportunities, and keep growing your talent!
      </p>
    </div>
  </div>
</div>

  );
};

export default MyProfile;
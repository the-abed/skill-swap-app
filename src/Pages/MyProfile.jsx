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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50">
      
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-2xl rounded-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-start">
            <img
              src={user?.photoURL || "https://i.ibb.co/5Y3mY6b/default-avatar.png"}
              alt="User Avatar"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-gradient-to-r border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2">
              {user?.displayName || "Anonymous User"}
            </h2>
            <p className="text-gray-600 text-lg mb-4">{user?.email || "No email available"}</p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-700 mb-4">
              <span className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300">
                Member since:{" "}
                {user?.metadata?.creationTime
                  ? new Date(user.metadata.creationTime).toDateString()
                  : "N/A"}
              </span>
              <span className="bg-teal-100 hover:bg-teal-200 px-4 py-2 rounded-full font-semibold shadow-md transition-all duration-300">
                Last login:{" "}
                {user?.metadata?.lastSignInTime
                  ? new Date(user.metadata.lastSignInTime).toDateString()
                  : "N/A"}
              </span>
            </div>

            <p className="text-gray-700 mb-4 text-md md:text-lg">
              {user?.bio ||
                "Welcome to your SkillSwap profile! Manage your account, update your info, and keep growing your skills."}
            </p>

            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="btn btn-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-2 shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Edit Profile Form */}
        {editMode && (
          <form onSubmit={handleUpdateProfile} className="mt-8 space-y-4 text-left max-w-md mx-auto">
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full border-blue-300 focus:border-purple-500 focus:ring focus:ring-purple-200 rounded-lg"
            />

            <label className="block font-semibold text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="input input-bordered w-full border-teal-300 focus:border-pink-500 focus:ring focus:ring-pink-200 rounded-lg"
            />

            <div className="flex justify-between mt-4">
              <button type="submit" className="btn btn-primary w-1/2 mr-2">
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="btn btn-outline w-1/2 ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

   {/* Extra section */}
      <div className="max-w-5xl mx-auto my-6 p-6 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-50 rounded-2xl shadow-lg text-center">
        <h3 className="text-2xl font-bold text-purple-700 mb-2">Welcome Back!</h3>
        <p className="text-gray-700">
          Check your recently booked skills, explore new learning opportunities, and keep growing your talent!
        </p>
      </div>

    </div>
  );
};

export default MyProfile;

import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL || "https://i.ibb.co/5Y3mY6b/default-avatar.png"}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
          />
        </div>

        {/* Name & Email */}
        <h2 className="text-3xl font-bold text-gray-800">
          {user?.displayName || "Anonymous User"}
        </h2>
        <p className="text-gray-500 text-lg mb-4">
          {user?.email || "No email available"}
        </p>

        {/* Extra Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 text-left">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-1">Member Since</h3>
            <p className="text-gray-600">
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toDateString()
                : "N/A"}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-1">Last Login</h3>
            <p className="text-gray-600">
              {user?.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toDateString()
                : "N/A"}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg shadow-sm md:col-span-2">
            <h3 className="font-semibold text-gray-700 mb-1">Bio</h3>
            <p className="text-gray-600">
              {user?.bio ||
                "You haven’t added a bio yet. Tell others something about yourself!"}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8">
          <button className="btn btn-secondary px-6 py-2 text-white">
            Edit Profile
          </button>
        </div>
      </div>

    </div>
  );
};

export default MyProfile;

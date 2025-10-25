import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Moon, Sun } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

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
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-24 px-4 transition-colors duration-300">
      
     <Toaster position="top-center" reverseOrder={false} />
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Profile Card - Minimalist Design */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
          
          {/* Header Section */}
          <div className="relative">
            {/* Subtle Accent Line */}
            <div className="h-1 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-400 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-300"></div>
            
            {/* Profile Content */}
            <div className="p-8 md:p-12">
              
              {/* Avatar & Name Row */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                
                {/* Avatar */}
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-600 shadow-sm">
                    <img
                      src={user?.photoURL || "https://i.ibb.co.com/TDYt0xK7/296fe121-5dfa-43f4-98b5-db50019738a7.jpg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {editMode && (
                    <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <span className="text-white text-sm font-medium">Change</span>
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight mb-2 transition-colors">
                      {user?.displayName || "Anonymous User"}
                    </h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg transition-colors">
                      {user?.email || "No email available"}
                    </p>
                  </div>

                

                  {/* Bio */}
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl transition-colors">
                    {user?.bio || "Welcome to your SkillSwap profile! Manage your account, update your info, and keep growing your skills."}
                  </p>

                  {/* Edit Button */}
                  {!editMode && (
                    <button
                      onClick={() => setEditMode(true)}
                      className="mt-4 px-8 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>

              {/* Edit Form */}
              {editMode && (
                <div className="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-700 transition-colors">
                  <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100 mb-6 transition-colors">Edit Information</h3>
                  
                  <div className="max-w-lg space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 transition-colors">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 transition-colors">
                        Photo URL
                      </label>
                      <input
                        type="text"
                        name="photoURL"
                        value={formData.photoURL}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-transparent transition-all"
                        placeholder="Enter photo URL"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleUpdateProfile}
                        className="flex-1 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setEditMode(false)}
                        className="flex-1 px-6 py-3 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-lg border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Welcome Banner - Minimalist */}
        <div className="mt-8 bg-white dark:bg-neutral-800 rounded-2xl p-8 text-center border border-neutral-200 dark:border-neutral-700 shadow-sm transition-colors duration-300">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl font-light text-neutral-900 dark:text-neutral-100 transition-colors">
              Welcome Back
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed transition-colors">
              Check your recently booked skills, explore new learning opportunities, and keep growing your talent.
            </p>
          </div>
        </div>

        {/* Stats Grid - Minimal Design */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all">
            <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">12</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">Skills Learned</div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all">
            <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">8</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">Active Bookings</div>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all">
            <div className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-1 transition-colors">4.9</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">Average Rating</div>
          </div>
        </div>

        {/* Subtle Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400 dark:text-neutral-500 transition-colors">
            Your profile is your digital identity. Keep it updated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
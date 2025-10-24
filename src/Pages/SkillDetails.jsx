import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SkillDetails = () => {
  const data = useLoaderData();
  console.log("Loaded data:", data);
  console.log("Data type:", typeof data);
  const { skillId } = useParams();
  const [skill, setSkill] = useState({});
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (data && Array.isArray(data)) {
      console.log("Searching for skillId:", skillId, "type:", typeof skillId);
      const filteredSkill = data.find((sk) => sk.skillId === Number(skillId));
      console.log("Found skill:", filteredSkill);
      setSkill(filteredSkill || {});
    }
  }, [data, skillId]);

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success(`Booking confirmed for ${skill.skillName}!`);
    setFormData({ email: "", password: "" });
  };

  return (
    <div>
      <Navbar />

      <main className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <Toaster position="top-center" reverseOrder={false} />
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-blue-600 mb-3">
              Skill Details
            </h2>
            <p className="text-gray-600 text-lg">
              Explore the details of your chosen skill and book your spot today!
            </p>
          </div>
          {/* Skill Details Card */}
          {skill && (
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden md:flex">
              {/* Image */}
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full md:w-1/2 object-cover h-96"
              />

              {/* Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">
                    {skill.skillName}
                  </h3>
                  <p className="text-gray-600 mb-5">{skill.description}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center bg-yellow-100 text-yellow-700 px-3 py-1 rounded-md font-semibold">
                      <FaStar className="mr-1" /> {skill.rating}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md font-semibold">
                      ${skill.price}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    Slots Available: {skill.slotsAvailable}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Category: {skill.category}
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* Booking Form (directly visible) */}
          <div className="mt-12 bg-white shadow-md rounded-xl p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">
              Book This Skill
            </h3>
            <form onSubmit={handleBookNow}>
              <div className="mb-4">
                <label className="block font-medium mb-1 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block font-medium mb-1 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full text-white font-semibold"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SkillDetails;

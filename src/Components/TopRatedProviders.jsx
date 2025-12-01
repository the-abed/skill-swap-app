import React, { useState, useEffect } from "react";
import { FaStar, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    fetch("/topRatedProvider.json")
      .then((res) => res.json())
      .then((data) => {
        setProviders(data);
        AOS.refresh();
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="mb-16 px-6 md:px-10 w-11/12 mx-auto transition-colors duration-500 ">
      {/* Section Title */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-3 drop-shadow-sm transition-colors duration-300">
          🌟 Top Rated Providers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
          Meet our most trusted and highly rated skill providers — professionals
          who consistently deliver quality learning experiences.
        </p>
      </div>

      {/* Provider Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {providers.map((provider, index) => (
          <div
            key={provider.providerId}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-once="true"
          >
            <div
              className="
              relative group 
              bg-white/90 dark:bg-gray-800/90 
              backdrop-blur-md border border-gray-100 dark:border-gray-700
              shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20
              rounded-2xl p-6 
              transition-all duration-500 ease-in-out 
              hover:-translate-y-2 hover:scale-[1.02]
              "
            >
              {/* Top Badge */}
              {provider.rating >= 4.8 && (
                <span className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  Top Rated
                </span>
              )}

              {/* Avatar */}
              <div className="flex justify-center mb-5 relative">
                <img
                  src={provider.photo}
                  alt={provider.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-md object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Name & Profession */}
              <h3 className="text-center text-xl font-bold text-gray-800 dark:text-gray-100 mb-1 transition-colors duration-300">
                {provider.name}
              </h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4 flex justify-center items-center gap-1 transition-colors duration-300">
                <FaBriefcase className="text-secondary" />{" "}
                {provider.profession || "Skill Provider"}
              </p>

              {/* Rating */}
              <div className="flex justify-center items-center mb-4">
                <FaStar className="text-yellow-400 text-lg" />
                <span className="ml-1 font-semibold text-gray-700 dark:text-gray-300">
                  {provider.rating}
                </span>
              </div>

              {/* Skills Offered */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {provider.skillsOffered.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact Button */}
              <div className="card-actions justify-center">
                <button
                  onClick={() => setSelectedProvider(provider)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white w-full flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 py-2 rounded-lg shadow-md"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {selectedProvider && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md p-6 relative transition-colors duration-300 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Contact {selectedProvider.name}
            </h3>
            <textarea
              placeholder="Write your message..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-all duration-300"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedProvider(null)}
                className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Message sent!");
                  setSelectedProvider(null);
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRatedProviders;

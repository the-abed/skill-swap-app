import React, { use } from "react";
import { FaStar, FaEnvelope, FaBriefcase } from "react-icons/fa";

const providerDataPromise = fetch("/topRatedProvider.json").then((res) =>
  res.json()
);

const TopRatedProviders = () => {
  const providers = use(providerDataPromise);

  return (
    <div className="py-20 px-6 md:px-10 ">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-3">
          🌟 Top Rated Providers
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Meet our most trusted and highly rated skill providers — professionals
          who consistently deliver quality learning experiences.
        </p>
      </div>

      {/* Provider Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {providers.map((provider) => (
          <div
            key={provider.providerId}
            className="relative group bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl rounded-2xl p-6 transition-all duration-300 border border-gray-100 hover:-translate-y-2"
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
                className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Name & Profession */}
            <h3 className="text-center text-xl font-bold text-gray-800 mb-1">
              {provider.name}
            </h3>
            <p className="text-center text-sm text-gray-500 mb-3 flex justify-center items-center gap-1">
              <FaBriefcase className="text-secondary" />{" "}
              {provider.profession || "Skill Provider"}
            </p>

            {/* Rating */}
            <div className="flex justify-center items-center mb-4">
              <FaStar className="text-yellow-400 text-lg" />
              <span className="ml-1 font-semibold text-gray-700">
                {provider.rating}
              </span>
            </div>

            {/* Skills Offered */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {provider.skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact Button */}
            <div className="card-actions justify-center">
              <a
                href={`mailto:${provider.email}`}
                className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <FaEnvelope /> Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;

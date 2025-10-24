import React, { use } from "react";
import { FaStar } from "react-icons/fa";

const providerDataPromise = fetch('/topRatedProvider.json').then(res => res.json());

const TopRatedProviders = () => {
    const providers = use(providerDataPromise);
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10 my-10">
        <h2 className="text-xl md:text-4xl font-bold text-blue-600 mb-3">
          Top Rated Providers
        </h2>
        <p className="text-primary text-lg max-w-2xl mx-auto mt-2">
          Connect with highly rated local experts who can help you learn new skills
          effectively.
        </p>
      </div>

      {/* Provider Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {providers.map((provider) => (
          <div
            key={provider.providerId}
            className="card bg-base-100 shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <img
                src={provider.photo}
                alt={provider.name}
                className="w-20 h-20 rounded-full border-2 border-primary"
              />
            </div>

            {/* Name */}
            <h3 className="text-center font-semibold text-lg mb-2">
              {provider.name}
            </h3>

            {/* Rating */}
            <div className="flex justify-center items-center mb-2">
              <FaStar className="text-yellow-500 mr-1" />
              <span className="font-medium">{provider.rating}</span>
            </div>

            {/* Skills Offered */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {provider.skillsOffered.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact Button */}
            <div className="card-actions justify-center">
              <a
                href={`mailto:${provider.email}`}
                className="btn btn-secondary text-white btn-sm w-full hover:bg-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;

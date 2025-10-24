import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const { skillId, image, skillName, description, rating, price, level, category } = skill;

  return (
    <div className="card bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-200">
      
      {/* Image Section */}
      <figure className="h-56 overflow-hidden relative">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {category || "General"}
        </span>
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        {/* Skill Title */}
        <h2 className="card-title text-xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {skillName}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description || "No description available."}
        </p>

        {/* Info Badges */}
        <div className="flex justify-between flex-wrap gap-3 mb-4">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-sm">
            <FaStar className="text-yellow-500" /> {rating || "N/A"}
          </span>

          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
            ${price || "Free"}
          </span>

          {level && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              {level}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <div className="card-actions mt-auto">
          <Link
            to={`/skill-details/${skillId}`}
            className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full hover:scale-105 transition-transform duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

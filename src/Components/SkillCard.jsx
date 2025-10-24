import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const { skillId, image, skillName, description, rating, price, level, category } = skill;

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 ">
      
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden ">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col p-5 flex-1">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {skillName}
        </h2>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {description || "No description available."}
        </p>

        {/* Info Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
          {rating && (
            <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200 px-2 py-1 rounded-full">
              <FaStar className="text-yellow-500 dark:text-yellow-300" /> {rating}
            </span>
          )}

          {price && (
            <span className="bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200 px-2 py-1 rounded-full font-medium">
              ${price}
            </span>
          )}

          {level && (
            <span className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-2 py-1 rounded-full font-medium">
              {level}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link
          to={`/skill-details/${skillId}`}
          className="mt-auto text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;

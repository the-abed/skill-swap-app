import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const { skillId, image, skillName, rating, price, level, category } = skill;



  return (
   <div className="flex flex-col  secondary-bg 
        shadow-md hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300  "
         >

      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {category && (
          <span
            className="
              absolute top-3 left-3 
              bg-blue-600 dark:bg-blue-500
              text-white text-xs font-semibold
              px-3 py-1 rounded-full shadow-md
              transition-all duration-300
            "
          >
            {category}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div
        className="
          flex flex-col p-5 flex-1 
          transition-colors duration-300
        "
      >
        {/* Title */}
        <h2
          className="
            text-md md:text-lg  font-semibold mb-2 
            text-gray-800 dark:text-gray-100
            transition-colors duration-300
          "
        >
          {skillName}
        </h2>

        {/* Description */}
        {/* <p
          className="
            text-gray-600 dark:text-gray-400 
            text-sm mb-4 line-clamp-3
            transition-colors duration-300
          "
        >
          {description || "No description available."}
        </p> */}

        {/* Info Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
          {rating && (
            <span
              className="
                flex items-center gap-1
                bg-yellow-100 text-yellow-800
                dark:bg-yellow-700 dark:text-yellow-200
                px-2 py-1 rounded-full
                font-medium transition-colors duration-300
              "
            >
              <FaStar className="text-yellow-500 dark:text-yellow-300" /> {rating}
            </span>
          )}

          {price && (
            <span
              className="
                bg-green-100 text-green-800
                dark:bg-green-700 dark:text-green-200
                px-2 py-1 rounded-full font-medium
                transition-colors duration-300
              "
            >
              ${price}
            </span>
          )}

          {level && (
            <span
              className="
                bg-gray-100 text-gray-800
                dark:bg-gray-800 dark:text-gray-200
                px-2 py-1 rounded-full font-medium
                transition-colors duration-300
              "
            >
              {level}
            </span>
          )}
        </div>

        {/* View Details Button */}
        <Link
          to={`/skill-details/${skillId}`}
          className="
            mt-auto text-center py-2
            bg-gradient-to-r from-blue-600 to-purple-600
            hover:from-blue-500 hover:to-purple-500
            text-white rounded-md font-medium
            shadow-md hover:shadow-lg
            transform hover:scale-[1.03]
            transition-all duration-300 ease-in-out
          "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;

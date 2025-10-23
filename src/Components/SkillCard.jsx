import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const {skillId} = skill;
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <figure className="h-56 overflow-hidden">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Skill Name */}
        <h2 className="card-title text-lg font-semibold">{skill.skillName}</h2>

        {/* Description */}
        <p className="text-primary text-sm mb-2 line-clamp-2">
          {skill.description}
        </p>

        {/* Rating and Price */}
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-sm font-semibold">
            <FaStar className="mr-1" /> {skill.rating}
          </div>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">
            ${skill.price}
          </div>
        </div>

        {/* View Details Button */}
        <div className="card-actions flex justify-end">
          <Link to={`/skill-details/${skillId}`} className="btn bg-secondary text-white md:w-full hover:bg-blue-600 transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

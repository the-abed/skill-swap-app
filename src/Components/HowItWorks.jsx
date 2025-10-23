import React from "react";
import { FaUserPlus, FaChalkboardTeacher, FaHandshake, FaStar } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="w-8 h-8 text-white" />,
      title: "Sign Up",
      description: "Create your free account to start offering or learning skills in your community.",
      color: "bg-blue-500",
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8 text-white" />,
      title: "Find or Offer Skills",
      description: "Browse available skills or list your own expertise to share with others.",
      color: "bg-green-500",
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-white" />,
      title: "Connect Locally",
      description: "Chat, schedule sessions, and meet local learners or instructors safely.",
      color: "bg-yellow-500",
    },
    {
      icon: <FaStar className="w-8 h-8 text-white" />,
      title: "Rate & Grow",
      description: "Leave reviews, improve your skills, and build a trusted reputation in the community.",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="py-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-2">
          Learn, share, and grow your skills in 4 simple steps.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className={`p-4 rounded-full mb-4 ${step.color}`}>
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

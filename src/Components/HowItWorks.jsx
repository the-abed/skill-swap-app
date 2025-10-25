import React from "react";
import { FaUserPlus, FaChalkboardTeacher, FaHandshake, FaStar } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="w-8 h-8 text-white" />,
      title: "Create Your Account",
      description:
        "Join our growing community by signing up for free. Customize your profile to showcase your skills or find people to learn from.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8 text-white" />,
      title: "Find or Offer Skills",
      description:
        "Explore hundreds of categories — from language learning to tech skills — or share your expertise by creating your own offer.",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-white" />,
      title: "Connect & Collaborate",
      description:
        "Easily chat, schedule meetups, and collaborate with learners and mentors near you — safely and conveniently.",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: <FaStar className="w-8 h-8 text-white" />,
      title: "Grow & Get Recognized",
      description:
        "Receive feedback, earn positive ratings, and build your reputation while improving your skills and helping others.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="mb-26 py-20 px-6 0 bg-gray-900">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
          How It Works
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover how you can start learning and sharing skills with others in just a few easy steps.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
          >
            <div
              className={`p-5 mb-5 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
            >
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-100">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

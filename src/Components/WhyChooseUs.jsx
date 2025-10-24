import React from "react";
import { FaUsers, FaShoppingBag, FaChalkboardTeacher, FaStar } from "react-icons/fa";

const CommunityStats = () => {
  const stats = [
    {
      icon: <FaUsers className="text-white text-4xl mb-3" />,
      value: "25K+",
      label: "Active Visitors",
    },
    {
      icon: <FaShoppingBag className="text-white text-4xl mb-3" />,
      value: "10K+",
      label: "Skill Buyers",
    },
    {
      icon: <FaChalkboardTeacher className="text-white text-4xl mb-3" />,
      value: "5K+",
      label: "Trusted Providers",
    },
    {
      icon: <FaStar className="text-white text-4xl mb-3" />,
      value: "50K+",
      label: "Positive Reviews",
    },
  ];

  return (
    <section
      className="relative w-full py-20 bg-fixed bg-center bg-cover text-white my-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our Growing Community
        </h2>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-12">
          Empowering learners and providers worldwide — see how far we’ve come together.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              {stat.icon}
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                {stat.value}
              </h3>
              <p className="text-gray-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;

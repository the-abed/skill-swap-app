import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Star, DollarSign, Users, Tag } from "lucide-react";

const SkillDetails = () => {
  const data = useLoaderData();
  const { skillId } = useParams();
  const [skill, setSkill] = useState({});
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const filteredSkill = data.find((sk) => sk.skillId === Number(skillId));
      setSkill(filteredSkill || {});
    }
  }, [data, skillId]);

  const handleBookNow = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }
    alert(`Booking confirmed for ${skill.skillName}!`);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        
        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>Skills</span>
            <span>/</span>
            <span className="text-neutral-900 dark:text-neutral-100">{skill.skillName}</span>
          </div>
        </div>

        {/* Skill Details Section */}
        {skill && (
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl"></div>
              <img
                src={skill.image || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"}
                alt={skill.skillName}
                className="relative w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center space-y-8">
              
              {/* Sub title */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {skill.skillName}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              
              <div className="grid grid-cols-2 gap-4">
                
                {/* Rating */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm mb-1">
                    <Star className="w-4 h-4" />
                    <span>Rating</span>
                  </div>
                  <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                    {skill.rating || "N/A"}
                  </div>
                </div>

                {/* Price */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Price</span>
                  </div>
                  <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                    ${skill.price || "0"}
                  </div>
                </div>

                {/* Slots */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm mb-1">
                    <Users className="w-4 h-4" />
                    <span>Slots</span>
                  </div>
                  <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100">
                    {skill.slotsAvailable || "0"}
                  </div>
                </div>

                {/* Category */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 transition-colors">
                  <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm mb-1">
                    <Tag className="w-4 h-4" />
                    <span>Category</span>
                  </div>
                  <div className="text-2xl font-light text-neutral-900 dark:text-neutral-100 truncate">
                    {skill.category || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-16"></div>

        {/* Booking Form */}
        <div className="max-w-xl mx-auto">
          
          {/* Form Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-2">
              Book This Skill
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Enter your details to secure your spot
            </p>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 transition-colors">
            <div className="space-y-6">
              
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-transparent transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-400 focus:border-transparent transition-all"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleBookNow}
                className="w-full px-6 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all mt-8"
              >
                Confirm Booking
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-500">
              By booking, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
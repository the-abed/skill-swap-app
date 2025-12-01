import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Testimonials() {
  const [theme, setTheme] = useState("light");

  // Auto system theme
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      setTheme(systemPrefersDark.matches ? "dark" : "light");
    };

    updateTheme();
    systemPrefersDark.addEventListener("change", updateTheme);

    return () => systemPrefersDark.removeEventListener("change", updateTheme);
  }, []);

  const testimonials = [
    {
      name: "Abdullah Karim",
      role: "Quran Instructor",
      text: "SkillSwap helped me connect with students who genuinely want to learn. The platform is simple, clean, and powerful.",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Sarah Ahmed",
      role: "English Tutor",
      text: "I exchanged English lessons for Arabic lessons. Amazing experience! The community feature is the best.",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Mohammad Yousuf",
      role: "Fitness Trainer",
      text: "Loved meeting new learners in my area. This platform is perfect for anyone who wants to share their skill.",
      image: "https://i.pravatar.cc/150?img=14",
    },
    {
      name: "Nusrat Jahan",
      role: "Graphic Designer",
      text: "A great platform. I taught Photoshop and received language help back. Brilliant idea!",
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Fatehah Khan",
      role: "Graphic Designer",
      text: "A nice platform. I taught Photoshop and received language help back. Brilliant idea!",
      image: "https://i.pravatar.cc/150?img=25",
    },
    {
      name: "Rashel Ahmed",
      role: "Web Developer",
      text: "Amezing. I taught Web Development and received language help back. Brilliant idea!",
      image: "https://i.pravatar.cc/150?img=13",
    },
  ];

  return (
    <section className="py-16  transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-10">
          What Our Users Say
        </h2>

        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.4}
          loop={true}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 30,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: false,
          }}
          className="w-full"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white/90 dark:bg-gray-800/90 
              backdrop-blur-md border border-gray-100 dark:border-gray-700
              shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 shadow-xl p-8 rounded-2xl max-w-lg mx-auto"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    className="w-20 h-20 rounded-full mb-4 border-4 border-primary/20"
                    alt=""
                  />
                  <p className=" text-center mb-4 text-gray-500 dark:text-gray-400">
                    {t.text}
                  </p>
                  <h3 className="font-bold text-primary text-lg text-gray-800 dark:text-gray-100">
                    {t.name}
                  </h3>
                  <p className="text-secondary">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      title: "Learn. Share. Grow Together.",
      subtitle: "Join SkillSwap and trade your talents with local learners!",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Teach What You Love",
      subtitle: "Offer your skills and help others reach their goals.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Discover Local Experts",
      subtitle: "Find trusted teachers for music, coding, yoga, and more!",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <div className="my-10">
      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full h-[80vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="relative text-center text-white px-6 sm:px-12 max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                    {slide.title}
                  </h1>
                  <p className="text-md sm:text-lg md:text-xl mb-6 opacity-90">
                    {slide.subtitle}
                  </p>
                  <button className="btn btn-primary px-6">Get Started</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

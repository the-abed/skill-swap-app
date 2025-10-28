import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-router";
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  // Array containing slide data for the hero section
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
    // Hero section container
    <div className="w-full mt-16 mb-12">
      <div className=" overflow-hidden shadow-lg">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="relative text-center text-white px-6 sm:px-12 max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                    {slide.title}
                  </h1>
                  <p className="text-md sm:text-lg md:text-xl mb-6 opacity-90">
                    {slide.subtitle}
                  </p>
                  <div className="relative flex flex-col justify-center items-center gap-5" onClick={() => {
                  const section = document.getElementById("popular-skills");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}>

                  <button className="btn border-none text-white bg-accent-content px-6">
                    Get Started
                  </button>
                 <span className="absolute top-38 text-3xl text-base-300 animate-bounce">
                   <BsArrowDownCircleFill></BsArrowDownCircleFill>
                 </span>

                  </div>
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

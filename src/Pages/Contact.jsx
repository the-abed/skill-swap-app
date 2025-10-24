import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const socials = [
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://x.com/AbedazimReal",
      color: "text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/the-abed",
      color: "text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohammad-abed-477100386/",
      color: "text-blue-700",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:abedpersonal2024@gmail.com",
      color: "text-red-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 py-10">
      {/* Image */}
      <div className="mb-8">
        <img
          src="https://i.ibb.co/JWwJ1sX5/a-git.jpg"
          alt="Contact Illustration"
          className="w-64 md:w-96 rounded-xl shadow-lg"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Contact Me
      </h1>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        I’d love to hear from you! Connect with me through any of the following platforms:
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 ${social.color} bg-white`}
          >
            <span className="text-2xl">{social.icon}</span>
            <span className="font-semibold text-gray-800">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

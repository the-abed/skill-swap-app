import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200 mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        About SkillSwap
      </h1>

      <p className="text-lg mb-6 leading-relaxed text-center">
        SkillSwap is a local skill exchange platform designed to bring people
        together to share, learn, and grow. Our mission is to empower
        individuals by providing an interactive space where anyone can offer
        their expertise, explore new skills, and connect with local talent.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Our Vision</h2>
      <p className="mb-6 leading-relaxed">
        We envision a community where learning is accessible, collaborative, and
        rewarding. By connecting learners and skill providers in a local
        network, we aim to foster meaningful relationships and encourage
        personal and professional growth.
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-8">What We Offer</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          Browse a wide variety of skill offerings, from language exchange and
          coding help to fitness and creative arts.
        </li>
        <li>
          Rate and review experiences to help the community identify trusted
          skill providers.
        </li>
        <li>
          Connect directly with local talent to exchange knowledge and enhance
          your personal growth.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 mt-8">Our Commitment</h2>
      <p className="mb-6 leading-relaxed">
        SkillSwap is committed to creating a safe, engaging, and inclusive
        platform for all users. We prioritize quality, transparency, and user
        satisfaction to ensure that every interaction is meaningful and
        contributes positively to the local learning ecosystem.
      </p>

      <p className="text-center text-gray-600 dark:text-gray-400 mt-10">
        Join SkillSwap today and start exchanging skills within your local
        community!
      </p>
    </div>
  );
};

export default AboutUs;

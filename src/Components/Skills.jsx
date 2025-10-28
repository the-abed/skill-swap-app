import { use } from "react";
import SkillCard from "./SkillCard";
import { Link } from "react-router";

const skillPromise = fetch("/skillsData.json").then((res) => res.json());
// console.log('skill', skillPromise)

const Skills = () => {
  const data = use(skillPromise);
  // console.log('data',data);
  return (
    <div id="popular-skills" className="max-w-7xl w-full mx-auto py-12" >
      <div className="text-center py-10 px-4  my-5" >
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-4">
          Learn, Share & Trade Skills Locally
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          SkillSwap is your community platform to offer your talents, find local
          experts, and exchange knowledge in music, coding, language, fitness,
          cooking, and more. Connect, learn, and grow together!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 md:px-0 lg:px-0" >
        {data.map((skill) => (
          <SkillCard key={data.skillId} skill={skill}></SkillCard>
        ))}
       
      </div>
       <div className="flex justify-center">
  <Link
    to="/"
    className="
      mt-10 inline-block font-semibold px-10 py-3 rounded-lg
      text-white shadow-md transition-all duration-500 ease-in-out transform

      /* Light mode gradient (vibrant) */
      bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
      hover:from-purple-700 hover:via-pink-600 hover:to-red-600

      /* Dark mode gradient (darker, elegant) */
      dark:from-gray-800 dark:via-gray-700 dark:to-gray-600
      dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500

      /* Glow and motion */
      hover:shadow-lg hover:scale-105
      hover:shadow-purple-400/30 dark:hover:shadow-gray-500/30
    "
  >
    Back To Home
  </Link>
</div>
    </div>
  );
};

export default Skills;

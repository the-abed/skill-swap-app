import { use } from "react";
import SkillCard from "./SkillCard";

const skillPromise = fetch("/skillsData.json").then((res) => res.json());
// console.log('skill', skillPromise)

const Skills = () => {
  const data = use(skillPromise);
  // console.log('data',data);
  return (
    <div id="popular-skills" className="max-w-7xl w-full mx-auto mb-5">
      <div className="text-center py-16 px-4  my-5">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 md:px-0 lg:px-0">
        {data.map((skill) => (
          <SkillCard key={data.skillId} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;

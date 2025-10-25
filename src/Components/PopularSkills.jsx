import React from "react";
import useSkills from "../Hook/useSkills";
import SkillCard from "./SkillCard";
import { Link } from "react-router";
import Loading from "./Loading";

const PopularSkills = () => {
  const { skills, loading } = useSkills();
  const filteredSkills = skills.slice(0, 6);
  // console.log(skills);

  return (
    <div id="popular-skills" className="max-w-7xl w-full mx-auto">
      <div className="text-center py-10 px-4  my-5">
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
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-6 md:px-0 lg:px-0">
          {" "}
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill}></SkillCard>
          ))}
        </div>
      )}
     <div className="flex justify-center">
  <Link
    to="/skills"
    className="mt-10 inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold px-10 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
  >
    Explore All Skills
  </Link>
</div>

    </div>
  );
};

export default PopularSkills;

/* {
            loading ? (<LoaderSpinner></LoaderSpinner>) : (
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
             {
                filterProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
           </div>
            )
          } */

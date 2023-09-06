import Link from "next/link";
import React from "react";

const SkillCard = ({ skill }) => {
  const { category, skills, total } = skill;
  return (
    <div>
      <div className="py-10 text-center border-gray-100 border-2 shadow-md">
        <h1 className="text-xl hover:text-blue-700 hover:underline cursor-pointer font-semibold pb-2">
          {category}
        </h1>
        <p>{total}</p>
        <div className="mt-10 pl-7 space-y-4 text-start">
          {skills.map((skill, index) => (
            <Link key={index} href={`/AllSkills/${skill}`}>
              <p className="text-gray-600 hover:text-blue-700 hover:underline cursor-pointer mb-4 w-fit">
                {skill}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8 mb-5">
          <button className="btn bg-base-100 border border-blue-800 hover:bg-base-200 text-blue-800">
            View More Freelancers
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

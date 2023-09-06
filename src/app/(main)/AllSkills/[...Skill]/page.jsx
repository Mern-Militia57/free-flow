import React from "react";

const SingleSkillPage = ({ params }) => {
  function decodeURLComponents(inputSkill) {
    return decodeURIComponent(inputSkill.replace(/\+/g, " "));
  }
  let encodedSkill = params.Skill[0];
  let skillName = decodeURLComponents(encodedSkill);

  return (
    <div className="text-center my-16">
      <h1 className="text-[20px] lg:text-[36px] font-semibold mt-12">
        Top {skillName}
      </h1>
      <h1 className="border-b-blue-600 w-20 border-2 my-4 mx-auto"></h1>
    </div>
  );
};

export default SingleSkillPage;

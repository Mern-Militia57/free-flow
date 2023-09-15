import React from "react";
import ProjectsCard from "./ProjectsCard";

export const metadata = {
  title: "Find Projects | Free Flow",
};

const FindProjectsPage = () => {
  return (
    <div className="bg-base-200 py-10">
      <div className="text-center py-5">
        <h1 className="text-4xl font-bold">Find Freelance Project</h1>
        <h1 className=" border-b-blue-600 w-12 border-2 my-5 mx-auto"></h1>
      </div>
      <div>
        <ProjectsCard />
      </div>
    </div>
  );
};

export default FindProjectsPage;

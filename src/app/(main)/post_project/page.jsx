import React from "react";
import ProjectForm from "./ProjectForm";

const PostProjectPage = () => {
  return (
    <div className="bg-slate-100">
      <div className="py-10 px-2 md:px-5 container mx-auto">
        <div className="col-span-2 p-5 bg-white">
          <ProjectForm />
        </div>
      </div>
    </div>
  );
};

export default PostProjectPage;

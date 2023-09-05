import React from "react";
import ProjectForm from "./ProjectForm";

const PostProjectPage = () => {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 py-10 gap-10 px-5 lg:px-0 container mx-auto">
        <div className="col-span-2 p-5 bg-white">
          <ProjectForm />
        </div>
        <div className="hidden lg:block bg-gray-50 h-fit py-5">
          <div className="text-center my-3">
            <h1 className="text-2xl font-bold text-gray-500 uppercase">
              Usefull Tips
            </h1>
          </div>
          <div className="p-6 my-5 mx-3 border bg-white text-[15px] drop-shadow-md space-y-5">
            <p>
              1. Describe your project in as much detail as you can comfortably
              reveal - it will increase the quality of proposals you receive and
              shorten the selection process.
            </p>
            <p>
              2. Upload as much relevant information (pictures, documents,
              specifications, links, etc) as possible to get a realistic quote.
            </p>
            <p>
              3. Match the experience level to your requirements – remember,
              you’re looking for the best you can afford, not the cheapest you
              can get.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProjectPage;

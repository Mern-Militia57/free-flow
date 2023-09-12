"use client";
import useProjects from "@/Components/hooks/useProjects";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const ProjectDetailsPage = ({ params }) => {
  const id = params.id;
  const [projects] = useProjects();
  const [SingleProject, setSingleProject] = useState(null);

  useEffect(() => {
    if (id) {
      const project = projects.find((project) => project._id === id);
      if (project) {
        setSingleProject(project);
      } else {
        console.error("Project not found");
      }
    }
  }, [id, projects]);

  return (
    <div>
      <div className="w-full bg-base-100 p-10">
        {SingleProject ? (
          <div className="">
            <div className="flex justify-between">
              <div className="">
                <h2 className="text-3xl font-bold">{SingleProject.title}</h2>
              </div>
              <div className="text-2xl font-bold text-end text-blue-700">
                <>
                  <p>{SingleProject.currency}</p>
                </>
                <>
                  <p>{SingleProject.budget}</p>
                </>
              </div>
            </div>
            <div className="flex gap-2 font-medium">
              <div>
                <p>{SingleProject.budgetType}</p>
              </div>
              <div>
                <p>{SingleProject.location}</p>
              </div>
            </div>
            <p>
              <span className="text-lg mr-3">Category:</span>
              {SingleProject.category}
            </p>
            <p>
              <span className="text-lg mr-3">Description:</span>
              {SingleProject.description}
            </p>
            <div className="justify-end">
              <>
                <button className="btn bg-green-600 hover:bg-green-800 text-white">
                  details
                </button>
              </>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

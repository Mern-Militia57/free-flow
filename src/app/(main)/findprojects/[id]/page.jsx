"use client";
import useProjects from "@/Components/hooks/useProjects";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";

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
    <>
      {SingleProject ? (
        <main className="bg-base-200 py-10">
          <div className="p-5 md:p-8 container mx-auto bg-white">
            <div className="flex justify-between">
              <div className="border-b-2 mb-2 pb-4">
                <h2 className="text-2xl md:text-4xl font-semibold">
                  {SingleProject.title}
                </h2>
              </div>
              <div className="text-2xl font-bold text-end text-blue-700 flex flex-col md:flex-row gap-2 md:gap-5">
                <p>{SingleProject.budgetType}</p>
                <p>{SingleProject.currency}</p>
                <p>{SingleProject.budget}</p>
              </div>
            </div>
            <div className="flex gap-2 font-medium">
              <div>
                <p>
                  <span>Posted :</span> {SingleProject.postingTime}
                </p>
              </div>
              <div>
                <p>
                  <span>Location : </span>
                  {SingleProject.location}
                </p>
              </div>
            </div>
            <div className="my-3 flex gap-3">
              <>
                <button className="bg-emerald-200 px-2 py-1 text-sm text-gray-700">
                  {SingleProject.category}
                </button>
              </>
              <>
                <button className="bg-emerald-200 px-2 py-1 text-sm text-gray-700">
                  {SingleProject.subCategory}
                </button>
              </>
            </div>
            <div className="my-5">
              <div className="border-b-2 mb-4 w-fit">
                <h1 className="text-3xl font-light">Description</h1>
              </div>
              <div>
                <p>{SingleProject.description}</p>
              </div>
            </div>
            <div className="my-5 flex gap-5">
              <div className="avatar">
                <div className="mask mask-squircle">
                  <Image
                    src={SingleProject.applierPhoto}
                    width={45}
                    height={45}
                    alt=""
                  ></Image>
                </div>
              </div>
              <div>
                <p>{SingleProject.applier}</p>
                <p>{SingleProject.email}</p>
              </div>
            </div>
            <div className="text-end">
              <button className="btn bg-green-600 hover:bg-green-800 text-white">
                Send Proposal
              </button>
            </div>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProjectDetailsPage;

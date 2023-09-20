"use client";
import useProjects from "@/Components/hooks/useProjects";
import React, { useContext, useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";

const ProjectDetailsPage = ({ params }) => {
  const id = params.id;
  const { userProfile } = useContext(AuthContextPro);
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
  const { register, handleSubmit, reset } = useForm();
  const SendProposal = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/project_proposal", {
        project_id: SingleProject._id,
        proposer: userProfile?.displayName,
        proposerPhoto: userProfile?.photoURL,
        proposeremail: userProfile?.email,
        project_holder: SingleProject.applier,
        project_holder_email: SingleProject.email,
        proposingTime: new Date(),
        project_title: SingleProject.title,
        project_category: SingleProject.category,
        project_subCategory: SingleProject.subCategory,
        proposal_subject: data.subject,
        proposal_details: data.proposal,
      });
      const result = res.data;
      console.log(result);
      reset();
    } catch (error) {
      console.error("Error sending proposal:", error);
    }
  };

  return (
    <>
      {SingleProject ? (
        <main className="bg-base-200 pt-12 pb-20">
          <div className="p-5 md:p-10 container mx-auto bg-white">
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
              <button
                onClick={() => document.getElementById("my_modal").showModal()}
                className="btn bg-green-600 hover:bg-green-800 text-white"
              >
                Send Proposal
              </button>
            </div>
            <dialog id="my_modal" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-center text-lg">
                  Write Your Proposal
                </h3>
                <form onSubmit={handleSubmit(SendProposal)}>
                  <div className="form-control w-full mt-3">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <input
                      type="text"
                      {...register("subject", { required: true })}
                      placeholder="Write a Subject"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control mt-3">
                    <label className="label">
                      <span className="label-text">Your Proposal</span>
                    </label>
                    <textarea
                      {...register("proposal", {
                        required: true,
                        maxLength: 100,
                      })}
                      className="textarea textarea-bordered h-24"
                      placeholder="Write Proposal"
                    ></textarea>
                    <label className="label">
                      <span className="label-text-alt">
                        Word limit 100 words
                      </span>
                    </label>
                  </div>
                  <div className="form-control my-2">
                    <input
                      className="btn btn-sm bg-green-500 hover:bg-green-800 text-white"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProjectDetailsPage;

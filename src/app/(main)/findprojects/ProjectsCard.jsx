"use client";
import useProjects from "@/Components/hooks/useProjects";
import criterias from "@/data/criterias";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";

const ProjectsCard = () => {
  const [category, setCategory] = useState("Any Category");
  const [projects, loading, refetch] = useProjects();
  // console.log(projects);
  const approvedProjects = projects.filter(
    (project) => project.status === "approved"
  );
  console.log(approvedProjects);
  const CategorySet = (title) => {
    setCategory(title);
  };
  return (
    <div>
      <div className="container mx-auto text-center mb-7">
        <div>
          <div className="dropdown">
            <button tabIndex={0} className="btn bg-base-200">
              <FaListUl />
              {category}
              <FiChevronDown />
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-full"
            >
              <li>
                {criterias.map(({ id, title }) => (
                  <a onClick={() => CategorySet(title)} key={id}>
                    {title}
                  </a>
                ))}
              </li>
            </div>
          </div>
          <input
            type="text"
            placeholder="Search Project"
            className="input input-bordered w-1/2"
          />
          <button className="btn bg-base-200">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 my-10 px-2 md:px-10 container mx-auto gap-5">
        {approvedProjects.map((approvedProject) => (
          <div
            className="card w-full bg-base-100 shadow-xl"
            key={approvedProject._id}
          >
            <div className="card-body">
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-3xl font-bold">
                    {approvedProject.title}
                  </h2>
                </div>
                <div className="text-2xl font-bold text-end text-blue-700">
                  <>
                    <p>{approvedProject.currency}</p>
                  </>
                  <>
                    <p>{approvedProject.budget}</p>
                  </>
                </div>
              </div>
              <div className="flex gap-2 font-medium">
                <div>
                  <p>{approvedProject.budgetType}</p>
                </div>
                <div>
                  <p>{approvedProject.location}</p>
                </div>
              </div>
              <p>
                <span className="text-lg mr-3">Category:</span>
                {approvedProject.category}
              </p>
              <p>
                <span className="text-lg mr-3">Description:</span>
                {approvedProject.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="my-5 flex gap-5">
                  <div className="avatar">
                    <div className="mask mask-squircle">
                      <Image
                        src={approvedProject.applierPhoto}
                        width={45}
                        height={45}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                  <div>
                    <p>{approvedProject.applier}</p>
                    <p>{approvedProject.email}</p>
                  </div>
                </div>
                <div>
                  <Link href={`/findprojects/${approvedProject._id}`}>
                    <button className="btn bg-green-600 hover:bg-green-800 text-white">
                      details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;

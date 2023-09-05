"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProjectForm = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await axios.get("http://localhost:5000/skills");
        setSkills(res.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    }
    fetchSkills();
  }, []);
  return (
    <>
      <div className="border-b pb-5 space-y-2">
        <h1 className="text-3xl">Post a Project</h1>
        <p className="text-xl font-semibold">
          Describe what you need, then receive custom proposals from
          freelancers.
        </p>
      </div>
      <div className="py-10">
        <h3>
          Select a relevant category so that freelancers can find your project
        </h3>
      </div>
      <form>
        <section className="flex flex-col lg:flex-row gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select
              </option>
              {skills.map((skill) => (
                <option key={skill._id}>{skill.category}</option>
              ))}
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">SubCategory</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select
              </option>
            </select>
          </div>
        </section>
        <section>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text">Project Title</span>
            </label>
            <input
              type="text"
              placeholder="e.g I need a flyer and poster created"
              className="input input-bordered w-full max-w-full"
            />
            <label className="label">
              <span className="label-text-alt">
                Try to summarise your project in one sentence
              </span>
            </label>
          </div>
        </section>
        <section>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="I need a designer who specialises in professional  UX design"
            ></textarea>
            <label className="label">
              <span className="label-text-alt">
                Be descriptive, projects with good descriptions are more popular
                with our freelancers.
              </span>
            </label>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Budget Type</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select
              </option>
              <option>Fixed Price</option>
              <option>Per Hour</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select
              </option>
              <option>$USD</option>
              <option>£GBP</option>
              <option>€EUR</option>
              <option>৳Taka</option>
            </select>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-10">
          <div className="form-control w-1/4">
            <label className="label">
              <span className="label-text">Budget</span>
            </label>
            <input
              type="text"
              placeholder="10"
              className="input input-bordered w-full max-w-full"
            />
          </div>
        </section>
        <section>
          <div className="form-control w-[75%]">
            <label className="label">
              <span className="label-text">Freelancer Location</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select
              </option>
              <option>Fixed Price</option>
              <option>Per Hour</option>
              <option>Per Hour</option>
            </select>
          </div>
        </section>
        <section>
          <label className="label">
            <span className="label-text">Project Visibility</span>
          </label>
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <p className="hover:underline">
              PUBLIC (All freelancers can view the project post and send
              proposals)
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="checkbox" />
            <p className="hover:underline">
              PRIVATE (Only freelancers that you specifically invite can view
              the project post and send proposals)
            </p>
          </div>
        </section>
        <section>
          <div className="form-control w-[75%]">
            <label className="label">
              <span className="label-text">
                GET TO KNOW YOUR FREELANCERS (optional)
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select an Interview Question
              </option>
              <option>Fixed Price</option>
              <option>Per Hour</option>
              <option>Per Hour</option>
            </select>
          </div>
        </section>
        <section>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">
                ESTIMATED PROJECT DURATION (optional)
              </span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Select
              </option>
              <option>Fixed Price</option>
              <option>Per Hour</option>
              <option>Per Hour</option>
            </select>
          </div>
        </section>
        <input
          className="btn bg-blue-700 hover:bg-blue-900 text-white rounded-none"
          type="submit"
          value="Post Project"
        />
      </form>
    </>
  );
};

export default ProjectForm;

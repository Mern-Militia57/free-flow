"use client";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ProjectForm = () => {
  const { userProfile } = useContext(AuthContextPro);
  const [skills, setSkills] = useState([]);
  const [specificCategory, setSpecificCategory] = useState(
    "Programming & Development"
  );
  const [isPublicChecked, setIsPublicChecked] = useState(true);
  const [isPrivateChecked, setIsPrivateChecked] = useState(false);
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

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSpecificCategory(selectedCategory);
  };

  const categoryData = skills.find(
    (item) => item?.category === specificCategory
  );
  const skillsInSpecificCategory = categoryData?.skills;

  const handlePublicChange = () => {
    setIsPublicChecked(!isPublicChecked);
    setIsPrivateChecked(false);
  };

  const handlePrivateChange = () => {
    setIsPrivateChecked(!isPrivateChecked);
    setIsPublicChecked(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  console.log(userProfile);
  const SubmitProject = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/post_projects", {
        applier: userProfile?.displayName,
        applierPhoto: userProfile?.photoURL,
        email: userProfile?.email,
        postingTime: new Date(),
        category: data.category,
        subCategory: data.subCategory,
        title: data.title,
        description: data.description,
        budgetType: data.budget_type,
        currency: data.currency,
        budget: data.budget,
        location: data.location,
        publicVisibility: data.visibility_public,
        privateVisibility: data.visibility_private,
        question: data.question,
        status: "pending"
      });
      const result = res.data;

      if (result.insertedId) {
        new Swal({
          title: "Project Posted Successfully",
          icon: "success",
        });
        reset()
      } else {
        console.error("Invalid server response:", result);
      }
    } catch (error) {
      console.error("Error posting project:", error);
    }
  };

  return (
    <>
      <div className="border-b text-center py-10 space-y-2">
        <h1 className="text-3xl font-bold">Post a Project</h1>
        <h1 className=" border-b-blue-600  w-12 border-2 my-4 mx-auto"></h1>
        <p className="text-xl font-semibold">
          Describe what you need, then receive custom proposals from
          freelancers.
        </p>
      </div>
      <div className="py-10">
        <h3 className="text-center">
          Select a relevant category so that freelancers can find your project
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(SubmitProject)}
        className="px-0 md:px-5 space-y-8"
      >
        <section className="flex flex-col lg:flex-row gap-10">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                Category
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("category", { required: true })}
              onChange={handleCategoryChange}
              value={specificCategory}
            >
              <option disabled value="">
                Select
              </option>
              {skills.map((skill) => (
                <option key={skill._id} value={skill.category}>
                  {skill.category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                SubCategory
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("subCategory", { required: true })}
            >
              <option disabled selected>
                Select
              </option>
              {skillsInSpecificCategory?.map((skill, index) => (
                <option key={index}>{skill}</option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                Project Title
              </span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="e.g I need a flyer and poster created"
              className="input input-bordered w-full max-w-full"
            />
            <label className="label">
              <span className="label-text text-gray-400">
                Try to summarise your project in one sentence
              </span>
            </label>
          </div>
        </section>
        <section>
          <div className="form-control">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                Project Description
              </span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="I need a designer who specialises in professional  UX design"
            ></textarea>
            <label className="label">
              <span className="label-text text-gray-400">
                Be descriptive, projects with good descriptions are more popular
                with our freelancers.
              </span>
            </label>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-10">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                Budget Type
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("budget_type", { required: true })}
            >
              <option disabled selected>
                Select
              </option>
              <option>Fixed Price</option>
              <option>Per Hour</option>
            </select>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                Currency
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("currency", { required: true })}
            >
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
          <div className="form-control w-1/3">
            <label className="label">
              <span className="label-text uppercase font-semibold">Budget</span>
            </label>
            <input
              type="text"
              {...register("budget", { required: true })}
              placeholder="10"
              className="input input-bordered w-full max-w-full"
            />
          </div>
        </section>
        <section>
          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                Freelancer Location
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("location", { required: true })}
            >
              <option disabled selected>
                Select Location
              </option>
              <option>Remotely (anywhere)</option>
              <option>Remotely (preferred country)</option>
              <option>On-Site (specific location)</option>
            </select>
          </div>
        </section>
        <section className="space-y-2">
          <label className="label">
            <span className="label-text uppercase font-semibold">
              Project Visibility
            </span>
          </label>
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              {...register("visibility_public")}
              className="checkbox checkbox-accent"
              checked={isPublicChecked}
              onChange={handlePublicChange}
            />
            <p className="hover:underline">
              PUBLIC (All freelancers can view the project post and send
              proposals)
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              {...register("visibility_private")}
              className="checkbox checkbox-accent"
              checked={isPrivateChecked}
              onChange={handlePrivateChange}
            />
            <p className="hover:underline">
              PRIVATE (Only freelancers that you specifically invite can view
              the project post and send proposals)
            </p>
          </div>
        </section>
        <section>
          <div className="form-control w-[75%]">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                GET TO KNOW YOUR FREELANCERS (optional)
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("question")}
            >
              <option disabled selected>
                Select an Interview Question
              </option>
              <option>Why do you like this project?</option>
              <option>What challenges see in this project?</option>
              <option>
                Do you have any suggestions for the implementation or strategy?
              </option>
              <option>What are your greatest strengths?</option>
              <option>How do you usually collaborate with other Buyers?</option>
            </select>
          </div>
        </section>
        <section>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text uppercase font-semibold">
                ESTIMATED PROJECT DURATION (optional)
              </span>
            </label>
            <select
              className="select select-bordered"
              {...register("duration")}
            >
              <option disabled selected>
                Select
              </option>
              <option>1 day or less</option>
              <option>less than 1 week</option>
              <option>1 - 2 weeks</option>
              <option>3 - 4 weeks</option>
              <option>1 - 6 months</option>
              <option>More than 6 months</option>
              <option>Ongoing</option>
              <option>Not sure</option>
              <option>other</option>
            </select>
          </div>
        </section>
        <section className="text-end">
          <input
            className="btn bg-blue-700 hover:bg-blue-900 text-white rounded-none"
            type="submit"
            value="Post Project"
          />
        </section>
      </form>
    </>
  );
};

export default ProjectForm;

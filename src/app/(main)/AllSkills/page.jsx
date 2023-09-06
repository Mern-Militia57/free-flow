"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SkillCard from "./SkillCard";

const AllSkillsPage = () => {
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
      <div className="text-center my-16">
        <h1 className="text-[20px] lg:text-[36px] font-semibold mt-12">
          Hire Talented Freelancers Across Skills
        </h1>
        <h1 className="border-b-blue-600 w-20 border-2 my-4 mx-auto"></h1>
      </div>
      <div className="grid px-5 lg:px-20 py-10 gap-5 grid-cols-1 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default AllSkillsPage;

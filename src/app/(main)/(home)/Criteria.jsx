import TitleSection from "@/Components/TitleSection";
import criterias from "@/data/criterias";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Criteria = () => {
  return (
    <div className="my-20">
      <TitleSection title="find top freelancers" />
      <div className="container mx-auto pt-5 px-10 grid gap-5 grid-cols-1 lg:grid-cols-3">
        {criterias.map(({ id, title, total }) => (
          <div
            key={id}
            className="py-10 text-center border-gray-100 border-2 shadow-md hover:shadow-xl
            transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
          >
            <h1 className="font-semibold pb-2">{title}</h1>
            <p>{total}</p>
            <p className="cursor-pointer mt-2 flex justify-center items-center gap-1 text-blue-600 font-semibold hover:text-blue-900">
              Find <FaArrowRight />
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/AllSkills">
          <button className="btn bg-cyan-600 hover:bg-cyan-900 text-white">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Criteria;

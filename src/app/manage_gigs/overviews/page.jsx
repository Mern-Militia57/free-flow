"use client";
import GiglineTag from "@/Components/GiglineTag";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const Overviews = () => {
  const navigationbar = useRouter();
  const [tags, setTags] = useState([]);
  const [warns, setWarning] = useState([]);

  const handleChange = (newTags) => {
    console.log(newTags);
    if (newTags.length <= 6) {
      setWarning("");

      setTags(newTags);
    } else {
      setWarning("Please do not give more than six");
    }
  };

  const [categories, setcategories] = useState([
    {
      name: "Graphic Design",
      subcategories: [
        "Logo Design",
        "Illustration",
        "Print Design",
        "Web Design",
        "Packaging Design",
      ],
    },
    {
      name: "Digital Marketing",
      subcategories: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Content Marketing",
        "Email Marketing",
      ],
    },
    {
      name: "Writing and Translation",
      subcategories: [
        "Copywriting",
        "Translation",
        "Creative Writing",
        "Technical Writing",
      ],
    },
    {
      name: "Music and Video",
      subcategories: [
        "Music Composition",
        "Video Editing",
        "Voice Over",
        "Jingles",
      ],
    },
    {
      name: "Programming Tech",
      subcategories: [
        "Web Development",
        "Mobile App Development",
        "Game Development",
        "Software Development",
      ],
    },
    {
      name: "Data",
      subcategories: ["Data Analysis", "Data Entry", "Data Visualization"],
    },
    {
      name: "Business",
      subcategories: [
        "Business Consulting",
        "Market Research",
        "Financial Consulting",
      ],
    },
    {
      name: "Lifestyle Photography",
      subcategories: [
        "Portrait Photography",
        "Event Photography",
        "Fashion Photography",
      ],
    },
  ]);

  const [subcategoriesFiles, setSubcategories] = useState([
    "Logo Design",
    "Illustration",
    "Print Design",
    "Web Design",
    "Packaging Design",
  ]);

  function OverViews(e) {
    e.preventDefault();
    const gigs_title = e.target.gigs_title.value;
    const categories_gigs = e.target.categories_gigs.value;
    const Sub_categories_gigs = e.target.Sub_categories_gigs.value;
    const search_Tags = tags;
    const OverViewData = {
      gigs_title,
      categories_gigs,
      Sub_categories_gigs,
      search_Tags,
    };

    // const getUserDetailsData = JSON.parse(localStorage.getItem(OverViewData));
    const ViewData = { OverViewData };
    localStorage.setItem("gigs-profile", JSON.stringify(ViewData));
    navigationbar.push("/manage_gigs/price");
  }

  function seleteSubcategories(e) {
    const values = e.target.value;
    const checkTheValues = categories?.find((p) => p.name === values);
    console.log(checkTheValues);
    setSubcategories(checkTheValues?.subcategories);
  }

  return (
    <>
      <GiglineTag />

      <form
        onSubmit={OverViews}
        className="px-10 sm:px-0 my-16  sm:w-9/12 mx-auto"
      >
        {/* -----------------------------------------------------------       */}
        <div className="sm:flex justify-center my-5 ">
          <div className="sm:w-3/12 p-5">
            <p className="text-xl font-bold text-gray-700 flex ">Gig title</p>
            <p className="my-2 text-sm text-gray-700">
              As your Gig storefront, your{" "}
              <span className="font-bold text-black">
                title is the most important place
              </span>{" "}
              to include keywords that buyers would likely use to search for a
              service like yours.
            </p>
          </div>

          <div className=" sm:w-8/12 p-5">
            <textarea
              name="gigs_title"
              placeholder="I Will Do something, I am really good at"
              style={{ height: "100px" }}
              className="border  border-gray-400 text-2xl text-gray-600 rounded-md p-2 mx-1 w-full "
            ></textarea>
          </div>
        </div>
        {/* -----------------------------------------------------------       */}

        <div className="sm:flex justify-center my-5 ">
          <div className="sm:w-3/12 p-5">
            <p className="text-xl font-bold text-gray-700 flex ">Category</p>
            <p className="my-2 text-sm text-gray-700">
              Choose the category and sub-category most suitable for your Gig.
            </p>
          </div>

          <div className=" sm:w-8/12 p-5">
            <select
              name="categories_gigs"
              onChange={seleteSubcategories}
              className="border p-3 sm:w-5/12 "
            >
              {categories?.map((p, index) => (
                <>
                  <option value={p} key={index} className="">
                    {p.name}
                  </option>
                </>
              ))}
            </select>

            <select
              name="Sub_categories_gigs"
              className="border p-3 mx-2 sm:w-5/12"
            >
              {subcategoriesFiles?.map((p, index) => (
                <>
                  <option value={p} key={index}>
                    {p || "check"}
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>

        {/* ------------------------------------------------------ */}

        <div className="sm:flex justify-center my-5 ">
          <div className="sm:w-3/12 p-5">
            <p className="text-xl font-bold text-gray-700 flex ">Search tags</p>
            <p className="my-2 text-sm text-gray-700">
              Tag your Gig with buzz words that are relevant to the services you
              offer. Use all 5 tags to get found.
            </p>
          </div>

          <div className=" sm:w-8/12 p-5">
            <p className="font-semibold text-red-600">{warns}</p>
            <TagsInput
              className="p-3 rounded-md  border border-gray-400"
              value={tags}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="sm:flex justify-end my-10">
          <input
            type="submit"
            value={"Continue"}
            className="btn btn-success text-white w-3/12"
          />
        </div>
      </form>
    </>
  );
};

export default Overviews;

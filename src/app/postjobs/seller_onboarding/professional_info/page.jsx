"use client";
import Buttonline from "@/Components/Buttonline";
import { useRouter } from "next/navigation";

import { Suspense, useContext, useRef, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loading from "./loading";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";

const ProfessionalInfo = () => {
  const navigationbar = useRouter();
  const { userProfile } = useContext(AuthContextPro);
  const occupation_names = [
    "Digital Marketing",
    "Video Editor",
    "Web Developer",
    "Data Analyst",
    "Photographer",
    "Digital Translator",
    "Content Creator",
    "Programmer",
  ];

  const occupation_categories = {
    "Digital Marketing": [
      "Affiliate Marketer",
      "Social Media Marketer",
      "SEO Specialist",

      "Content Creator",
      "Email Marketer",
    ],
    "Video Editor": [
      "Video Editor",
      "Motion Graphics Designer",
      "Film Editor",
      "YouTube Content Creator",
      "Video Production Assistant",
    ],
    "Web Developer": [
      "Web Developer",
      "Front-End Developer",
      "Back-End Developer",
      "Full-Stack Developer",
      "UI/UX Designer",
      "Web Application Developer",
    ],
    "Data Analyst": [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
      "Quantitative Analyst",
      "Market Research Analyst",
      "Machine Learning Engineer",
    ],
    Photographer: [
      "Photographer",

      "Portrait Photographer",
      "Event Photographer",
      "Fashion Photographer",
      "Commercial Photographer",
    ],
    "Digital Translator": [
      "Digital Translator",
      "Language Specialist",
      "Localization Expert",

      "Bilingual Content Creator",
      "Language Tutor",
    ],
    "Content Creator": [
      "Content Creator",
      "Blogger",
      "Vlogger",
      "Podcaster",
      "Influencer",
      "Social Media Content Creator",
    ],
    Programmer: [
      "Software Engineer",
      "Application Developer",
      "Game Developer",
      "Embedded Systems Engineer",
      "Mobile App Developer",
    ],
  };

  const freelancerSkills = [
    "Select Your Skill",
    "Web Design",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "Programming",
    "Social Media Management",
    "Video Editing",
    "Photography",
    "Translation",
    "Data Analysis",
  ];

  const from_date = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ];

  // ==============================================================================
  // occupation functionality

  const [datesValue, setDatesTo] = useState(["2023"]);

  function datechangefiles(e) {
    const datavalue = e.target.value;
    const matchdata = from_date.filter((p) => datavalue <= p);
    setDatesTo(matchdata);
  }

  const [ocupation_category, setCategory] = useState(
    [
      "Affiliate Marketer",
      "Social Media Marketer",
      "SEO Specialist",
      "Digital Translator",
      "Content Creator",
      "Email Marketer",
    ].map((occupation) => ({ name: occupation, checked: false }))
  );

  function ocupationSelection(e) {
    const getValue = e.target.value;
    const findata = occupation_categories[getValue].map((occupation) => ({
      name: occupation,
      checked: false,
    }));
    setCategory(findata);
  }

  // ====================================================================================

  // =======================================================================
  // skills functionality

  const [skillvaluechecklist, skillvaluecheck] = useState([]);
  function checkvalue(index) {
    const updatedCategory = [...ocupation_category];

    updatedCategory[index].checked = !updatedCategory[index].checked;
    setCategory(updatedCategory);
    const valueget = updatedCategory.filter((p) => p.checked === true);
    skillvaluecheck(valueget);
  }

  const [storeSkillValues, setSkillValues] = useState([]);
  const [warings, setwarning] = useState("");
  const [buttondisble, setbutton] = useState(false);
  const categorySkill = useRef();
  const levelValue = useRef();

  function skillSelection(e) {
    e.preventDefault();
    const skills = categorySkill.current.value;
    const level = levelValue.current.value;
    const Skill = { Skills: skills, Level: level };

    if (!storeSkillValues) {
      setSkillValues(Skill);
    } else if (storeSkillValues.length <= 2) {
      setSkillValues([...storeSkillValues, Skill]);
    } else {
      setwarning("Sorry you can't give more than three skills");
      setbutton(true);
    }
  }

  function deleteSkill(props) {
    const deleteData = storeSkillValues.filter((p) => p.Skills !== props);

    setSkillValues(deleteData);
    setbutton(false);
    setwarning("");
  }
  console.log(storeSkillValues);

  // ===============================================================================

  function professioanlSubmitInfo(e) {
    e.preventDefault();

    const occupation_Major = e.target.occupationMajor.value;
    const From = e.target.occupationperiods1.value;
    const End = e.target.occupationperiods2.value;
    const occupation_periods = { From, End };
    const occupation_Categories = skillvaluechecklist;
    const occupation = {
      occupation_Major,
      occupation_periods,
      occupation_Categories,
    };

    // ----------------------------------------------------

    const Skills = { storeSkillValues };
    // ----------------------------------------------

    const University_Name = e.target.UniversityName.value;
    const Subject_Name = e.target.SubjectName.value;
    const Year = e.target.year.value;
    const Education = { University_Name, Subject_Name, Year };

    // ------------------------------------------------------
    const spend_Time = e.target.spendTime.value;
    const Certification_Reward = e.target.CertificationReward.value;
    const Certificate_Link = e.target.CertificateLink.value;
    const Certificate = { Certification_Reward, Certificate_Link };

    const professional_Data = {
      occupation,
      Skills,
      Education,
      Certificate,
      spend_Time,
    };

    // set to localstorage --------------------------------------

    const getData = JSON.parse(localStorage.getItem("details"));
    getData.professional = professional_Data;
    getData.Email = userProfile?.email
    localStorage.setItem("details", JSON.stringify(getData));
    console.log(getData);
    navigationbar.push("/postjobs/seller_onboarding/linked_account");
  }



  
  return (
    <Suspense fallback={Loading}>
      <>
        <div>
          <Buttonline gives0={true} gives1={true} />
        </div>
        <div>
          <div className="border py-10 px-5 sm:w-10/12 container mx-auto bg-gray-100  text-center">
            <p className="text-gray-600 font-semibold text-3xl ">
              -- Professional Info --{" "}
            </p>
            <p className="text-gray-600 ">
              This is your time to shine. Let potential buyers know what you do
              best and how you gained your skills, certifications and
              experience..
            </p>
          </div>
        </div>

        <div className="formsubmit mt-20">
          <form
            className="mb-20 px-10 sm:px-0"
            onSubmit={professioanlSubmitInfo}
          >
            <div className="sm:flex justify-center ">
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Your Occupation
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                  <span className="text-gray-500 italic text-sm mx-2 mt-2">
                    (Private)
                  </span>{" "}
                </p>
              </div>

              <div className=" sm:w-8/12">
                <div style={{ alignItems: "center" }} className="sm:flex">
                  <select
                    required
                    name="occupationMajor"
                    onChange={ocupationSelection}
                    className="border border-gray-500 rounded-md p-2 mx-1 sm:w-4/12"
                  >
                    {occupation_names.map((p, index) => (
                      <option className="font-serif bg-sky-100" key={index}>
                        {p}
                      </option>
                    ))}
                  </select>

                  <p className="mx-2">From</p>
                  <select
                    required
                    name="occupationperiods1"
                    onChange={datechangefiles}
                    className="border border-gray-500 rounded-md p-2 mx-1"
                  >
                    {from_date.map((p, index) => (
                      <option key={index}>{p}</option>
                    ))}
                  </select>

                  <p className="mx-2">To</p>

                  <select
                    name="occupationperiods2"
                    className="border border-gray-500 rounded-md p-2 mx-1"
                  >
                    {datesValue.map((p, index) => (
                      <option key={index}>{p}</option>
                    ))}
                  </select>
                </div>

                <p className="text-gray-500 font-semibold my-5">
                  Choose
                  <span className="font-bold text-black"> two to five </span>
                  of your best skills in Business :{" "}
                </p>

                <div className="sm:grid grid-cols-3">
                  {ocupation_category.map((occupation, index) => (
                    <p
                      style={{ alignItems: "center" }}
                      className="font-semibold text-gray-600 m-1 flex"
                      key={index}
                    >
                      <input
                        name="occupationSkills"
                        id={`checkbox-${index}`}
                        className="mx-1"
                        onChange={() => checkvalue(index)}
                        type="checkbox"
                        value={occupation.name}
                        checked={occupation.checked}
                      />
                      {occupation.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------------- */}

            <div className="sm:flex justify-center my-16 ">
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Skills
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className=" sm:w-8/12">
                <div className="border bg-gray-100 p-3 rounded-2xl">
                  <p className="text-center font-bold text-red-600">
                    {warings}
                  </p>

                  <select
                    ref={categorySkill}
                    className="border sm:w-6/12 border-gray-500 rounded-md p-2 mx-1"
                  >
                    {freelancerSkills?.map((p, index) => (
                      <option className="bg-blue-100" key={index}>
                        {p}
                      </option>
                    ))}
                  </select>

                  <select
                    required
                    ref={levelValue}
                    className="border sm:w-3/12 border-gray-500 rounded-md p-2 mx-1"
                  >
                    <option className="bg-blue-100" value={"Beginner"}>
                      Beginner
                    </option>
                    <option className="bg-blue-100" value={"Intermediate"}>
                      Intermediate
                    </option>
                    <option className="bg-blue-100" value={"Expert"}>
                      Expert
                    </option>
                  </select>

                  <button
                    disabled={buttondisble}
                    onClick={skillSelection}
                    className="btn sm:w-2/12  bg-lime-600  text-white mx-2"
                  >
                    Add
                  </button>

                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Skill</th>
                          <th>Level</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {storeSkillValues?.map((p, index) => (
                          <>
                            <tr>
                              <th>{index + 1}</th>
                              <th>{p.Skills}</th>
                              <th>{p.Level}</th>
                              <th>
                                <RiDeleteBin5Fill
                                  onClick={() => deleteSkill(p.Skills)}
                                  className="text-3xl text-red-700"
                                />
                              </th>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}

            <div className="sm:flex justify-center my-16 ">
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Education
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className=" sm:w-8/12">
                <input
                  required
                  name="UniversityName"
                  placeholder="Your University Name..."
                  type="text"
                  className="border  border-gray-500 rounded-md p-2 my-1 mx-1 sm:w-4/12"
                />
                <input
                  required
                  name="SubjectName"
                  placeholder="Your Major Subject..."
                  type="text"
                  className="border  border-gray-500 rounded-md p-2 my-1 mx-1 sm:w-5/12"
                />

                <select
                  name="year"
                  className="border text-center border-gray-500 rounded-md p-2 mx-1 sm:w-2/12"
                >
                  <option> Year</option>
                  <option value={"1st year"}>1st year </option>
                  <option value={"2nd year"}>2nd year</option>
                  <option value={"3rd year"}>3rd year </option>
                  <option value={"4th year"}>4th year</option>
                  <option value={"Others"}> Others</option>
                </select>
              </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            <div className="sm:flex justify-center my-16 ">
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Certification
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className=" sm:w-8/12">
                <input
                  required
                  name="CertificationReward"
                  placeholder="Certificate Reward"
                  type="text"
                  className="border  border-gray-500 rounded-md my-1 p-2 mx-1 sm:w-3/12"
                />

                <input
                  required
                  name="CertificateLink"
                  placeholder="Provide Your Link "
                  type="url"
                  className="border  border-gray-500 rounded-md my-1 p-2 mx-1 sm:w-5/12"
                />

                <p className="my-2 text-gray-500 ms-2">
                  Kindly provide me with the link to your uploaded image (using
                  platforms like imgbb or others)
                </p>
              </div>
            </div>

            {/* ----------------------------------------------------------- */}

            <div className="sm:flex justify-center my-16 ">
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Spend time
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className=" sm:w-8/12">
                <input
                  required
                  name="spendTime"
                  type="number"
                  className="border-gray-500 rounded-md sm:w-2/12 px-5 py-2 border"
                  min="0"
                />
                <span className="mx-2 text-md">Hours</span>
              </div>
            </div>

            <div className="sm:flex justify-end">
              <input
                required
                type="submit"
                value="Continue"
                className="sm:w-2/12 sm:mx-10 text-white btn btn-success"
              ></input>
            </div>
          </form>
        </div>
      </>
    </Suspense>
  );
};

export default ProfessionalInfo;

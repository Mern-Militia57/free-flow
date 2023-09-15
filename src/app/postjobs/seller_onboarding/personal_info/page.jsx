"use client";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import Buttonline from "@/Components/Buttonline";

import { useRouter } from "next/navigation";
import React, {
  Suspense,
  useContext,
  useState,
} from "react";
import { FaStarOfLife } from "react-icons/fa6";
import Loading from "../professional_info/loading";

const PersonalInfo = () => {
  const { userProfile } = useContext(AuthContextPro);
  console.log(userProfile?.email, userProfile);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  console.log(selectedFile);

  const navigationbar = useRouter();

  const languages = [
    "English",
    "French",
    "German",
    "Italian",
    "Spanish",
    "Chinese",
    "Japanese",
    "Korean",
    "Portuguese",
    "Russian",
    "Hindi",
    "Arabic",
    "Turkish",
    "Greek",
    "Thai",
    "Vietnamese",
    "Polish",
  ];

  async function Personalinfo(e) {
    e.preventDefault();

    // const imageToken= process.env.IMAGE_DB
    const imageUrl = `https://api.imgbb.com/1/upload?key=705dacdae95930408512d341ffd8c826`;

    const formData = new FormData();
    formData.append("image", selectedFile);

    await fetch(imageUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((getdata) => {
        const profile_image = getdata.data.display_url;
        const email_address = userProfile?.email;
        const full_Name = e.target.firstname.value;
        const phone_Number = e.target.phone.value;
        const last_Name = e.target.lastname.value;
        const Display_Name = e.target.displayname.value;
        const Language = e.target.option.value;
        const Description = e.target.description.value;
        const personal_Information = {
          email_address,
          profile_image,
          phone_Number,
          full_Name,
          last_Name,
          Display_Name,
          Description,
          Language,
        };
        const proinformation = { personal_Information };

        localStorage.setItem("details", JSON.stringify(proinformation));
        console.log(proinformation);
        navigationbar.push("/postjobs/seller_onboarding/professional_info");
      });
  }

  return (
    <Suspense fallback={Loading}>
      <>
        <div className="">
          <Buttonline gives0={true} />
        </div>

        <div>
          <div className="border py-10 px-5 sm:w-10/12 container mx-auto bg-gray-100  text-center">
            <p className="text-gray-600 font-semibold text-3xl ">
              -- Personal Info --{" "}
            </p>
            <p className="text-gray-600 ">
              Tell us a bit about yourself. This information will appear on your
              public profile, so that potential buyers can get to know you
              better.
            </p>
          </div>
        </div>

        <div className="formsubmit mt-10">
          <form onSubmit={Personalinfo} className="px-10 sm:px-0">
            {/* ------------- */}
            <div
              style={{ alignItems: "center" }}
              className="sm:flex justify-center "
            >
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Full Name
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                  <span className="text-gray-500 italic text-sm mx-2 mt-2">
                    (Private)
                  </span>{" "}
                </p>
              </div>

              <div className="sm:flex sm:w-8/12">
                <input
                  placeholder="type your first name"
                  name="firstname"
                  type="text"
                  className="border  border-gray-500 rounded-md p-2 mx-1 sm:w-5/12"
                />
                <input
                  placeholder="type your last name"
                  name="lastname"
                  type="text"
                  className="border  border-gray-500 rounded-md p-2 mx-1 sm:w-5/12"
                />
              </div>
            </div>

            {/* ---------------- */}
            <div
              style={{ alignItems: "center" }}
              className="sm:flex justify-center my-5 "
            >
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Display Name
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className="sm:flex sm:w-8/12">
                <input
                  required
                  placeholder="your Surname"
                  name="displayname"
                  type="text"
                  className="border  border-gray-500 rounded-md p-2 mx-1 sm:w-4/12"
                />
              </div>
            </div>
            {/* ------------------------- */}
            <div
              style={{ alignItems: "center" }}
              className="sm:flex justify-center my-5 "
            >
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Profile Picture
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className="sm:flex sm:w-8/12">
                <input
                  required
                  onChange={handleFileChange}
                  name="imageURL"
                  type="file"
                  className="file-input file-input-bordered file-input-success  w-full max-w-xs"
                />
              </div>
            </div>

            {/* ------------------ */}
            <div
              style={{ alignItems: "center" }}
              className="sm:flex justify-center my-5"
            >
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Description
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className="sm:flex sm:w-8/12">
                <textarea
                  placeholder="write a description within 200 character "
                  name="description"
                  className="border border-gray-500 rounded-md p-2 mx-1 sm:w-10/12"
                ></textarea>
              </div>
            </div>
            {/* -------------- */}

            <div
              style={{ alignItems: "center" }}
              className="sm:flex justify-center my-5 "
            >
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  Phone Number
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className="sm:flex sm:w-8/12">
                <input
                  required
                  name="phone"
                  type="tel"
                  className="border  border-gray-500 rounded-md p-2 mx-1 sm:w-4/12"
                />
              </div>
            </div>

            {/* --------------------------------------- */}

            <div
              style={{ alignItems: "center" }}
              className="sm:flex justify-center my-5"
            >
              <div className="sm:w-3/12">
                <p className="text-xl text-gray-700 flex ">
                  language
                  <FaStarOfLife className="text-red-600 text-[0.5rem] mt-1" />
                </p>
              </div>

              <div className=" sm:w-8/12">
                <select
                  name="option"
                  className="border overflow-scroll border-gray-500 rounded-md p-2 mx-1 sm:w-4/12"
                >
                  {languages.map((p, index) => (
                    <option className="" key={index}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:flex    justify-end my-16 ">
              <input
                required
                type="submit"
                value="Continue"
                className="btn sm:mx-10  px-16 btn-success text-white"
              ></input>
            </div>
          </form>
        </div>
      </>
    </Suspense>
  );
};

export default PersonalInfo;

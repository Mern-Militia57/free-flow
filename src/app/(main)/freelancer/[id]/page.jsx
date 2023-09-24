"use client";

import { useParams } from "next/navigation";
import ReactStars from "react-rating-star-with-type";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { Editor, EditorState, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Styling for the editor
import {
  MdDeliveryDining,
  MdDescription,
  MdOutlineDescription,
} from "react-icons/md";
import { FcFaq } from "react-icons/fc";

// import userDetails from '@/app/manage_gigs/overviews/profileuser';
// import usergigs from "@/app/manage_gigs/overviews/lala"

import { BiRightArrow } from "react-icons/bi";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import useAllGigsPost from "@/Components/hooks/useAllGigsPost";
import useAllUserProfile from "@/Components/hooks/useAllUserProfile";
import Lottie from "lottie-react";
import spinnerfun from "@/Components/LottieAnimation/spinnerjsonFiles.json";
import { ImLoop2 } from "react-icons/im";

const DetailsFreelancer = () => {
  const [topPosition, setTopPosition] = useState(10);

  const [axiosMagic] = useMagicAxiosBoss();
  const [usergigs, refetch] = useAllGigsPost();
  const [userDetails] = useAllUserProfile();
  const { id } = useParams();
  const { userProfile } = useContext(AuthContextPro);

  if (usergigs.length <= 0 || userProfile.length <= 0) {
    return (
      <>
        <Lottie
          className="w-5/12 mx-auto"
          animationData={spinnerfun}
          loop={true}
        />
      </>
    );
  }

  const findQuest = usergigs?.find((p) => p?._id === id);
  const userFindData = userDetails?.find((p) => p?.Email === findQuest.Email);

  const { personal_Information, professional } = userFindData
    ? userFindData
    : [];

  const {
    profileImages,
    profileName,
    order,
    review,
    Email,
    gallary,
    OverViewData,
    Pricing,
    Details_And_Faq,
  } = findQuest;

  //  review rating avarge -----------------
  const reviewsRatingRate = review?.length;
  let count = 0;
  review?.map((p) => (count = count + p.review_rating));

  const ratingData = Math.floor(count / reviewsRatingRate);

  // ------------editor section--------
  const getUserDetailsData = Details_And_Faq.details;
  const contentState = convertFromRaw(getUserDetailsData);
  const editorState = EditorState.createWithContent(contentState);

  function onClickOrder(props) {
    const values = {
      pakage: props,
      ordergigsdetails: findQuest,
      userProfile: personal_Information,
      buyerEmail: userProfile?.email,
    };
    console.log(values);
    axiosMagic
      .post("/buerorder", values)
      .then((res) => window.location.replace(res.data.url));
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Adjust the top position based on the scroll position
    if (scrollTop <= 100) {
      setTopPosition(10); // Within the range
    } else {
      setTopPosition(scrollTop - 90); // Outside the range
    }
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  console.log(topPosition);

  return (
    <>
      <div className="border sm:flex border-red-500">
        <div className="sm:w-8/12 border p-5">
          <p className="sm:text-4xl  font-bold text-gray-600">
            {OverViewData.gigs_title}
          </p>

          <div
            style={{ alignItems: "center" }}
            className="sm:flex justify-between"
          >
            <div style={{ alignItems: "center" }} className="sm:flex p-1 mt-5 ">
              <Image
                className="rounded-full w-[65px] h-[65px]"
                src={profileImages}
                width={200}
                height={100}
                alt=""
              />

              <div>
                <span className="mx-2  font-semibold text-gray-700">
                  {profileName}
                </span>
                <span>({Email})</span>
                <div className="flex">
                  <ReactStars
                    classNames="ms-2"
                    size="1rem"
                    value={ratingData}
                    activeColor="#F31559"
                  />
                  <span className="text-gray-500">({ratingData || 0})</span>
                </div>
              </div>
            </div>
            <div className="sm:me-16 sm:mt-5">
              <span className="mx-1 bg-sky-500 text-white p-1">
                Completed Order
              </span>
              <span className="p-1 border border-sky-500  font-bold text-black">
                {order || 0}
              </span>
            </div>
          </div>
          <hr className="my-5 border-2"></hr>

          <p className="text-gray-700 text-xl font-semibold">
            Here are some pictures showcasing her work and activities.
          </p>
          <div className="mt-5 mb-10  sm:w-10/12 p-3 shadow-md shadow-red-400  border-2">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {gallary.map((p, index) => (
                <SwiperSlide key={`slide-${index}`}>
                  <Image
                    className="sm:w-full"
                    src={p}
                    width={400}
                    height={200}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ----------------details ------ */}
          <p
            style={{ alignItems: "center" }}
            className="flex font-bold text-2xl text-gray-800 sm:mx-1 my-2"
          >
            <MdDescription className="me-1" />
            Description:
          </p>
          <div className="border my-5  overflow-y-scroll max-h-[26rem] border-yellow-400  p-5">
            <Editor
              editorState={editorState}
              readOnly={true} // Make it read-only to display content only
            />
          </div>

          {/* --------------------------------------- */}

          {/* ------faQ---- */}

          <div className="mt-10">
            <p
              style={{ alignItems: "center" }}
              className="sm:flex font-semibold text-gray-600 sm:text-xl my-2 sm:mx-1"
            >
              <FcFaq className="me-1" /> Better understand the seller by
              answering this question
              <span className="font-bold text-black mx-1 text-2xl ">
                {" "}
                -(FAQ)
              </span>
            </p>
          </div>
          <div className="sm:w-full p-2 mb-20">
            {Details_And_Faq?.faq.map((p) => (
              <>
                <div className="collapse collapse-plus bg-gray-600 my-2 text-white">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title text-xl font-medium">
                    <span className="me-2 font-bold ">Question:</span>{" "}
                    {p.Question}
                  </div>
                  <div className="collapse-content">
                    <span className="me-2 font-bold ">Answer:</span>
                    {p.Details}
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* ----profile------ */}

          <div>
            <p className="text-xl font-semibold  text-gray-700 border sm:w-4/12 text-center  px-5 py-2">
              About the seller
            </p>

            <div style={{ alignItems: "center" }} className="sm:flex p-1 mt-5 ">
              <Image
                className="rounded-full w-[65px] h-[65px]"
                src={profileImages}
                width={200}
                height={100}
                alt=""
              />

              <div>
                <span className="mx-2  font-semibold text-gray-700">
                  {profileName}
                </span>
                <span>({Email})</span>
                <div className="flex">
                  <ReactStars
                    classNames="ms-2"
                    size="1rem"
                    value={ratingData}
                    activeColor="#F31559"
                  />
                  <span className="text-gray-500">({ratingData || 0})</span>
                </div>
              </div>

              <button className=" btn  text-white rounded-md   bg-[#FF6969] sm:ms-5">
                Details
                <BiRightArrow className="" />
              </button>
            </div>
          </div>

          <div className="mt-10 sm:w-10/12">
            <div className=" px-5 py-3 border   border-gray-200 sm:grid grid-cols-2 gap-x-3 gap-y-5">
              <div>
                <p className="font-semibold text-gray-600 text-xl">From</p>
                <p className="text-green-700 font-semibold">
                  {personal_Information?.country}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600 text-xl">
                  Avg. response time
                </p>
                <p className="text-green-700 font-semibold">
                  {professional?.spend_Time}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600 text-xl">Languages</p>
                <p className="text-green-700 font-semibold">
                  {personal_Information?.Language}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-600 text-xl">
                  Member since
                </p>
                <p className="text-green-700 font-semibold">
                  {personal_Information?.member_since}
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ alignItems: "center" }}
            className="mt-10 sm:flex gap-x-3 mx-2"
          >
            <p className="font-semibold text-xl text-gray-700">Search Tags: </p>

            <div className="sm:flex mt-5 sm:mt-0">
              {OverViewData?.search_Tags.map((p) => (
                <>
                  <span className="mx-1 sm:mx-2 border  text-white rounded-md bg-[#8062D6] p-2">
                    {p}
                  </span>
                </>
              ))}
            </div>
          </div>

          {/* ---------review---- */}

          <p className="font-semibold text-xl mt-16 text-gray-700">
            Below are individual reviews:
          </p>
          <div className="px-5 py-2">
            {review?.map((p) => (
              <>
                <div className="sm:flex p-1 border-b-2 py-10">
                  <div>
                    <Image
                      className="rounded-full w-[50px] h-[50px]"
                      src={p.profilePicture}
                      width={200}
                      height={100}
                      alt=""
                    />
                  </div>

                  <div className="sm:ms-3  sm:w-8/12">
                    <span className="mx-2  font-semibold text-gray-700">
                      {p.profileName}
                    </span>

                    <div className="flex">
                      <ReactStars
                        classNames="ms-2"
                        size="1rem"
                        value={p.review_rating}
                        activeColor="#FF9B50"
                      />
                      <span className="text-gray-500">({ratingData || 0})</span>
                    </div>
                    <p className="sm:ms-2 text-gray-600 font-semibold">
                      ({p.country_name})
                    </p>
                    <p className="sm:ms-2 mt-2 ">{p.review_details}</p>
                  </div>

                  <p className="ms-auto text-gray-700">
                    Date: <span className="">{p.review_date}</span>
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* -------------------- tabs part--------- */}

        <div className="relative  mt-2 sm:mx-5  ">
          <Tabs
            className={`p-5  sm:w-[25rem] ${
              topPosition >= 1562 ? "static" : "fixed"
            }  shadow-xl shadow-stone-300 border border-gray-300 rounded-xl`}
          >
            <TabList>
              <Tab>Basic</Tab>
              <Tab>Standard</Tab>
              <Tab>Standard</Tab>
            </TabList>

            <TabPanel className="">
              <p className=" p-3  text-2xl text-gray-800 text-center  ">
                {Pricing.basicPackage.name}
              </p>
              <p style={{ alignItems: "center" }} className="flex">
                <MdOutlineDescription className="me-2 text-xl" />

                {Pricing.basicPackage.details}
              </p>

              <p
                style={{ alignItems: "center" }}
                className="font-bold mt-3 flex"
              >
                <ImLoop2 className="me-2 " />
                Rivision: {Pricing.basicPackage.revision}
              </p>
              <p
                style={{ alignItems: "center" }}
                className="font-bold mt-3  mb-10 flex"
              >
                <MdDeliveryDining className="me-2 text-xl" />
                Delivery: {Pricing.basicPackage.deliveryTime}
              </p>

              <p className="bg-[#8843F2] sm:w-7/12 mx-auto rounded-md  text-2xl  p-2 font-semibold  text-white text-center mt-5">
                Price: {Pricing.basicPackage.price}$
              </p>
              <button
                onClick={() => onClickOrder(Pricing.basicPackage)}
                className="btn mt-5 bg-black text-white w-full"
              >
                Order
              </button>
            </TabPanel>

            <TabPanel className="">
              <p className=" p-3  text-2xl text-gray-800 text-center  ">
                {Pricing.standardPackage.name}
              </p>
              <p style={{ alignItems: "center" }} className="flex">
                <MdOutlineDescription className="me-2 text-xl" />
                {Pricing.standardPackage.details}
              </p>

              <p
                style={{ alignItems: "center" }}
                className="font-bold mt-3 flex"
              >
                <ImLoop2 className="me-2 " />
                Rivision: {Pricing.standardPackage.revision}
              </p>
              <p
                style={{ alignItems: "center" }}
                className="font-bold mt-3  mb-10 flex"
              >
                <MdDeliveryDining className="me-2 text-xl" />
                Delivery: {Pricing.standardPackage.deliveryTime}
              </p>

              <p className="bg-[#FF6969] sm:w-7/12 mx-auto rounded-md  text-2xl  p-2 font-semibold  text-white text-center mt-5">
                Price: {Pricing.standardPackage.price}$
              </p>
              <button
                onClick={() => onClickOrder(Pricing.standardPackage)}
                className="btn mt-5 bg-black text-white w-full"
              >
                Order
              </button>
            </TabPanel>

            <TabPanel className=" ">
              <p className=" p-3  text-2xl text-gray-800 text-center  ">
                {Pricing.premiumPackage.name}
              </p>
              <p style={{ alignItems: "center" }} className="flex">
                <MdOutlineDescription className="me-2 text-xl" />
                {Pricing.premiumPackage.details}
              </p>
              <p
                style={{ alignItems: "center" }}
                className="font-bold mt-3 flex"
              >
                <ImLoop2 className="me-2 " />
                Rivision: {Pricing.premiumPackage.revision}
              </p>
              <p
                style={{ alignItems: "center" }}
                className="font-bold mt-3  mb-10 flex"
              >
                <MdDeliveryDining className="me-2 text-xl" />
                Delivery: {Pricing.premiumPackage.deliveryTime}
              </p>

              <p className="bg-[#FF9B50] sm:w-7/12 mx-auto rounded-md  text-2xl  p-2 font-semibold  text-white text-center mt-5">
                Price: {Pricing.premiumPackage.price}$
              </p>
              <button
                onClick={() => onClickOrder(Pricing.premiumPackage)}
                className="btn mt-5 bg-black text-white w-full"
              >
                Order
              </button>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DetailsFreelancer;

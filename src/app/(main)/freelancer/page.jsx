"use client";

import useAllGigsPost from "@/Components/hooks/useAllGigsPost";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImPriceTag } from "react-icons/im";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactStars from "react-rating-star-with-type";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
// import datavalues from "@/app/manage_gigs/overviews/lala";
import Link from "next/link";
import useAllUserProfile from "@/Components/hooks/useAllUserProfile";

const FreelancersPage = () => {
<<<<<<< HEAD


const [usergigs,refetch] = useAllGigsPost()
const [ userDetails ] = useAllUserProfile()

console.log(usergigs,userDetails);

=======
  const [usergigs, refetch] = useAllGigsPost();
>>>>>>> origin

  return (
    <>
      <div className="my-20 sm:grid grid-cols-4 gap-x-5 gap-y-5 px-5">
        {usergigs?.map((p, index) => (
          <CardBody key={index} data={p} />
        ))}
      </div>
    </>
  );
};

function CardBody({ data }) {
  const {
    review,
    order,
    _id,
    OverViewData,
    gallary,
    Pricing,
    profileImages,
    profileName,
  } = data;

  const reviewsRatingRate = review?.length;
  let count = 0;
  review?.map((p) => (count = count + p.review_rating));

  const ratingData = Math.floor(count / reviewsRatingRate);

  return (
    <>
<<<<<<< HEAD
    <div  className="border border-gray-400 rounded-md hover:shadow-2xl hover:shadow-teal-200 transition-all duration-300 justify-between flex flex-col  w-full  p-1 govreddef">

      <div className="">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {gallary?.map((p) => (
            <>
              <SwiperSlide className="w-full ">
                <Image className="mx-auto" src={p} width={400} height={200} alt="" />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>


      <div style={{ alignItems: "center" }} className="flex p-2 mt-1  ">
        <Image className="rounded-full w-[40px] h-[40px]" src={profileImages} width={200} height={100} alt="" />
        <div>
          <p className="mx-2 font-semibold text-sm text-gray-500">{profileName}</p>
          <div className="flex">
            <ReactStars classNames="ms-2" size="1rem" value={ratingData} activeColor="#F31559" />
            <span className="text-gray-500">({ratingData || 0})</span>
=======
      <div className=" hover:shadow-2xl hover:shadow-teal-200 justify-between flex flex-col  w-full  p-1 govreddef">
        <div className="">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {gallary?.map((p) => (
              <>
                <SwiperSlide className="w-full ">
                  <Image
                    className="mx-auto"
                    src={p}
                    width={400}
                    height={200}
                    alt=""
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>

        <div style={{ alignItems: "center" }} className="flex p-1 mt-1  ">
          <Image
            className="rounded-full w-[40px] h-[40px]"
            src={profileImages}
            width={200}
            height={100}
            alt=""
          />
          <div>
            <p className="mx-2 font-semibold text-sm text-gray-500">
              {profileName}
            </p>
            <div className="flex">
              <ReactStars
                classNames="ms-2"
                size="1rem"
                value={ratingData}
                activeColor="#F31559"
              />
              <span className="text-gray-500">({ratingData || 0})</span>
            </div>
>>>>>>> origin
          </div>
        </div>

<<<<<<< HEAD
  
      <Link href={`/freelancer/${_id}`}>
      <p className="text-gray-600 cursor-pointer hover:underline font-semibold  text-md px-2 py-1">{OverViewData.gigs_title}</p>
      </Link>
    


      <div  className="mt-5  px-2"> 
          <p className="font-semibold text-sm text-gray-600 mx-1">Completed : {order} Jobs</p>
        </div>

        <div style={{alignItems:"center"}} className="mx-1 px-2  font-bold flex mb-5"> 
        <ImPriceTag className="me-1 text-sm"/>
        Starting From: 
=======
        <Link href={`/freelancer/${_id}`}>
          <p className="text-gray-600 cursor-pointer hover:underline font-semibold  text-xl px-1 py-1">
            {OverViewData.gigs_title}
          </p>
        </Link>

        <div className="mt-5  ">
          <p className="font-semibold text-sm text-gray-600 mx-1">
            Completed : {order} Jobs
          </p>
        </div>

        <div
          style={{ alignItems: "center" }}
          className="mx-1 font-bold flex mb-5"
        >
          <ImPriceTag className="me-1 text-sm" />
          Starting From:
>>>>>>> origin
          {Pricing?.basicPackage?.price}$
        </div>
      </div>
    </>
  );
}

export default FreelancersPage;

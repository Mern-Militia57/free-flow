import React from "react";
import pic1 from "@/assets/istockphoto-1500774201-612x612.jpg";
import pic2 from "@/assets/istockphoto-1392301370-612x612.jpg";
import pic3 from "@/assets/istockphoto-1415537875-612x612.jpg";
import Image from "next/image";
import { GrCurrency, GrUserManager } from "react-icons/gr";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

const Banner = () => {
  return (
    <>
      <div className="hero bg-gradient-to-t from-cyan-200 to-slate-100 py-16">
        <div className="hero-content flex-col justify-around lg:flex-row-reverse px-10">
          <div className="flex flex-col lg:flex-row gap-2">
            <div>
              <Image
                className="max-w-sm rounded-l-md shadow-xl"
                height={396}
                src={pic1}
                alt=""
              ></Image>
            </div>
            <div className="flex flex-row gap-2 lg:flex-col">
              <Image
                className="max-w-sm hidden lg:block rounded-tr-md"
                width={300}
                src={pic2}
                alt=""
              ></Image>
              <Image
                className="max-w-sm hidden lg:block rounded-br-md shadow-xl"
                width={300}
                src={pic3}
                alt=""
              ></Image>
            </div>
          </div>
          <div className="space-y-6 mr-10">
            <div class="text-5xl font-extrabold">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-700">
                Find & Hire <br /> Expert Freelancer
              </span>
            </div>
            <p className="text-lg">
              Work with the best freelance talent from around the world on our
              secure, flexible and cost-effective platform.
            </p>
            <div>
              <input
                type="text"
                placeholder="Search Experts"
                className="input w-full max-w-2xl"
              />
            </div>
            <button className="btn bg-cyan-700 hover:bg-cyan-900 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 px-10 grid grid-cols-2 lg:grid-cols-4 ">
        <div className="py-10 flex items-center gap-4">
          <GrUserManager className="w-8 h-8" />
          <p>
            30000 <br /> Employers Worldwide
          </p>
        </div>
        <div className="py-10 flex items-center gap-4">
          <FaHandHoldingDollar className="w-8 h-8" />
          <p>
            5,00,000 <br /> Paid Invoices
          </p>
        </div>
        <div className="py-10 flex items-center gap-4">
          <GrCurrency className="w-8 h-8" />
          <p>
            $20 Million <br /> Paid to Freelancers
          </p>
        </div>
        <div className="px-8 py-10 drop-shadow-xl flex items-center gap-4 bg-slate-100 border-gray-200 border-2 border-t-0">
          <SlBadge className="w-8 h-8" />
          <p>
            90% <br /> Customer Satisfaction Rate
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
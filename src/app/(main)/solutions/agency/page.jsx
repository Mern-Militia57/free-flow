
import React from "react";
import employer from "@/assets/employer.png";
import team from "@/assets/team-management.png";
import earn from "@/assets/earn-money.png";
import Image from "next/image";
import price from "@/assets/low-cost.png";

import { GrServices, GrUserManager } from "react-icons/gr";
import { CgProfile, IconName } from "react-icons/cg";
import { MdDomainVerification, MdOutlineGroups2 } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { AiOutlineFileProtect, AiOutlineTeam } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { BsFillPersonFill, BsHourglassSplit } from "react-icons/bs";
import { BiNetworkChart, BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";


const AgencyPage = () => {
















  return (
    <div className="container mx-auto">
      <div className="bg-gradient-to-br   text-white py-32 p-6 from-[#363E51] to-[#363E51]">
        <h1 className="text-[40px] mb-5 font-bold">
          Grow Your Business Exponentially
        </h1>
        <h1 className="font-bold">
          Flow Agency Solutions help you build your brand online, attract more
          Employers and earn more money for your business.
        </h1>
       
      </div>
      <div className="my-14 items-center justify-between px-4 gap-5 md:flex md:flex-row-reverse py-6">
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={employer}
          alt=""
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">Attract Potential Employers</h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            We help you build your brand on Flow so that you can attract and
            engage with potential Employers easily.
          </p>
        </div>
      </div>
      <div className=" mx-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <GrServices className="w-16 h-16"></GrServices>
          <h1 className="my-3 font-bold text-xl">Customize Your Profile</h1>
          <p>
            List services and add portfolios to help Employers know your
            capabilities.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <CgProfile className="w-16 h-16"></CgProfile>
          <h1 className="my-3 font-bold text-xl">Build a Brand</h1>
          <p>
            The more you work on Flow, the stronger and more credible your
            Profile becomes, thanks to All-Time Transaction Data.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <MdDomainVerification className="w-16 h-16"></MdDomainVerification>
          <h1 className="my-3 font-bold text-xl">Establish Credibility</h1>
          <p>
            ID Verification adds credibility to your Profile even if you have no
            transaction history on Flow.
          </p>
        </div>
      </div>
      <div className="my-14 items-center justify-between px-4 gap-5 md:flex md:flex-row-reverse py-6">
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={team}
          alt=""
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">Manage Jobs Better</h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            Get your team onboard, use tools and web services we offer and get
            work done smoothly.
          </p>
        </div>
      </div>
      <div className=" mx-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <FcCollaboration className="w-16 h-16"></FcCollaboration>
          <h1 className="my-3 font-bold text-xl">Collaborate with Your Team</h1>
          <p>
            Invite team members to work with you on Flow, whether or not they
            have an account.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <AiOutlineTeam className="w-16 h-16"></AiOutlineTeam>
          <h1 className="my-3 font-bold text-xl">
            Assign Roles to Team Members
          </h1>
          <p>
            Define the level of access you want to give to each team member.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <TbApi className="w-16 h-16"></TbApi>
          <h1 className="my-3 font-bold text-xl">Access Flows APIs</h1>
          <p>Build custom experiences using our APIs.</p>
        </div>
      </div>
      <div className="my-14 items-center justify-between px-4 gap-5 md:flex md:flex-row-reverse py-6">
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={earn}
          alt=""
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">Earn More</h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            Maximize value with the lowest fees in the industry.
          </p>
        </div>
      </div>
      <div className=" my-16 py-8 mx-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <Image className="w-16 h-16" width={350} src={price} alt=""></Image>
          <h1 className="my-3 font-bold text-xl">
            Pay the Lowest Job Fee in the Industry
          </h1>
          <p>Keep more of your hard earned money.</p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <FaFileInvoiceDollar className="w-16 h-16"></FaFileInvoiceDollar>
          <h1 className="my-3 font-bold text-xl">
            Split Job Fee with Employers
          </h1>
          <p>
            Based on your membership, you can reduce or even eliminate your job
            fee.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <AiOutlineFileProtect className="w-16 h-16"></AiOutlineFileProtect>
          <h1 className="my-3 font-bold text-xl">Protect Your Online Brand</h1>
          <p>
            Use the Private Transaction feature as a safeguard in case of any
            known risks.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center font-bold">
          Who can Benefit from Our Agency Solutions?
        </h1>
        <p className="border w-16 my-3 mx-auto border-blue-600"></p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="card border-t-4 shadow-md shadow-[#b2b6b9] rounded border p-4  border-t-[#2777C6] pt-8 ]  card-compact ">
            <div className="mx-auto">
              <div className="my-2 rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
                <BsFillPersonFill className="w-12  text-[#2777C6] mx-auto h-16"></BsFillPersonFill>
              </div>
            </div>
              <h1 className="font-bold my-4 text-xl text-center">Individual Freelancers</h1>
            
          </div>
          <div className="card border-t-4 shadow-md shadow-[#b2b6b9] rounded border p-4  border-t-[#2777C6] pt-8 ]  card-compact ">
            <div className="mx-auto">
              <div className="my-2 rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
                <BiNetworkChart className="w-12  text-[#2777C6] mx-auto h-16"></BiNetworkChart>
              </div>
            </div>
              <h1 className="font-bold my-4 text-xl text-center">Freelancers with a network</h1>
            
          </div>
          <div className="card border-t-4 shadow-md shadow-[#b2b6b9] rounded border p-4  border-t-[#2777C6] pt-8 ]  card-compact ">
            <div className="mx-auto">
              <div className="my-2 rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
                <AiOutlineTeam className="w-12  text-[#2777C6] mx-auto h-16"></AiOutlineTeam>
              </div>
            </div>
              <h1 className="font-bold my-4 text-xl text-center">Freelancers with a small team</h1>
            
          </div>
          <div className="card border-t-4 shadow-md shadow-[#b2b6b9] rounded border p-4  border-t-[#2777C6] pt-8 ]  card-compact ">
            <div className="mx-auto">
              <div className="my-2 rounded-full w-24 h-24 flex items-center justify-center bg-slate-100">
                <MdOutlineGroups2 className="w-12  text-[#2777C6] mx-auto h-16"></MdOutlineGroups2>
              </div>
            </div>
              <h1 className="font-bold my-4 text-xl text-center">Freelancers with a large team</h1>
            
          </div>
        </div>
      </div>
      <div className="text-center py-12 my-12">
      <div className="my-2 rounded-full w-24 h-24 flex items-center mx-auto justify-center bg-blue-400">
      <BiSolidQuoteAltRight className="text-center my-4 text-7xl mx-auto text-white"></BiSolidQuoteAltRight>
              </div>
       
        <p className="text-xl">Flow is not only a marketplace but a place to do business. We meet new clients and more often than not, establish long-term business relationships, all through Flow. The flexibility in how projects can be structured and the many payment options available allows us to work with clients in a way they feel most comfortable. We have been with Flow for over 10 years and hope to be here much longer.</p>
        <h1 className="font-bold my-5">Timothy Burr, Scopic Software, Custom IT Solutions Firm</h1>
      </div>
      
    </div>
  );
};

export default AgencyPage;

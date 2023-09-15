import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import hello from "../../../../assets/customize.png";
import compliant from "../../../../assets/compliant.png";
import price from "../../../../assets/low-price.png";
import price1 from "../../../../assets/low-cost.png";
import free from "../../../../assets/freelancer.png";
import man from "../../../../assets/man.jpg";
import Image from "next/image";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import { LiaFileContractSolid } from "react-icons/lia";
import { IconName, TbCurrencyDollarOff } from "react-icons/tb";



const EnterprisePage = () => {

  return (
    <div className=" container mx-auto">
      <div className="bg-gradient-to-br relative  text-white py-32 p-6 from-[#363E51] to-[#363E51]">
        <h1 className="text-[40px] mb-5 font-bold">
          Enterprise Solutions Customized for Your Business
        </h1>
        <h1 className="font-bold">
          Flow Enterprise offers everything you need to work efficiently and
          affordably online with Freelancers.
        </h1>

        <button   
          className="btn bg-[#0b6bb4] mt-5
           text-white font-bold border-none hover:bg-[#1e81cc]"
        >
          Request a Demo
        </button>
        <div className="border absolute top-2 right-3 flex justify-center text-center w-52 rounded-md">
          <p className="flex p-2 items-center gap-1">
            <BsTelephoneFill></BsTelephoneFill> <span>+1564897944</span>{" "}
          </p>
        </div>
      </div>
      <div className="my-14 items-center justify-between px-4 gap-5 md:flex md:flex-row-reverse py-6">
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={hello}
          alt=""
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">Custom Built for You</h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            We offer tailor-made solutions that accommodate the <br /> needs of
            your business and team to optimize your freelancing spend.
          </p>
        </div>
      </div>
      <div className=" mx-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <AiOutlineSolution className="w-16 h-16"></AiOutlineSolution>
          <h1 className="my-3 font-bold text-xl">Turnkey Solutions</h1>
          <p>
            We understand your goals and workflows to set up solutions that
            easily integrate with your current business process.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <MdOutlineManageAccounts className="w-16 h-16"></MdOutlineManageAccounts>
          <h1 className="my-3 font-bold text-xl">Account Management</h1>
          <p>
            A dedicated account manager is assigned to you for on-demand
            support.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <FaFileInvoiceDollar className="w-16 h-16"></FaFileInvoiceDollar>
          <h1 className="my-3 font-bold text-xl">Consolidated Invoicing</h1>
          <p>
            Pay hundreds of invoices in minutes and simplify your billing
            process.
          </p>
        </div>
      </div>
      <div className="my-14 items-center justify-between px-4  md:flex  md:flex-row-reverse gap-5 py-6">
        <div>
          <h1 className="text-4xl font-bold">Compliance & Security Benefits</h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            We offer compliance services and custom contracts <br /> to help
            safeguard your company.
          </p>
        </div>
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={compliant}
          alt=""
        ></Image>
      </div>
      <div className=" mx-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <GrServices className="w-16 h-16"></GrServices>
          <h1 className="my-3 font-bold text-xl">
            Worker Classification & Compliance Services
          </h1>
          <p>
            Our compliance team protects you from misclassification risks and
            reduces your istrative and legal burden.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <HiUserGroup className="w-16 h-16"></HiUserGroup>
          <h1 className="my-3 font-bold text-xl">
            Advanced Account Monitoring
          </h1>
          <p>
            Our account management team monitors your account and informs you if
            anything needs your attention.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <LiaFileContractSolid className="w-16 h-16"></LiaFileContractSolid>
          <h1 className="my-3 font-bold text-xl">Custom Contracts</h1>
          <p>
            We work with you to create Master of Service Agreement (MSA) and
            Statement of Work (SOW) contracts as per your needs.
          </p>
        </div>
      </div>
      <div className="my-14 items-center justify-between px-4 gap-5 md:flex md:flex-row-reverse py-6">
        <Image
          className="w-[250px] sm:justify-center sm:my-6"
          width={350}
          src={price}
          alt=""
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">Industry Lowest Fees</h1>
          <p className="border w-16 my-3 border-blue-600"></p>
          <p className="font-medium text-xl tracking-wide">
            We charge the lowest fees in the industry and <br /> ensure
            unmatched value for your spend.
          </p>
        </div>
      </div>
      <div className=" mx-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <Image className="w-16 h-16" width={350} src={price1} alt=""></Image>

          <h1 className="my-3 font-bold text-xl">Lowest Fees</h1>
          <p>
            Our industry lowest fees help you optimize spend and save money.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <Image className="w-16 h-16" width={350} src={free} alt=""></Image>
          <h1 className="my-3 font-bold text-xl">Tailor-Made Fee Structure</h1>
          <p>
            You can work on a flat fee structure or split fees with the
            Freelancer the way you want.
          </p>
        </div>
        <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
          <TbCurrencyDollarOff className="w-16 h-16"></TbCurrencyDollarOff>
          <h1 className="my-3 font-bold text-xl">No Enterprise Fee</h1>
          <p>
            There are no fees or hidden costs for creating and executing your
            customized Flow Enterprise Solution.
          </p>
        </div>
      </div>
      {/* from the CEO */}
      <div className="text-center my-16">
        <h1 className="text-4xl font-bold">From the CEO</h1>
        <p className="border w-16 mx-auto my-3 border-blue-600"></p>
        <p className="font-medium text-xl my-5 tracking-wide">
          We gain a deep understanding of your workflow and needs, and then
          create a custom experience that integrates smoothly with your
          operations. Our Enterprise Solution assures you of reduced operating
          costs and savings in what you pay to get work done online.
        </p>
        <div className="flex items-center my-9 justify-center gap-3">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
              <Image
                className=" w-12 h-12 "
                width={350}
                src={man}
                alt=""
              ></Image>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl">Abdul Rahman</h1>
            <p>Founder & CEO, flow.com</p>
          </div>
        </div>
      </div>
      {/* Request  a Demo */}
      <div name="demo">
        <h1 className="text-4xl text-center font-bold">Request a Demo</h1>
        <p className="border w-16 mx-auto my-3 border-blue-600"></p>
        <div>
          <div className="shadow-md shadow-[#b2b6b9] rounded border p-4">
            <h1 className="text-xl font-bold my-3">
              Share your details and we will contact you
            </h1>
            <form className="">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 font-bold text-lg "
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-gray-100 rounded border-2 border-gray-300 focus:border-black text-black outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="company name"
                      className="leading-7 text-lg font-bold"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="Company Name"
                      name="Company Name"
                      placeholder="Your Company Name"
                      className="w-full bg-gray-100 rounded border-2 border-gray-300 focus:border-black text-black outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg font-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-gray-100 rounded border-2 border-gray-300 focus:border-black text-black outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg font-bold"
                    >
                      Phone
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-gray-100 rounded border-2 border-gray-300 focus:border-black text-black outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-lg   font-bold"
                    >
                      Tell us more about your business
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Feedback or Message"
                      className="w-full bg-gray-100 rounded border-2 border-gray-300 focus:border-black h-32 text-black outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className=" text-white bg-[#0d7ed4] border-0 py-4 px-8 focus:outline-none hover:bg-[#005EA6] rounded text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage;

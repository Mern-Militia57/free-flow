import React from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GrCurrency, GrUserManager } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";

const AllSkillsLayout = ({ children }) => {
  return (
    <div>
      <div className="hero bg-gradient-to-t from-cyan-200 to-slate-100 py-20">
        <div className="hero-content flex-col text-center lg:flex-row-reverse">
          <div className="space-y-4">
            <div className="my-7 space-y-4">
              <h1 class="text-3xl lg:text-5xl font-bold">
                Find & Hire Freelancers By Skills
              </h1>
              <p className="text-xl font-semibold">
                Browse 2 Million Freelance Experts Online
              </p>
              <p className="text-lg font-semibold">
                Hire skilled Freelancers on Free Flow and get work done on a
                flexible and secure platform.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
              <>
                <input
                  type="text"
                  placeholder="What Skill are you looking for?"
                  className="input w-full max-w-lg"
                />
              </>
              <div>
                <p className="text-lg">or</p>
              </div>
              <div>
                <button className="btn bg-cyan-700 hover:bg-cyan-900 text-white">
                  Post a Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 px-10 grid grid-cols-2 lg:grid-cols-4 ">
        <div className="py-8 flex items-center gap-4">
          <GrUserManager className="w-8 h-8" />
          <p>
            30000 <br /> Employers Worldwide
          </p>
        </div>
        <div className="py-8 flex items-center gap-4">
          <FaHandHoldingDollar className="w-8 h-8" />
          <p>
            5,00,000 <br /> Paid Invoices
          </p>
        </div>
        <div className="py-8 flex items-center gap-4">
          <GrCurrency className="w-8 h-8" />
          <p>
            $20 Million <br /> Paid to Freelancers
          </p>
        </div>
        <div className="px-8 py-8 drop-shadow-xl flex items-center gap-4 bg-slate-100 border-gray-200 border-2 border-t-0">
          <SlBadge className="w-8 h-8" />
          <p>
            90% <br /> Customer Satisfaction Rate
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AllSkillsLayout;

import Image from "next/image";
import React from "react";
import img from "@/assets/download.webp";
const SafePayPage = () => {
  return (
    <div className="mx-auto container">
      <div className="bg-gradient-to-br   text-white py-32 p-6 from-[#363E51] to-[#363E51]">
        <h1 className="text-[40px] mb-5 font-bold">
          Payment Protection with SafePay
        </h1>
        <h1 className="font-bold">
          SafePay is a secure, transparent and convenient way to make and
          receive payments for online freelance services on Flow.
        </h1>
      </div>
      <div className=" my-14 px-16">
        <h1 className="text-4xl  text-center font-bold">What is SafePay?</h1>
        <p className="border mx-auto w-16 my-3 border-blue-600"></p>
        <div className="items-center justify-center px-4 gap-5 md:flex md:flex-row-reverse py-6">
          <div className="w-1/2">
            <p className="font-medium text-xl tracking-wide">
              SafePay helps provide transparency on the platform. It is a shared
              account that is funded by the Employer before starting work. When
              SafePay is funded, the Freelancer can feel confident that funds
              are available, and the Employer feels secure that work can be
              reviewed before making the payment.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              className="w-[450px] sm:justify-center sm:my-6"
              width={350}
              src={img}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl  text-center font-bold">
          How Does SafePay Work?
        </h1>
        <p className="border mx-auto w-16 my-3 border-blue-600"></p>
        <p className="my-3 p-4 bg-slate-100">
        Funds in SafePay are not tied to one specific job or task and can be used to make payments for any work done with respect to the job on our online freelance marketplace. An Employer can pay for tasks, milestones, hours, miscellaneous work, or even bonuses. Funds can be released to either the Employer or the Freelancer. In the case of a disagreement, either party can request Arbitration, as long as funds are available in SafePay.
        </p>
      </div>
    <div className="my-12">
    <h1 className="text-4xl  text-center font-bold">Frequently Asked Questions</h1>
        <p className="border mx-auto w-16 my-3 border-blue-600"></p>
        <div className="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Is it mandatory to use SafePay?
  </div>
  <div className="collapse-content"> 
    <p>No, it is not mandatory to use SafePay. We recommend the use of SafePay especially when you are working with a Freelancer for the first time.</p>
  </div>
</div>
<div className="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Is it free to use SafePay?
  </div>
  <div className="collapse-content"> 
    <p>Yes, SafePay is free to use by both Employers and Freelancers. However, if Arbitration is requested, we charge an Arbitration Fee of either $25 or 5% of the SafePay balance (whichever is higher). This fee is taken from the funds in SafePay. If SafePay balance is $50 or less, we waive our fee and the balance is distributed equally between the Employer and the Freelancer.</p>
  </div>
</div>
<div className="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How do I add funds to SafePay?
  </div>
  <div className="collapse-content"> 
    <p>Funds can be added by the Employer, based on the Agreement or a request to fund sent by the Freelancer.</p>
  </div>
</div>
<div className="collapse collapse-arrow ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What is the role of Arbitration while using SafePay?
  </div>
  <div className="collapse-content"> 
    <p>We offer Arbitration services only for funds in SafePay. Either party can request for Arbitration during which our Arbitrators review job expectations, communication between the parties, and work deliverables. Once a ruling is reached, funds in SafePay are distributed.</p>
  </div>
</div>
    </div>
    </div>
  );
};

export default SafePayPage;

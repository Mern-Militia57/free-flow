"use client";
import Buttonline from "@/Components/Buttonline";
import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import { Suspense, useContext, useState } from "react";
import swal from "sweetalert";
import Loading from "../professional_info/loading";
import { useRouter } from "next/navigation";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";

const AccountSecurity = () => {
  const [axiosMagic] = useMagicAxiosBoss();
  const {userProfile} = useContext(AuthContextPro)
  const [isTrue, setTrue] = useState(true);
  const router = useRouter();
  const submitToDataBase = () => {
    const getUserDetailsData = JSON.parse(localStorage.getItem("details"));
    console.log(getUserDetailsData);

    axiosMagic.patch(`/users/seller/${userProfile.email}`)
    .then((res) =>{
      const result = res.data
      console.log(result);
    })

    axiosMagic
      .post(`/userdetails_post`, getUserDetailsData)
      .then((res) => {
        console.log(res.data);

        new swal({
          text: `Hi , Successfully Submit`,
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        new swal({
          text: "Already You Have Applied",
          icon: "error",
        });
      });
    localStorage.removeItem("details");
    router.push("/")
  };

  return (
    <Suspense fallback={Loading}>
      <>
        <div>
          <Buttonline gives0={true} gives1={true} gives2={true} gives3={true} />
        </div>

        <div className="border  my-5 sm:w-10/12 mx-auto h-[20rem] overflow-y-scroll">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-4">
              Free-Flow Website Conditions
            </h1>
            <p className="mb-4">
              Welcome to Free-Flow, your go-to platform for freelancing
              excellence. Before you dive into the world of opportunities,
              please take a moment to familiarize yourself with our terms and
              conditions. These guidelines ensure a fair and transparent
              environment for all our users.
            </p>
            <h2 className="text-xl font-semibold mb-2">1. User Accounts</h2>
            <p className="mb-4">
              To access and utilize Free-Flows services, users are required to
              create an account. All provided information must be accurate and
              up-to-date.
            </p>
            <h2 className="text-xl font-semibold mb-2">2. User Conduct</h2>
            <p className="mb-4">
              We expect all users to maintain a respectful and professional
              demeanor in all interactions on the platform. Any form of
              harassment, discrimination, or offensive behavior will not be
              tolerated.
            </p>
            <h2 className="text-xl font-semibold mb-2">
              3. Intellectual Property
            </h2>
            <p className="mb-4">
              Freelancers retain ownership of their original work created for
              clients, unless stated otherwise in the gig description. Clients
              are granted usage rights upon successful completion of the project
              and payment.
            </p>
            <h2 className="text-xl font-semibold mb-2">4. Gig Creation</h2>
            <p className="mb-4">
              Freelancers can create gigs that accurately represent their skills
              and services. Gigs must adhere to our guidelines and should not
              violate any copyright or intellectual property laws.
            </p>
            <h2 className="text-xl font-semibold mb-2">5. Order Process</h2>
            <p className="mb-4">
              Clients can place orders for specific gigs. Freelancers are
              expected to deliver high-quality work within the agreed-upon
              timeframe. Clients can request revisions within the gigs scope.
            </p>
            <h2 className="text-xl font-semibold mb-2">6. Payments</h2>
            <p className="mb-4">
              Payments for services are securely processed through our platform.
              Freelancers receive their earnings after deducting applicable
              fees. Clients are protected through escrow services until
              satisfied with the work.
            </p>
            <h2 className="text-xl font-semibold mb-2">
              7. Dispute Resolution
            </h2>
            <p className="mb-4">
              In case of disagreements, users are encouraged to resolve issues
              amicably through our built-in communication tools. If a resolution
              cannot be reached, Free-Flow provides a dispute resolution
              process.
            </p>
            <h2 className="text-xl font-semibold mb-2">
              8. Privacy and Security
            </h2>
            <p className="mb-4">
              We prioritize the security of your personal and financial
              information. User data is treated with utmost confidentiality and
              stored securely.
            </p>
            <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
            <p className="mb-4">
              Free-Flow reserves the right to suspend or terminate accounts that
              violate our terms and conditions or engage in fraudulent
              activities.
            </p>
            <h2 className="text-xl font-semibold mb-2">10. Updates to Terms</h2>
            <p className="mb-4">
              Our terms and conditions may be updated periodically to reflect
              changes in our services or regulations. Users will be notified of
              any significant changes.
            </p>
          </div>
        </div>

        <div className="mt-5  sm:w-10/12 mx-auto">
          <hr className=" border-blue-400 border "></hr>
          <p style={{ alignItems: "center" }} className="flex my-5">
            <input
              onChange={() => setTrue(!isTrue)}
              type="checkbox"
              className="mx-2"
            />
            <span className="font-bold">
              Please read the above terms and conditions carefully, and then
              check the box to indicate your agreement
            </span>
          </p>
        </div>

        <div className="sm:flex justify-end mt-10">
          <button
            onClick={submitToDataBase}
            disabled={isTrue}
            className="sm:w-2/12 mx-10 text-white btn btn-success"
          >
            Finish
          </button>
        </div>
      </>
    </Suspense>
  );
};

export default AccountSecurity;

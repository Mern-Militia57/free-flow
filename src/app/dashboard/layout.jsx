"use client";
import Image from "next/image";
import logo from "@/assets/icon.png";
import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import useAdmin from "@/Components/hooks/useAdmin";

const DashboardLayout = ({ children }) => {
  const [isAdmin] = useAdmin();
  const isSeller = true;

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <div className="my-5">{children}</div>
          <label
            htmlFor="my-drawer-2"
            className="btn w-14 bg-base-200 text-black drawer-button lg:hidden"
          >
            <FaBars />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 lg:ml-5 rounded-xl lg:my-5 w-64 h-full bg-gradient-to-t from-blue-600 to-cyan-700 text-white text-lg">
            {/* Sidebar content here */}
            <Link href="/">
              <div className="flex cursor-pointer items-center mt-4 mb-10 mx-auto gap-2 border-b-2 border-slate-200 pb-5">
                <Image width={50} height={50} src={logo} alt="logo"></Image>
                <h1 className="text-3xl text-slate-50 font-bold">Free Flow</h1>
              </div>
            </Link>
            {isAdmin ? (
              <>
                <li>
                  <Link href="/dashboard/admin/overview">Overview</Link>
                </li>
                <li>
                  <Link href="/dashboard/admin/manageUsers">
                    Users Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/admin/manageProjects">All Projects</Link>
                </li>
                <li>
                  <Link href="/dashboard/admin/manageGigs">Manage Gigs</Link>
                </li>
                <li>
                  <Link href="/dashboard/admin/allFreelancers">
                    Freelancers
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/admin/analysePayments">
                    Analyse Payments
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/admin">Feedback & Review</Link>
                </li>
              </>
            ) : isSeller ? (
              <>
               <li>
                  <Link href="/dashboard/seller/overview">Overview</Link>
                </li>
               <li>
                  <Link href="/dashboard/seller/myGigs">MyGigs</Link>
                </li>
               <li>
                  <Link href="/dashboard/seller/myClients">MyClients</Link>
                </li>
               
                
                <li>
                  <a>Invoices</a>
                </li>
                <li>
                  <a>Profile</a>
                </li>
              </>
            ) : (
              <>
                 <li>
                  <Link href="/dashboard/buyer/overview">Overview</Link>
                </li>
              
                <li>
                  <Link href="/dashboard/buyer/myJobs">MY Jobs</Link>
                </li>
               
                <li>
                  <a>Selected Gigs</a>
                </li>
                <li>
                  <a>Payments</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;

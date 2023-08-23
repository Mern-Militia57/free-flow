"use client";
import Image from "next/image";
import { useContext } from "react";
import logo from "../assets/icon.png";
import Link from "next/link";
import { AuthContextPro } from "./AuthProviderFiles/AuthProviderPro";

const Navbar = () => {
  const { userProfile, logoutProfile } = useContext(AuthContextPro);

  return (
    <>
      <div className="navbar sticky top-0 z-10 bg-gradient-to-r drop-shadow from-slate-100 to-cyan-100 py-3 px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/findjobs">Find Jobs</Link>
              </li>
              <li>
                <Link href="/freelancer">Freelancer</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
              {userProfile ? (
                <>
                  <li>
                    <Link href="/dashboard">Profile</Link>
                  </li>
                  <li>
                    <a onClick={logoutProfile}>Logout</a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/register">SignUp</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex gap-20">
            <div>
              <Link
                href="/"
                className="btn btn-ghost normal-case hover:bg-transparent text-xl"
              >
                <Image width={30} src={logo} height={30} alt="thumbnail" />
                Free Flow
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal text-[16px] font-medium px-1">
                <li className="border-x-2 border-black">
                  <Link href="/findjobs">Find Jobs</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/freelancer">Freelancer</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/about">About</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/solutions">Solutions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn bg-cyan-600 hover:bg-cyan-900 text-white">
            Post Jobs
          </button>
          <div className="hidden md:block">
            <ul className="flex menu menu-horizontal gap-2 text-[16px] font-medium">
              {userProfile ? (
                <div className="dropdown-end dropdown">
                  <label
                    tabIndex={0}
                    className="btn-ghost btn-circle avatar btn"
                  >
                    <div className="w-12 border-purple-700 border-2 rounded-full">
                      <Image
                        title={userProfile?.displayName}
                        width={200}
                        height={200}
                        alt=""
                        src={userProfile?.photoURL || ""}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
                  >
                    <li className="mb-2 mt-1 text-center font-semibold">
                      {userProfile?.displayName}
                    </li>
                    <div className="divider my-0"></div>
                    <li className="mb-2">
                      <Link
                        href="/dashboard"
                        className="text-lg"
                        activeClassName="text-blue-500"
                      >
                        Profile
                      </Link>
                    </li>
                    <li className="">
                      <button
                        onClick={logoutProfile}
                        className="btn bg-red-500  content-center text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <li className="border-r-2 px-2 border-black">
                    <Link href={"/register"}>Signup</Link>
                  </li>
                  <li className="pr-2">
                    <Link href={"/login"}>Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

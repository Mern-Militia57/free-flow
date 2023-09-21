"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import logo from "@/assets/icon.png";
import Link from "next/link";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import { useRouter } from "next/navigation";
import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import { FaRegBell, FaRegHeart, FaRegMessage } from "react-icons/fa6";
import useSeller from "@/Components/hooks/useSeller";
import useAdmin from "@/Components/hooks/useAdmin";

const Navbar = () => {
  const { userProfile, logoutProfile } = useContext(AuthContextPro);
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();
  const navigationbar = useRouter();

  const [axiosMagic] = useMagicAxiosBoss();
  const [profileAvaible, setCheckProfileAvaible] = useState([]);

  useEffect(() => {
    axiosMagic
      .get(`/userdataquery?email=${userProfile?.email}`)
      .then((res) => setCheckProfileAvaible(res.data));
  }, [axiosMagic, userProfile?.email]);

  function logoutFiles() {
    logoutProfile();
    navigationbar.push("/");
  }

  return (
    <>
      <div className="navbar sticky top-0 z-10 bg-gradient-to-r drop-shadow from-slate-100 to-cyan-100 py-2 px-2">
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
                <Link href="/findprojects">Find Jobs</Link>
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
                    <Link href="/dashboard">Dashboard</Link>
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
                className="btn btn-ghost normal-case hover:bg-transparent text-md"
              >
                <Image width={30} src={logo} height={30} alt="thumbnail" />
                Free Flow
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal text-[16px] font-medium px-1">
                <li className="border-x-2 border-black">
                  <Link href="/findprojects">Projects</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/freelancer">Freelancers</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/about">About</Link>
                </li>
                <li className="border-r-2 border-black">
                  <Link href="/blogs">Blog</Link>
                </li>
                <div className="dropdown dropdown-hover">
                  <li className="border-r-2 border-black">
                    <p tabIndex={0}>Solutions</p>
                    <ul
                      tabIndex={0}
                      className="dropdown-content mt-9 p-2 bg-base-100 w-56"
                    >
                      <li>
                        <Link
                          href="/solutions/agency"
                          className="hover:text-blue-700"
                        >
                          Agency
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/solutions/enterprise"
                          className="hover:text-blue-700"
                        >
                          Enterprise
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/solutions/purchase_order"
                          className="hover:text-blue-700"
                        >
                          Purchase Order
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/solutions/agreements"
                          className="hover:text-blue-700"
                        >
                          Agreements
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/solutions/safePay"
                          className="hover:text-blue-700"
                        >
                          SafePay
                        </Link>
                      </li>
                    </ul>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          {userProfile ? (
            <>
              <Link
                href={
                  profileAvaible.length > 0
                    ? "http://localhost:3000/manage_gigs/overviews"
                    : "/postjobs"
                }
              >
                <button className="btn bg-cyan-700 hover:bg-cyan-900 mr-5 text-white">
                  Post Jobs
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <button className="btn bg-cyan-700 hover:bg-cyan-900 text-white">
                  Post Jobs
                </button>
              </Link>
            </>
          )}
          {/* {userProfile && (
            <div className="hidden md:flex gap-6 items-center mx-6">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <FaRegBell className="text-xl" />
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] card card-compact overflow-y-auto w-80 h-96 mt-4 bg-base-200"
                >
                  <div className="card-body">
                    <h3 className="text-xl font-semibold text-center pb-2">
                      Notifications
                    </h3>
                    <p>you can use any element as a dropdown.</p>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <FaRegMessage className="text-xl" />
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] card card-compact overflow-y-auto w-80 h-96 mt-4 bg-base-200"
                >
                  <div className="card-body">
                    <h3 className="text-xl font-semibold text-center pb-2">
                      Messages
                    </h3>
                    <p>you can use any element as a dropdown.</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer hidden">
                <FaRegHeart className="text-xl" />
              </div>
              <div className="cursor-pointer">
                <p className="text-[16px] font-medium">Orders</p>
              </div>
            </div>
          )} */}


          <div className="hidden md:block">
            <ul className="flex menu menu-horizontal gap-2 text-[16px] font-medium">
              {userProfile ? (
                <div className="dropdown-end dropdown">
                  <label
                    tabIndex={0}
                    className="btn-ghost btn-circle avatar btn"
                  >
            
                    <div className="w-10 border-purple-900 border-2 rounded-full">
                      <Image
                        title={userProfile?.displayName}
                        width={150}
                        height={150}
                        alt=""
                        src={userProfile?.photoURL || ""}
                      />
                    </div>
               
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu-compact dropdown-content menu mt-3 w-52 bg-base-100 p-2 shadow"
                  >
                    <li className="mb-2 mt-1 text-center font-semibold">
                      {userProfile?.displayName}
                    </li>
                    <div className="divider my-0"></div>
                    <li className="mb-1">
                      <Link href="/profile" className="text-lg">
                       Profile
                      </Link>
                    </li>


                    <li className="mb-1">
                      <Link href="/post_project" className="text-lg">
                        Post a Project
                      </Link>
                    </li>
                    {isSeller ? (
                      <>
                        <li className="mb-1">
                          <Link
                            href="/manage_gigs/overviews"
                            className="text-lg"
                          >
                            Post a Gig
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="mb-1">
                          <Link href="/postjobs" className="text-lg">
                            Become a Seller
                          </Link>
                        </li>
                      </>
                    )}
                    {isAdmin ? (
                      <li className="mb-1">
                        <Link
                          href="/dashboard/admin/overview"
                          className="text-lg"
                        >
                          Dashboard
                        </Link>
                      </li>
                    ) : isSeller ? (
                      <li className="mb-1">
                        <Link
                          href="/dashboard/seller/overview"
                          className="text-lg"
                        >
                          Dashboard
                        </Link>
                      </li>
                    ) : (
                      <li className="mb-1">
                        <Link
                          href="/dashboard/buyer/overview"
                          className="text-lg"
                        >
                          Dashboard
                        </Link>
                      </li>
                    )}
                    <li className="">
                      <button
                        onClick={logoutFiles}
                        className="btn btn-sm bg-green-500  content-center text-white"
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

"use client";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import React, { startTransition, useContext } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
export const metadata = {
  title: "Login | Free Flow",
};

const LoginPage = () => {
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();
  const { loginProfile, registerWithGoogle, registerWithFacebook } =
    useContext(AuthContextPro);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleregister = async () => {
    try {
      const resGoogle = await registerWithGoogle();
      const dataAll = resGoogle.user;
      const uid = dataAll.uid;
      const displayName = dataAll.displayName;
      const email = dataAll.email;
      const photo = dataAll.photoURL;
      console.log(dataAll);

      const resServer = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          uid: uid,
          name: displayName,
          email: email,
          photo: photo,
        }),
      });

      const result = await resServer.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // const difref = useRef();

  // function resetsubmit() {
  //   resetpasswordsubmit(difref.current.value)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // }

  function faceboookdopen() {
    registerWithFacebook()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  function loginSubmit(data) {
    const email = data.email;
    const password = data.password;

    loginProfile(email, password)
      .then((credenAccount) => {
        console.log(credenAccount);
        startTransition(() => {
          refresh();
          replace(from);
          new swal({
            title: "Login is Successfull",
            icon: "success",
          });
        });
      })
      .catch((error) => {
        console.log(error);
        const errorCodes = error.code;
        if (errorCodes === "auth/wrong-password") {
          new swal({
            title: "password not match, please again?",

            icon: "warning",
            dangerMode: true,
          });
        } else if (errorCodes === "auth/user-not-found") {
          new swal({
            title: "You have no account, register Now?",

            icon: "warning",
            dangerMode: true,
          });
        }
      });
  }

  return (
    <div className="my-10 container mx-auto">
      <div className="container mx-auto px-10 py-10 border-2">
        <h1 className="text-grey-700 text-3xl font-bold text-center my-5">
          Login User
        </h1>
        <form
          onSubmit={handleSubmit(loginSubmit)}
          className="flex flex-col items-center"
        >
          <input
            {...register("email", { required: true })}
            className="border border-black rounded-md w-full sm:w-80 my-2 p-2"
            type="email"
            placeholder="Type your email"
            name="email"
          />
          {errors.email && (
            <span className="text-red-700 -mt-1">Please enter your email</span>
          )}

          <input
            {...register("password", { required: true })}
            className="w-full sm:w-80 border border-black rounded-md my-2 p-2"
            type="password"
            placeholder="Type your password"
            name="password"
          />

          {errors.password && (
            <span className="text-red-700 -mt-1">
              Please enter your password
            </span>
          )}
          <input
            className=" w-full lg:w-80 rounded-2 btn my-3 text-white bg-blue-700 hover:bg-blue-800"
            type="submit"
            value="Login"
          />
        </form>
        <div className=" text-center">
          <div className="cursor-auto mb-2">
            <p>Forgot Password?</p>
          </div>
          <p className="sm:px-5 mb-3">
            You havent registered yet,
            <Link
              href={"/register"}
              className="font-bold text-xl ml-1 text-blue-800"
            >
              Registration
            </Link>
          </p>
        </div>
        <div className="sm:flex flex-col items-center mb-5 gap-5">
          <button
            onClick={googleregister}
            className="btn bg-base-100 border-black  my-2 sm:my-0 w-full lg:w-80 text-black"
          >
            <FcGoogle className="text-xl" />
            Sign In With Google
          </button>
          <button
            onClick={faceboookdopen}
            className="btn bg-base-100 border-black  my-2 sm:my-0 w-full lg:w-80 text-black"
          >
            <BiLogoFacebookCircle className="text-xl text-blue-500" />
            Sign In With Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";
import useBlogs from "@/Components/hooks/useBlogs";
import axios from "axios";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import {} from "react-icons/fa";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { FaComment, FaShare, FaThumbsUp } from "react-icons/fa6";

const page = () => {
  const { userProfile } = useContext(AuthContextPro);
  const [blogs, loading, refetch] = useBlogs();
  const [image, setImage] = useState("");

  function handleBlogPost(e) {
    e.preventDefault();
    const blogger = userProfile?.displayName;
    const bloggerImg = userProfile?.photoURL;

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    const form = e.target;
    const title = form.title.value;
    const details = form.details.value;

    const img = form.img.value;

    console.log(img);
    const blog = { title, details, img, formattedDate, bloggerImg, blogger };
    console.log(blog);
    fetch("http://localhost:5000/dashboard/buyer/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Blog Created successfully",
          });
          form.reset();
          refetch();
        }
      });
  }

  const handleComment=(e)=>{
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
  }
  return (
    <div className="container mx-auto">
      <div className="lg:flex gap-5 mt-8 justify-between   m-auto">
        <div className="bg-slate-100 rounded-lg border lg:w-1/3 h-full  p-4">
          <form className="" onSubmit={handleBlogPost}>
            <label className="label">
              <span className="label-text font-bold">Blog Title:</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="Blog Title"
              className="input input-bordered w-full max-w-xs"
            />
            <br /> <br />
            <label className="label">
              <span className="label-text font-bold">Blog Details:</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              name="details"
              id="details"
              required
              rows={10}
              cols={40}
              placeholder="Blog Details"
            ></textarea>
            <br /> <br />
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">A Image Url:</span>
              </label>
              <input
                type="url"
                name="img"
                id="img"
                required
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>{" "}
            <br />
            <input
              type="submit"
              className="btn btn-active btn-primary"
              value="Create Blog"
            />
          </form>
        </div>
        <div className="lg:w-2/3">
          {blogs.map((blog) => (
            <div
              className="md:flex gap-6 rounded-lg bg-slate-100 p-6 items-center border border-slate-200"
              key={blog._id}
            >
              <div>
                <Image
                  className="max-w-sm rounded-l-md shadow-xl"
                  height={350}
                  width={350}
                  src={blog?.img}
                  alt=""
                ></Image>
              </div>
              <div>
                <h1 className="font-bold my-3  text-2xl">{blog?.title}</h1>
                <div className="flex my-3 gap-6 items-center font-medium">
                  <div className="w-12">
                    <Image
                      alt="user"
                      height={30}
                      className="rounded-full"
                      width={30}
                      src={blog?.bloggerImg}
                    ></Image>
                  </div>
                  <div className="-ml-2">
                    <h1>{blog?.blogger}</h1>
                    <h1>Published: {blog?.formattedDate}</h1>
                  </div>
                </div>
                <h1 className="text-gray-600">{blog?.details}</h1>
                <div className="flex gap-6 mt-8">
                  <span className="flex items-center gap-1">
                    {" "}
                    <FaThumbsUp></FaThumbsUp>Like
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComment onClick={handleComment}></FaComment>Comment
                  </span>
                  
                  <span className="flex items-center gap-1">
                    <FaShare></FaShare>Share
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  );
};

export default page;

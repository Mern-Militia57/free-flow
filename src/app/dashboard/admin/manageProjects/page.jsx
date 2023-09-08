"use client";
import AdminProjects from "@/Components/hooks/adminProjects";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";
import React from "react";
import { FaTrash, FaXmark } from "react-icons/fa6";
import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import Swal from "sweetalert2";

const ManageProjectsPage = () => {
  const [adminProjects, refetch] = AdminProjects();
  const [axiosMagic] = useMagicAxiosBoss();
  const handleApprove = (item) => {
    axiosMagic
      .patch(`http://localhost:5000/project/approve/${item._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          new Swal.fire("Approved!", "Project is Approved", "success");
        }
      });
  };
  const handleDeny = (item) => {
    axiosMagic
      .patch(`http://localhost:5000/project/deny/${item._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          new Swal.fire("Denied!", "Project is Denied", "error");
        }
      });
  };
  const handleDelete = (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosMagic
            .delete(`http://localhost:5000/projects/${item._id}`)
            .then((res) => {
              const data = res.data;
              console.log(data);
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire("Deleted!", "user has been deleted.", "success");
              }
            });
        }
      });
  };
  return (
    <>
      <div className="overflow-x-auto scroll-m-0 md:max-w-screen-lg h-[582px] bg-base-100 ml-5 py-5">
        <h1 className="text-center italic py-4 text-3xl font-bold">
          Manage Projects
        </h1>
        <table className="table w-full">
          <thead className="text-black text-[16px]">
            <tr>
              <th>#</th>
              <th>Applier Image</th>
              <th>Applier Name</th>
              <th>Project Title</th>
              <th>Project Category</th>
              <th>Project Sub-Category</th>
              <th>Budget Type</th>
              <th>Currency</th>
              <th>Budget</th>
              <th>Visibility</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {adminProjects.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td className="text-center">
                  <div className="avatar">
                    <div className="mask mask-squircle">
                      <Image
                        src={item.applierPhoto}
                        width={36}
                        height={36}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </td>
                <td>{item.applier || "anonymous"}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.subCategory}</td>
                <td>{item.budgetType}</td>
                <td>{item.currency}</td>
                <td>{item.budget}</td>
                <td>
                  {item?.publicVisibility === true ? "Public" : "Private"}
                </td>
                <td>{item.status}</td>
                <td>
                  <button
                    disabled={
                      item.status === "approved" || item.status === "denied"
                    }
                    onClick={() => handleApprove(item)}
                    className="btn btn-sm text-white bg-emerald-500 hover:bg-emerald-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
                  >
                    <GiCheckMark />
                  </button>
                </td>
                <td>
                  <button
                    disabled={
                      item.status === "approved" || item.status === "denied"
                    }
                    onClick={() => handleDeny(item)}
                    className="btn btn-sm text-white bg-purple-500 hover:bg-purple-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
                  >
                    <FaXmark />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-sm text-white bg-red-500 hover:bg-red-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProjectsPage;

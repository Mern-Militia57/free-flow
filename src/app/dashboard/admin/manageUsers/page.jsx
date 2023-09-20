"use client";
import TitleSection from "@/Components/TitleSection";
import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const ManageUsersPage = () => {
  const [axiosMagic] = useMagicAxiosBoss();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosMagic.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosMagic
      .patch(`http://localhost:5000/users/admin/${user._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Updated!", `${user.name} is an Admin Now`, "success");
        }
      });
  };
  const handleMakeSeller = (user) => {
    axiosMagic
      .patch(`http://localhost:5000/users/seller/${user._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Updated!", `${user.name} is a Seller Now`, "success");
        }
      });
  };
  const handleMakeBuyer = (user) => {
    axiosMagic
      .patch(`http://localhost:5000/users/buyer/${user._id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Updated!", `${user.name} is a Buyer Now`, "success");
        }
      });
  };

  const handleDelete = (user) => {
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
          .delete(`http://localhost:5000/users/${user._id}`)
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
      <div className="overflow-x-auto max-h-screen bg-base-100 px-5 ml-5 py-5">
        <h1 className="text-center py-4 text-2xl font-bold">Manage Users</h1>
        <table className="table w-full">
          {/* head */}
          <thead className="text-black text-[16px]">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Make Seller</th>
              <th>Make Buyer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle">
                      <Image
                        src={user.photo}
                        width={36}
                        height={36}
                        alt=""
                      ></Image>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm text-white bg-green-500 hover:bg-green-700"
                    >
                      Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "seller" ? (
                    "Seller"
                  ) : (
                    <button
                      onClick={() => handleMakeSeller(user)}
                      className="btn btn-sm text-white bg-green-500 hover:bg-green-700"
                    >
                      Seller
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "buyer" ? (
                    "Buyer"
                  ) : (
                    <button
                      onClick={() => handleMakeBuyer(user)}
                      className="btn btn-sm text-white bg-green-500 hover:bg-green-700"
                    >
                      Buyer
                    </button>
                  )}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-sm text-white bg-red-400"
                  >
                    <FaTrashAlt />
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

export default ManageUsersPage;

"use client";
import usePayment from "@/Components/hooks/usePayment";
import React from "react";
import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa6";

const AnalysePaymentsPage = () => {
  const [paymentOrders, refetch] = usePayment();
  const [axiosMagic] = useMagicAxiosBoss();
  console.log(paymentOrders);
  const handleDelete = (payment) => {
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
        axiosMagic.delete(`/payment/${payment._id}`).then((res) => {
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
      <div className="overflow-x-auto md:max-w-screen-lg bg-base-100 px-5 ml-5 py-5">
        <h1 className="text-center py-4 text-2xl font-bold">
          Analyse Payments
        </h1>
        <table className="table w-full">
          {/* head */}
          <thead className="text-black text-[16px]">
            <tr>
              <th>#</th>
              <th>Transection Id</th>
              <th>Payer Email</th>
              <th>Seller Name</th>
              <th>Package</th>
              <th>Gigs Category</th>
              <th>Package Price</th>
              <th>Delivery Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentOrders.map((payment, index) => (
              <tr key={payment._id} className="hover">
                <td>{index + 1}</td>
                <td>{payment.transID}</td>
                <td>{payment.buyer_email}</td>
                <td>{payment.buyerInformation.full_Name}</td>
                <td>{payment.pakageinfromation.name}</td>
                <td>{payment.gigs.OverViewData.categories_gigs}</td>
                <td className="text-center">
                  {payment.pakageinfromation.price}
                </td>
                <td>{payment.pakageinfromation.deliveryTime}</td>
                <td>
                  <button
                    onClick={() => handleDelete(payment)}
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

export default AnalysePaymentsPage;

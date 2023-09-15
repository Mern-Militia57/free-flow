import reviews from "@/data/reviews";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const FeedbackReviewsPage = () => {
  return (
    <div>
      <div className="overflow-x-auto max-h-screen bg-base-100 px-5 ml-5 py-5">
        <h1 className="text-center py-4 text-2xl font-bold">Manage Reviews</h1>
        <table className="table w-full">
          {/* head */}
          <thead className="text-black text-[16px]">
            <tr>
              <th>#</th>
              {/* <th>Reviewer Image</th> */}
              <th>Reviewer</th>
              {/* <th>Reviewer Email</th> */}
              <th>Reviewer Profile</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={review.id}>
                <td>{index + 1}</td>
                <td>{review.name}</td>
                <td>{review.profile}</td>
                <td>{review.rating}</td>
                <td className="text-center">
                  <button
                    // onClick={() => handleDelete(user)}
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
    </div>
  );
};

export default FeedbackReviewsPage;

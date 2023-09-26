"use client";
import { AuthContextPro } from "@/Components/AuthProviderFiles/AuthProviderPro";

import useMagicAxiosBoss from "@/Components/hooks/useMagicAxiosBoss";
import usePaymenthistory from "@/Components/hooks/usePaymenthistory";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";


const BuyerOrder = () => {
  const { userProfile } = useContext(AuthContextPro);
  const [paymenthistory] = usePaymenthistory();

  const [orderlist, setorder] = useState([]);

  useEffect(() => {
    if (paymenthistory) {
      const orderlist = paymenthistory?.filter(
        (p) => p.gigs.Email === userProfile?.email
      );
      setorder(orderlist);
    } else {
      return;
    }
  }, [userProfile, paymenthistory]);

  return (
    <div className="sm:w-11/12 sm:mt-10 border mx-auto">
      <div className="mb-5">
        <p className="text-3xl font-semibold">
          Hi{" "}
          <span className="uppercase text-blue-600">
            {userProfile?.displayName}
          </span>
        </p>
        <p className="font-bold text-xl mt-3 text-gray-600">
          #Order / {orderlist.length}
        </p>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table ">
            <thead>
              <tr className="text-center font-bold text-md text-black">
                <th>No:</th>
                <th>Delivery Time</th>
                <th>Buyer Information</th>
                <th>gigs</th>

                <th>Pakages </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {orderlist?.map((p, index) => (
                <TableCard number={index} key={index} data={p} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};




function TableCard({ data, number }) {
  const {
    buyerInformation,
    buyer_email,
    gigs,
    pakageinfromation,
    _id,
    accheptTime,
  } = data;

  const [axiosMagic] = useMagicAxiosBoss();
const deliveryTime = pakageinfromation?.deliveryTime;



  function isStop() {
    const currentDate = new Date();
     const targetDate = accheptTime? new Date(accheptTime):new Date(currentDate.getTime() + deliveryTime * 24 * 60 * 60 * 1000);

    const updatevalues = { id: _id, times: targetDate.toISOString() };

    axiosMagic
      .patch("/accheptTime", updatevalues)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  const calculateTimeLeft = () => {
    if (accheptTime) {
      const now = new Date().getTime();
      const difference = new Date(accheptTime) - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isStop]);




const [loaders,setLoadingTimes] = useState(false)
const[hiddenfile,sethiddine] = useState(false)
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('zips', file);

    try {
      setLoadingTimes(true)
      const response = await axios.post(`http://localhost:5000/upload/${_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      console.log(response.data);
      setLoadingTimes(false)
   
        new swal({
        icon: 'success',
        title: 'File uploaded successfully.',
      });
  
     
    } catch (error) {
      console.error('Error uploading file:', error.response?.data);
      new swal({
        icon: 'error',
        title: 'Error',
        text: 'Error uploading file: ' + (error.response?.data || 'An error occurred.'),
      });
     
    }

  };

  








  return (
    <>
      <tr className="text-center">
        <td className="font-bold text-gray-600">{number + 1}</td>

        <td className="">
          <div className="sm:flex gap-1">
            <p className="font-semibold p-3 text-red-600  shadow-xl border border-gray-500   text-center rounded-lg">
              Days
              <br></br>
              {timeLeft ? timeLeft.days : 0}
            </p>
            <p className="font-semibold p-3  shadow-xl text-red-600 border border-gray-500  text-center rounded-lg">
              Hours <br></br>
              {timeLeft ? timeLeft.hours : 0}
            </p>
            <p className="font-semibold p-3 shadow-xl text-red-600 border border-gray-500  text-center rounded-lg">
              {" "}
              Minutes <br></br>
              {timeLeft ? timeLeft.minutes : 0}
            </p>
            <p className="font-semibold p-3 shadow-xl text-red-600 border-gray-500 border text-center rounded-lg">
              {" "}
              Seconds <br></br>
              {timeLeft ? timeLeft.seconds : 0}
            </p>
          </div>

          <p className="mt-3">
            Delivery Date : {pakageinfromation?.deliveryTime}
          </p>
        </td>

        <td>{buyerInformation?.full_Name}</td>
        <td>
          {" "}
          <Image
            className="mx-auto"
            width={80}
            height={80}
            src={gigs?.gallary[0]}
            alt=""
          />
          <Link href={`/freelancer/${gigs?._id}`}>
            <p className="underline cursor-pointer font-semibold mt-3">
              Title: {gigs?.OverViewData?.gigs_title}
            </p>
          </Link>
          <p>(Click for details)</p>
        </td>
        <td>{pakageinfromation?.name}</td>

        <td>
          <button onClick={isStop} className="btn sm:w-full bg-[#FF9EAA]">
            Confirm
          </button>


<button className="btn sm:w-full bg-[#A6FF96]" onClick={()=>document.getElementById('my_modal_3').showModal()}>Submit Work</button>

<dialog id="my_modal_3" className={`modal`}>

<div className="modal-box">
  <form method="dialog">
 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
  </form>


{loaders?<span className="loading loading-bars loading-lg"></span>:<>
<h3 className="font-bold text-lg">Hello Seller,</h3>
  <p className="py-4 text-red-600">
Here, Submit your work by attaching the <span className="font-bold text-xl">Zip file</span>;<br></br> otherwise, the work will not be accepted.</p>


<form onSubmit={handleSubmit}>
<input type="file" onChange={handleFileChange} name="zips" className="file-input file-input-bordered file-input-info w-full max-w-md" />

<div className="my-5 ">
<input type="submit"  className="sm:w-6/12  btn bg-cyan-300" 
value="Submit"/>
</div>

</form>

</>}


</div>
</dialog>
  
  


          <button className="btn sm:w-full text-white bg-[#C23373]">
            Reject
          </button>
        </td>
        <td></td>
      </tr>



      


    </>
  );
}








export default BuyerOrder;




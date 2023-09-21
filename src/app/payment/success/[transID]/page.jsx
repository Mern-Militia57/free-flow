"use client"
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useEffect, useState } from 'react';
import spinnerfun from "../../../../Components/LottieAnimation/buyerpayment.json";
import Lottie from 'lottie-react';
import { useParams } from 'next/navigation';
import usePaymenthistory from '@/Components/hooks/usePaymenthistory';

import jsPDF from 'jspdf';



const Payment = () => {
  const { transID } = useParams();
  const [paymenthistory] = usePaymenthistory();

const [transFind,setFindData] = useState([])
useEffect(()=>{
  if(paymenthistory){
    const transFind = paymenthistory?.find(p=>p.transID === transID)
setFindData(transFind)
  }else{
    return
  }
},[transID,paymenthistory])

console.log(transFind);






  const createPdf = () => {
    const doc = new jsPDF();

    const packageInfo = transFind.pakageinfromation;
    const deliveryTime = packageInfo.deliveryTime;
    const transID = transFind.transID;
    const sellerEmail = transFind.gigs.Email;
    const buyerEmail = transFind.buyer_email;
  

    
    doc.text(`Delivery Time: ${deliveryTime}`, 10, 10);
    doc.text(`Transaction ID: ${transID}`, 10, 20);
    doc.text(`Seller Email: ${sellerEmail}`, 10, 30);
    doc.text(`Buyer Email: ${buyerEmail}`, 10, 40);
     doc.text(`transID: ${transID}`, 10, 50);


    doc.save('my-pdf-document.pdf');
  }
  
  

  return (
    <div>
      <Navbar />
      <div className='outlineSpace '>
        <div style={{ alignItems: "center" }} className='sm:flex justify-center border-2 '>
          <div className='sm:w-4/12 '>

            <p className='text-4xl font-bold text-green-500'>Congratulations!</p>
            <p className='text-2xl my-5 font-semibold text-gray-700'>Your Payment is Confirmed with Transaction ID</p>
            <button onClick={createPdf} className='btn btn-success'>TranxID PDF</button>
          </div>

    

        



          <div className='sm:w-7/12 '>
            <Lottie
              className="w-8/12 mx-auto"
              animationData={spinnerfun}
              loop={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;

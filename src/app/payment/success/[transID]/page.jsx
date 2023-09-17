"use client"
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { useState } from 'react';
import spinnerfun from "../../../../Components/LottieAnimation/buyerpayment.json";
import Lottie from 'lottie-react';
import { useParams } from 'next/navigation';
import usePaymenthistory from '@/Components/hooks/usePaymenthistory';

import jsPDF from 'jspdf';



const Payment = () => {
  const { transID } = useParams();
  const [paymenthistory] = usePaymenthistory();



  const createPdf = () => {
    const doc = new jsPDF();

    const imageUrl = 'https://i.ibb.co/fCyP9GX/Scan-20220424-2.jpg'; // Replace with your image URL or path
    const imageX = 10;
    const imageY = 30;
    const imageWidth = 80; // Customize the image width
    const imageHeight = 60; // Customize the image height
    doc.addImage(imageUrl, 'JPEG', imageX, imageY, imageWidth, imageHeight);
 doc.text('Hello, this is your PDF content!', 10, 10);


    doc.save('my-pdf-document.pdf');
  }
  
  

  return (
    <div>
      <Navbar />
      <div className='outlineSpace '>
        <div style={{ alignItems: "center" }} className='sm:flex justify-center'>
          <div className='sm:w-4/12 '>
            <p className='text-4xl font-bold text-green-500'>Congratulations!</p>
            <p className='text-2xl my-5 font-semibold text-gray-700'>Your Payment is Confirmed with Transaction ID</p>
          </div>

          <button onClick={createPdf} className='btn btn-success'>Generate PDF</button>

        



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

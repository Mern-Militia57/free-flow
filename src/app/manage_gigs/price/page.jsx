"use client"
import GiglineTag from '@/Components/GiglineTag';
import { useRouter } from 'next/navigation';
import React, { Suspense, useState } from 'react';
import Loading from '../overviews/loading';

const Price = () => {
  const navigationbar = useRouter()
    const basic_delivery_days = ["1 days delivery", "3 days delivery", "5 days delivery", "4 days delivery", "8 days delivery", "10 days delivery", "12 days delivery",]
   
    const standard_delivery_days = ["1 days delivery", "2 days delivery", "3 days delivery", "4 days delivery", "5 days delivery", "6 days delivery"]
    const premium_delivery_days = ["1 days delivery", "2 days delivery", "3 days delivery", "4 days delivery", "5 days delivery",]
    const basic_Rivision = ["Select",1, 2, 3, 4, 5, 6,"Unlimited"]









const [waring,setwaring] = useState(null)


function PriceView (e) {
e.preventDefault()
// Capture values for Basic package
const basic_pakages_name = e.target.basic_pakages_name.value;
const basic_pakages_details = e.target.basic_pakages_details.value;
const basic_pakages_delivery_Time = e.target.basic_pakages_delivery_Time.value;
const basic_pakages_rivision = e.target.basic_pakages_rivision.value;
const basic_pakages_price = e.target.basic_pakages_price.value;

// Create object for Basic package
const basicPackage = {
  name: basic_pakages_name,
  details: basic_pakages_details,
  deliveryTime: basic_pakages_delivery_Time,
  revision: basic_pakages_rivision,
  price: basic_pakages_price
};

// Similarly, capture values for Standard and Premium packages
const standard_pakages_name = e.target.standard_pakages_name.value;
const standard_pakages_details = e.target.standard_pakages_details.value;
const standard_pakages_delivery_Time = e.target.standard_pakages_delivery_Time.value;
const standard_pakages_rivision = e.target.standard_pakages_rivision.value;
const standard_pakages_price = e.target.standard_pakages_price.value;

const premium_pakages_name = e.target.premium_pakages_name.value;
const premium_pakages_details = e.target.premium_pakages_details.value;
const premium_pakages_delivery_Time = e.target.premium_pakages_delivery_Time.value;
const premium_pakages_rivision = e.target.premium_pakages_rivision.value;
const premium_pakages_price = e.target.premium_pakages_price.value;

// Create objects for Standard and Premium packages
const standardPackage = {
  name: standard_pakages_name,
  details: standard_pakages_details,
  deliveryTime: standard_pakages_delivery_Time,
  revision: standard_pakages_rivision,
  price: standard_pakages_price
};

const premiumPackage = {
  name: premium_pakages_name,
  details: premium_pakages_details,
  deliveryTime: premium_pakages_delivery_Time,
  revision: premium_pakages_rivision,
  price: premium_pakages_price
};

const price = {basicPackage,standardPackage,premiumPackage}
const getUserDetailsData = JSON.parse(localStorage.getItem("gigs-profile"));

if( basic_pakages_price < standard_pakages_price && standard_pakages_price < premium_pakages_price   ){
console.log("OK");
setwaring(null)

  if(getUserDetailsData){
    getUserDetailsData.price = price
    localStorage.setItem("gigs-profile",JSON.stringify(getUserDetailsData))
    console.log(getUserDetailsData);
    navigationbar.push("/manage_gigs/description")
  
  }
 
}else{

  setwaring("Please ensure that the prices are aligned with your chosen packages")

}
















}





    return (
      <Suspense fallback={Loading}>
        <>
     <GiglineTag gives0={true} gives1={true}/>
        <div>
        <form onSubmit={PriceView} className="px-10 sm:px-0 my-16 sm:w-10/12 mx-auto">
  <div style={{ alignItems: "center" }} className="sm:flex justify-center mt-5 border">
    <div className="sm:w-2/12 p-5">
      <p className="text-xl font-bold text-gray-700 flex">Packages</p>
    </div>

    <div className="sm:w-9/12">
      <div className='sm:flex '>
        {/* ---------- basic part ---- */}
        <div className='basic w-full  border'>
          <p className='p-5 borderlessdone text-center bg-gray-100'>Basic</p>
          <input
            name="basic_pakages_name"
            placeholder='First level'
            type='text'
            className="borderlessdone text-gray-600 text-sm h-[4rem] p-2 w-full"
          />
          <textarea
            name="basic_pakages_details"
            placeholder='describe the details of your offering'
            style={{ resize: "none" }}
            className="text-sm p-2 text-gray-500 borderlessdone w-full h-[6rem]"
          
          ></textarea>
          <select name="basic_pakages_delivery_Time" className='w-full -mt-2 text-md borderlessdone text-center text-gray-500 p-3'>
            {basic_delivery_days.map((p, index) => <option className='font-serif w-full' value={p} key={index}>{p}</option>)}
          </select>
        </div>

        {/* ----------Standard--------- */}
        <div className='standard w-full border'>
          <p className='p-5 borderlessdone text-center bg-gray-100'>Standard</p>
          <input
            name="standard_pakages_name"
            placeholder='Second level'
            type='text'
            className="borderlessdone text-gray-600 text-sm h-[4rem] p-2 w-full"
          />
          <textarea
            name="standard_pakages_details"
            placeholder='describe the details of your offering'
            style={{ resize: "none" }}
            className="text-sm p-2 text-gray-500 borderlessdone w-full h-[6rem]"
       
          ></textarea>
          <select name="standard_pakages_delivery_Time" className='w-full -mt-2 text-md borderlessdone text-center text-gray-500 p-3'>
            {standard_delivery_days.map((p, index) => <option className='font-serif w-full' value={p} key={index}>{p}</option>)}
          </select>
        </div>

        {/* -------------------Premium--------------- */}
        <div className='premium w-full border'>
          <p className='p-5 borderlessdone text-center bg-gray-100'>Premium</p>
          <input
            name="premium_pakages_name"
            placeholder='Third Level'
            type='text'
            className="borderlessdone text-gray-600 text-sm h-[4rem] p-2 w-full"
          />
          <textarea
            name="premium_pakages_details"
            placeholder='describe the details of your offering'
            style={{ resize: "none" }}
            className="text-sm p-2 text-gray-500 borderlessdone w-full h-[6rem]"
          >
    
          </textarea>
          <select name="premium_pakages_delivery_Time" className='w-full -mt-2 text-md borderlessdone text-center text-gray-500 p-3'>
            {premium_delivery_days.map((p, index) => <option className='font-serif w-full' value={p} key={index}>{p}</option>)}
          </select>
        </div>
      </div>
    
    </div>

  </div>

  {/* --------------------------------------- */}

  <div style={{ alignItems: "center" }} className="sm:flex justify-center mt-3 ">
    <div className="sm:w-2/12 p-5">
      <p className="text-xl font-bold text-gray-700 flex">Revisions</p>
    </div>

    <div className="sm:w-9/12 ">
      <div className='sm:flex '>
        {/* ---------basic---- */}
        <div className='sm:w-full'>
          <select name="basic_pakages_rivision" className='w-full -mt-2 text-md borderlessdone text-center text-gray-500 p-3'>
            {basic_Rivision.map((p, index) => <option className='font-serif w-full' value={p} key={index}>{p}</option>)}
          </select>
        </div>

        {/* ------standard--- */}
        <div className='sm:w-full'>
          <select name="standard_pakages_rivision" className='w-full -mt-2 text-md borderlessdone text-center text-gray-500 p-3'>
            {basic_Rivision.map((p, index) => <option className='font-serif w-full' value={p} key={index}>{p}</option>)}
          </select>
        </div>

        {/* -------premium----- */}
        <div className='sm:w-full'>
          <select name="premium_pakages_rivision" className='w-full -mt-2 text-md borderlessdone text-center text-gray-500 p-3'>
            {basic_Rivision.map((p, index) => <option className='font-serif w-full' value={p} key={index}>{p}</option>)}
          </select>
        </div>
      </div>
    </div>
  </div>
  {/* ---------------------- */}

  <div style={{ alignItems: "center" }} className="sm:flex justify-center mt-3 ">
    <div className="sm:w-2/12 p-5">
      <p className="text-xl font-bold text-gray-700 flex">Price</p>
    </div>

    <div className="sm:w-9/12 ">
      <div className='sm:flex '>
        {/* ---------basic---- */}
        <div className='sm:w-full flex relative'>
          <span className='absolute text-md text-gray-600 top-[0.57rem] left-2'>$</span>
          <input defaultValue={5} name="basic_pakages_price" type='number' min={5} className="ps-5 borderlessdone text-gray-600 text-sm p-3 w-full" />
        </div>

        {/* -------standard----- */}
        <div className='sm:w-full flex relative'>
          <span className='absolute text-md text-gray-600 top-[0.57rem] left-2'>$</span>
          <input defaultValue={20} name="standard_pakages_price" type='number' min={15} className="ps-5 borderlessdone text-gray-600 text-sm p-3 w-full" />
        </div>

        {/* -------premium----- */}
        <div className='sm:w-full flex relative'>
          <span className='absolute text-md text-gray-600 top-[0.57rem] left-2'>$</span>
          <input defaultValue={40} name="premium_pakages_price" type='number' min={35} className="ps-5 borderlessdone text-gray-600 text-sm p-3 w-full" />
        </div>
      </div>
      <p className='text-red-600 font-bold'>{waring}</p>
    </div>
  </div>

  <div className="sm:flex justify-end my-10">
    <input type="submit" value={"Continue"} className="btn btn-success text-white w-3/12" />
  </div>
</form>




        </div>
        </>
        </Suspense>
    );
};

export default Price;
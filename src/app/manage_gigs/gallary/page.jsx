"use client"
import GiglineTag from '@/Components/GiglineTag';
import Image from 'next/image';
import React, { Suspense, useContext, useEffect, useState } from 'react'
import { FiAlertCircle } from 'react-icons/fi';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../Components/LottieAnimation/spinnerjsonFiles.json";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import useMagicAxiosBoss from '@/Components/hooks/useMagicAxiosBoss';
import { AuthContextPro } from '@/Components/AuthProviderFiles/AuthProviderPro';
import Loading from '../description/loading';
import useAllUserProfile from '@/Components/hooks/useAllUserProfile';

const Page = () => {
  const { userProfile } = useContext(AuthContextPro);
  const [axiosMagic] = useMagicAxiosBoss()
  const navigationbar = useRouter()
  const [isloader,setLoading] = useState(true)
  const [warings,setWarnign] = useState([])
  const [selectedFile, setSelectedFile] = useState([]);
  const [imageSrc, setImage] = useState([]);
  const [imagepower,setImagePower] = useState([])
  const [userDetails] = useAllUserProfile()
  const handleFileChange = (e) => {
        const submitfiles = e.target.files[0]
        setSelectedFile(submitfiles);
  
  };
  


// ===============================================
function FormSubmit (e) {
e.preventDefault()
if(imagepower.length < 3){
    const imageURL =  URL.createObjectURL(selectedFile)
   setImagePower([...imagepower,imageURL])

   const imageUrl = `https://api.imgbb.com/1/upload?key=705dacdae95930408512d341ffd8c826`;
      
   const formData = new FormData();
   formData.append("image", selectedFile);

    fetch(imageUrl, {
     method: "POST",
     body: formData,
  
   })
     .then((res) => res.json())
     .then((getdata) => {
       const profile_image = getdata.data.display_url;
        setImage([...imageSrc,profile_image]);
        


   })


 }else{
     setWarnign("do not apply more than 3 ")
  }
    e.target.reset()   
}









// ====================================================================================








const defaultImages = " https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"


const animations = <>
<Lottie className='bg-gray-700 rounded-full w-8/12 mx-auto' animationData={groovyWalkAnimation} loop={true} />
</>


let x = imagepower.length-1
function deletedImage () {
const xyx = String(imagepower[x])
  console.log(xyx);
  const filter = imagepower.filter(p=> p !== xyx)
setImagePower(filter);
}




const getValuesofImages =  userDetails?.find(p=>p.email === userProfile?.email)
const getprofileImages = getValuesofImages

const imageURLValues = getprofileImages?.personal_Information?.profile_image 
const profileName = getprofileImages?.personal_Information?.full_Name
console.log(profileName);

console.log(imageSrc);




  function GallaryPublish (){
    
  const localStorageVlaue= JSON.parse(localStorage.getItem("gigs-profile"))
  if(imageSrc.length >=1 && imageSrc.length <=3 ){
  
    localStorageVlaue.gallary = imageSrc
    localStorageVlaue.Email = userProfile?.email 
    localStorageVlaue.profileImages = imageURLValues;
    localStorageVlaue.profileName = profileName;
  
    localStorage.setItem("gigs-profile", JSON.stringify(localStorageVlaue));
    Swal.fire({
      title: 'Confirm Submit',
      text: 'Are you sure you want to proceed?',
      icon: 'success',
     
      confirmButtonText: 'Yes, proceed', 
  
      confirmButtonColor: '#3085d6', 
  
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosMagic
        .post(`/gigs_post`, localStorageVlaue)
        .then((res) => {
          console.log(res.data);
          localStorage.removeItem("gigs-profile");
       
          new Swal({
            text: `${userProfile.displayName} Successfully Submit`,
            icon: "success",
            
          }).then((result) => {
            if (result.isConfirmed) {
           
             
            }
  
          });
          navigationbar.push('/')
        })
  
   }
    });
  
  }else{
    new swal({
      icon: 'warning', // Use the 'warning' icon for a warning dialog
      title: 'Warning!',
      text: 'Minimum upload one picture ',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF8C00' // Customize the OK button color
    });
  }
  
  
}






 

  return (
    <Suspense fallback={Loading}>
    <>
 <GiglineTag gives0={true} gives1={true} gives2={true} gives3={true}/>
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
  {isloader ? "" : animations}

</div>



<div className='border-l-8 border-sky-600  sm:ms-5 mt-5'>
<p className='text-xl font-bold px-2 my-2 text-gray-600'>Showcase Your Services In A Gig Gallery</p>
<p className='text-md font-bold px-2 my-2 text-gray-500'>Encourage buyers to choose your Gig by featuring a variety of your work.
</p>
</div>
<div style={{alignItems:"center"}} className='bg-gray-100 my-4 flex sm:ms-4 border p-4 sm:w-8/12'>
  <span className='mx-2'><FiAlertCircle className='text-red-600 text-xl'/></span>
  <span className='mx-2'>To comply with Free-Flow terms of service, make sure to upload only content you either own <br></br>or you have the permission or license to use.</span>
</div>



    <div className=' border mx-auto  bg-gray-50 p-5'>
<p className='mb-5 font-bold text-xl text-gray-600'>Images (up to 3)</p>
<div className='sm:flex'>

<div className=' sm:w-full mx-5 sm:h-[14rem] border'>

    <Image className='p-1  rounded-lg border-gray-500 shadow-lg w-full h-full' alt=''
     src={imagepower[0]?imagepower[0]:defaultImages} width={200} height={50}/>
   

  </div>




  <div className=' sm:w-full mx-5 sm:h-[14rem] '>

    <Image className='p-1  rounded-lg border-gray-500 shadow-lg w-full h-full' alt='' src={imagepower[1]?imagepower[1]:defaultImages} width={400} height={50}/>



  </div>

  <div className=' sm:w-full mx-5 sm:h-[14rem] '>

    <Image className='p-1  rounded-lg border-gray-500 shadow-lg w-full h-full' alt='' src={imagepower[2]?imagepower[2]:defaultImages} width={400} height={50}/>
 </div>



</div>
<p className='mt-5 ps-5 font-semibold text-red-800'> {warings}</p>

<div className='sm:flex justify-end'>
<p onClick={deletedImage} className='p-4 cursor-pointer badge bg-red-500 text-white sm:mt-5 mx-2'>
  <BsFillArrowLeftCircleFill className='me-2 ' />
  Delete Back</p>
</div>



<form onSubmit={FormSubmit} className="sm:mt-28 ">




<div style={{alignItems:"center"}} className='sm:flex justify-center'>

<input 
        accept="image/*" required className='file-input border-2 border-black ' onChange={handleFileChange} type="file" />

<input className="btn btn-success sm:w-1/12 mx-2 text-white" type="submit" value={"upload"} />

</div>
<div className='sm:flex justify-center mt-5'>
<p className='text-gray-500'>(Optimize the image to <span className='font-semibold text-green-500'>400x220</span> pixels for improved performance)</p>
</div>
</form>


<div className="sm:flex justify-end mt-10  mb-10">
          <button 
            onClick={GallaryPublish}
          
          className="btn btn-success text-white mx-10 w-2/12"
          >Publish</button>
        </div>


    </div>
    </>
    </Suspense>
  );
};

export default Page;
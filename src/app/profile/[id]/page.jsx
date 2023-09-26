"use client"

import { Montserrat, Montserrat_Alternates, Roboto, Roboto_Serif } from 'next/font/google';
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
})


import { AuthContextPro } from '@/Components/AuthProviderFiles/AuthProviderPro';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import useAllUserProfile from '@/Components/hooks/useAllUserProfile';
import useMagicAxiosBoss from '@/Components/hooks/useMagicAxiosBoss';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import spinnerfun from "../../../Components/LottieAnimation/spinnerjsonFiles.json";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import useAllGigsPost from '@/Components/hooks/useAllGigsPost';
import { GrLanguage } from 'react-icons/gr';
import { FaLanguage } from 'react-icons/fa6';

import Barcode from 'react-barcode';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ImDownload3 } from 'react-icons/im';
import { BsDownload } from 'react-icons/bs';
import { RiFileDownloadFill } from 'react-icons/ri';



const ProfileSection = () => {
  const [topPosition, setTopPosition] = useState(10);
   const [axiosMagic] =  useMagicAxiosBoss()
   const {userProfile} = useContext(AuthContextPro)
      const [userDetails] = useAllUserProfile()
const [usergigs] = useAllGigsPost()



const {id} = useParams()

const [data,setData] = useState(null)




useEffect(()=>{
    if(id){

        axiosMagic(`/user_details_query?Email=${id}`)
        .then(res=>setData(res.data))
    }

},[id,axiosMagic])





if(data === null){
  return   <>
  <Lottie
    className="w-5/12 mx-auto"
    animationData={spinnerfun}
    loop={true}
  />
  </>
}


const findGigsUser = usergigs?.find(({Email})=> Email === data.Email )

 const {
    _id,
    personal_Information: {
      address,
      country,
      post_Code,
      profile_image,
      phone_Number,
      full_Name,
      last_Name,
      display_Name,
      description,
      Language,
      member_since
    },
    professional: {
      occupation: {
        occupation_Major,
        occupation_periods: { From, End },
        occupation_Categories
      },
      Skills: { storeSkillValues },
      Education: { University_Name, Subject_Name, Year },
      Certificate: { Certification_Reward, Certificate_Link },
      spend_Time
    },
    Email
  }  = data









  const downloadImage = async () => {
    const imageSrc = 'https://i.ibb.co/VvMd7bN/1.png';
    try {
      const image = await fetch(imageSrc);
      const imageBlob = await image.blob();
  
      const imageURL = URL.createObjectURL(imageBlob);
  
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'downloaded-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  }










  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop <= 100) {
      setTopPosition(10); // Within the range
    } else {
      setTopPosition(scrollTop - 90); // Outside the range
    }
  };


  window.addEventListener("scroll", handleScroll);








 return (<>
 <Navbar />
        <div className='border outlineSpace'>

<div className={`sm:flex   mb-20 w-full ${roboto.className} p-2`}>



<div className='sm:w-3/12 ps-3 mt-3  '>
  <div className={`${(topPosition >= 706)?"static":"lg:fixed"} rounded-[4rem] bg-white  p-5  border border-blue-900 profile-card-shadow`}>


<div className='mx-auto  container'>
 <Image 
     className='mx-auto rounded-full w-[12rem] h-[12rem] border-2 border-purple-500 p-1 '
    quality={100}
     blurDataURL= {`${findGigsUser?.profileImages}`}
     placeholder = "blur" 
     alt=''
    src={findGigsUser?.profileImages} width={300} height={200}  />
</div>

<div>
<p className='font-bold text-xl text-gray-700 text-center mt-5'>--- {display_Name} ---</p>
<p className='text-gray-800 text-center mt-1'>( Member Since:<span className='text-[#01C5C4] font-semibold'> {member_since}</span> )</p>

<div className={`sm:flex  font-semibold mx-auto p-2 mt-2`}>
 <p style={{alignItems:"center"}} className='bg-[#FFBCBC] p-2  mx-auto flex justify-center rounded-lg'> <GrLanguage className='mx-1'/>
{country}</p>
<p style={{alignItems:"center"}} className='bg-[#C9CBFF] p-2 rounded-lg mx-auto flex justify-center'> 
 <FaLanguage className='mx-1' />
{Language}</p>
 </div>




<div style={{alignItems:"center"}} className=' sm:flex flex-col mt-6'>
<p>( Verify Id )</p>
<Barcode fontSize={15}  width={0.9} height={50}  
 value={_id} />

</div>
</div>
</div>
</div>





<div className='sm:w-9/12  sm:p-2 '>




<div style={{alignItems:"center"}} className='mt-5 flex px-5 '>
 <p className=' rounded-xl text-center  bg-[#337CCF] p-2 sm:w-4/12 text-2xl font-bold text-white '>Personal Information</p>
<hr className='border-2 mx-5 sm:w-9/12 border-[#337CCF]'></hr>
</div>

<div className='sm:grid grid-cols-2 mt-10 sm:px-5'>
  <p className='font-semibold text-gray-800  p-1'>Actual Name : {full_Name} </p>
  <p className='font-semibold text-gray-800  p-1'>Address: {address}</p>
  <p className='font-semibold text-gray-800  p-1'>Post Code : {post_Code}</p>
  <p className='font-semibold text-gray-800  p-1'>Phone Number : {phone_Number}</p>
  <p className='font-semibold text-gray-800  p-1'>Email: 
  <span className='mx-2 text-blue-500 font-bold'>{Email}</span></p>
  <p className='font-semibold text-gray-800  p-1'>Spend Time :
  
  <span className='badge bg-lime-500 px-3 mx-2 text-white'>{spend_Time} Hours </span>  </p>
</div>


<div className='mt-5 sm:mx-5 border border-gray-400 rounded-lg p-3'>
  <p className='font-extrabold text-xl px-2'>Details: 
 <span className='font-normal text-black  text-base mx-1'>{description}</span>
   </p>
</div>

<div style={{alignItems:"center"}} className='mt-16 flex px-5 '>
 <p className=' rounded-xl text-center text-white  bg-[#337CCF] p-2 sm:w-4/12 text-2xl font-bold  '>Professional Information</p>
<hr className='border-2 mx-5 sm:w-9/12 border-[#337CCF]'></hr>
</div>


<p className='font-extrabold text-[#337CCF] text-xl mt-10 px-5 underline underline-offset-8'>Occupation:</p>
<div className='occupation sm:grid grid-cols-2 px-5 py-5'>

<p className='font-bold'>Major : <span className=''> {occupation_Major}</span> </p>
<p className='font-bold'>Occupation Period : <span> {From} to {End}  </span></p>

<div style={{alignItems:"center"}}  className='sm:flex mt-5  gap-2'>
  <p className='font-bold '>Categories : </p>
  {occupation_Categories?.map(({name})=><>
<p className='border bg-lime-400 font-bold p-1 rounded-lg'>
  
    {name}</p></>)}
</div>
</div>



<p className='font-extrabold text-[#337CCF] text-xl mt-10 px-5 underline underline-offset-8'>Skills:</p>
<div className='sm:flex justify-evenly'>
{
  storeSkillValues?.map(({Skills,Level})=>
  <>


<div className=''>
<p className='font-bold text-black text-center my-2'>{Skills}</p>
<div className='w-36'>
<CircularProgressbar
        value={60}
        text={`${ (Level === "Beginner")?`${40}%`:(Level === "Expert")?`${90}%`:(Level === "Intermediate")?`${60}%`:""  }`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#337CCF",
          textColor: "white",
          textSize:"1.5rem",
          
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
      <p className='text-center font-extrabold mt-3 text-[#337CCF]'>{Level}</p>
</div>
</div>

  </>)
}
</div>


<p className='font-extrabold text-[#337CCF] text-xl mt-16 px-5 underline underline-offset-8'>Education:</p>
<div className='font-bold text-gray-600 sm:grid grid-cols-3 px-5 py-5'>
<p >University : {University_Name}</p>
<p >Subject name: {Subject_Name}</p>
<p >Year : {Year}</p>
</div>


<p className='font-extrabold text-xl text-[#337CCF] mt-5 px-5 underline underline-offset-8'>Certificate:</p>
{/* Certification_Reward, Certificate_Link */}
<div style={{alignItems:"center"}} className='px-5 py-6 sm:flex justify-between'>
  <p className='font-extrabold text-gray-600 text-xl'>Reward: {Certification_Reward}</p>


<div className='text-center sm:px-16'>
  <p className='font-semibold text-gray-600 mb-2'>Download the Certificate</p>
<a className='btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg border-none' onClick={downloadImage}>
  <RiFileDownloadFill className='text-xl' />
  Download</a>
</div>



</div>




<div>
</div>



</div>







</div>
</div>
<Footer />
        </>
    );
};

export default ProfileSection;
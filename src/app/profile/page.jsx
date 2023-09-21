"use client"
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import useMagicAxiosBoss from '@/Components/hooks/useMagicAxiosBoss';

import React, { useState } from 'react';






const Profile = () => {
const [axiosMagic]  = useMagicAxiosBoss()





const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('zips', file); 
  


    axiosMagic.post('/upload', formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.error('Error uploading file:', error.message));
  };






   









function fileSubmit(e){
e.preventDefault()
const values = e.target.zips.values 
console.log(values);
}




    return (
        <>
        <Navbar />
        <div className='outlineSpace'>


<div className='p-5'>
    
<form onSubmit={fileSubmit}>
        <input name='zips'  onChange={handleFileChange} type='file' accept='.zip' />
        <input type='submit' value="Submit" className='btn btn-secondary'/>
       </form>
</div>


















        </div>




        <Footer />
         
        </>
    );
};

export default Profile;
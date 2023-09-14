"use client"
import  { Suspense, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  { ssr: false }
);



import { EditorState,  convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; // Styling for the editor
// import { Editor as WysiwygEditor } from 'react-draft-wysiwyg';
import GiglineTag from '@/Components/GiglineTag';
import Image from 'next/image';

import swal from 'sweetalert';
import { useRouter } from 'next/navigation';
import Loading from '../price/loading';

const Dashboard = () => {
  
const navigationbar = useRouter()
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  }; 

  const getEditorContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    return JSON.stringify(rawContentState);
  };


 const jsonData = getEditorContent();

  const parsedData = JSON.parse(jsonData);

  const text = parsedData.blocks[0]?.text || ''; 
  const textLength = text.length;
 let warn = textLength >= 1200



const [receveFaq, setFaq] = useState([])
const [extraWarn, setDetails] = useState("")

function FaqQuestion(e){
  e.preventDefault()
  const Question = e.target.question.value 
  const Details =  e.target.details.value
  const data = {Question,Details}
   setDetails(Details)

 if(receveFaq.length <5 && Details.length < 300 ){
  setFaq([...receveFaq,data])
  e.target.reset()
}
}

function DeleteQuestion (props){
const getValues = receveFaq.filter(p=>p.Question !== props)
console.log(getValues);
setFaq(getValues)
}









function DescriptionAndFaq (){

if(receveFaq.length >= 1 && textLength >= 1){
  const details = getEditorContent()
  const faq = receveFaq
  const Details_And_Faq = {details,faq}
    
  
   

   const localStorageVlaue= JSON.parse(localStorage.getItem("gigs-profile"))
  if(localStorageVlaue){
  localStorageVlaue.Details_And_Faq = Details_And_Faq



  localStorage.setItem("gigs-profile", JSON.stringify(localStorageVlaue));

  navigationbar.push("/manage_gigs/gallary")
  }
  
}else{
   new swal({
    icon: 'warning',
    title: 'Warning',
    text: 'You did not fill up all fields',
    confirmButtonText: 'OK',
  });
}
}






  return (
    <Suspense fallback={Loading}>
    <>
    <div>
    <GiglineTag gives0={true} gives1={true} gives2={true}/>

    <div className='p-10 sm:px-20 '>

    <p className='text-4xl text-gray-6s00 border-l-8 border-red-500 p-2 my-4'>Description</p>
   <hr className='border sm:w-8/12 border-gray-500  my-3'></hr>
   <p className='font-bold my-2 text-gray-500'>Briefly Describe Your Gig</p>
   <div  className= 'relative sm:w-9/12 border-2 border-gray-600  min-h-[15rem] '>

   
   <Editor

        placeholder='Offer comprehensive details in the description'
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'embedded'],
          inline: {
            options: ['bold', 'italic', 'underline',],
          },

        }}
      />
      <div className='sm:flex justify-end px-2'>
        <p className={`${warn && "text-red-600"}`}>{textLength}/1200 Characters</p>
         </div>
   </div>

   <hr className='border sm:w-8/12 border-gray-500  my-3'></hr>
<span className='font-semibold text-gray-500 text-4xl'>Milestone workflow </span>
<span className='badge bg-pink-500 text-white'>New</span>
<p className='text-gray-500'>NEW Attract buyers by turning your Gig into a series of milestones—they’ll know exactly what to expect and<br></br> you’ll get paid when each milestone is completed.</p>
<Image
        src="https://img.freepik.com/free-vector/analyst-working-laptop-with-automation-process-business-process-automation-business-process-workflow-automated-business-system-concept-illustration_335657-2086.jpg?w=2000"
        alt=""
        width={700}
        height={300} 
      />

<hr className='border sm:w-8/12 border-gray-300  my-3'></hr>
<p className='my-10 font-semibold text-4xl text-gray-600'>Frequently Asked Questions</p>
<hr className='border sm:w-8/12 border-gray-300  my-5'></hr>
<p className='text-xl font-bold text-gray-500 mb-5'>Add Questions & Answers for Your Buyers</p>

<form onSubmit={FaqQuestion} className=' sm:w-10/12 '>
<input required name='question' placeholder="Add a Question: i.e. Do you translate to English as well?" type='text' className='p-2 border border-gray-600  sm:w-10/12 '></input>
<textarea required
            name="details"
            placeholder="Add an Answer: i.e. Yes, I also translate from English to Hebrew"
            style={{ resize: "none" }}
            className=" p-2 my-4 text-gray-500 border border-gray-600   sm:w-10/12  h-[6rem]"
          ></textarea>

<p className='text-red-500 font-semibold'>{receveFaq.length <5?"":"Do not give more than 5 " }</p>
<p className='text-red-500 font-semibold'>{extraWarn.length< 300?"":"Do not write more than 300 words" }</p>
<div className='flex justify-start'>

<input type='submit' value={"Add"} className='mt-5 sm:w-1/6 btn bg-sky-400 text-white'></input>
</div>

</form>
<div className='sm:w-8/12 my-6 p-2'>
{
receveFaq.map((p,index)=><>
<div className="collapse bg-base-200 my-2">

  <input type="radio" name="my-accordion-1" /> 
  <div  className="collapse-title text-xl font-medium flex justify-between">
   Question:  {p.Question}
  
  </div>
  <div className="collapse-content"> 
    <p>Answer: {p.Details}</p>
    <button onClick={()=>DeleteQuestion(p.Question)}  className='btn bg-red-500 text-white'>Delete</button>
  </div>
</div>

</>)

}

</div>
</div>





<div className="sm:flex justify-end  mb-10">
          <button 
          onClick={DescriptionAndFaq}
 className="btn btn-success text-white mx-10 w-2/12"
          >Continue</button>
        </div>

</div>
    </>
    </Suspense>
  );
};

export default Dashboard;

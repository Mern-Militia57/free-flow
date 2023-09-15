import React from 'react';

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-4 p-4'>
        
           <div className='flex p-4 rounded-lg bg-gray-100 justify-between w-full'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>7,655$</p>
                <p className='text-gray-600'>Daily Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-800 text-lg'>+18%</span>
            </p>
           </div>
           <div className='flex p-4 rounded-lg bg-gray-100 justify-between w-full'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>147,655$</p>
                <p className='text-gray-600'>Yearly Revenue</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-800 text-lg'>+14%</span>
            </p>
           </div>
           <div className='flex p-4 rounded-lg bg-gray-100 justify-between w-full'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>11101</p>
                <p className='text-gray-600'>Customer</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-800 text-lg'>+20%</span>
            </p>
           </div>
        </div>
    );
};

export default TopCards;
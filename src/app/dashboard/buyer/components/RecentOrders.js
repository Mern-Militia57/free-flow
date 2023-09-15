import React from 'react';
import data from '../data/data';
import { FaShoppingBag } from 'react-icons/fa'
const RecentOrders = () => {
    return (
        <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
            My Recent Orders

            <ul>
                {data.map((order,id)=>(
                    <li key={id} className='bg-gray-100 flex hover:bg-gray-200 items-center justify-between gap-3 rounded-lg my-3 p-2'>
                        <div className='bg-purple-100 rounded-lg p-3'>
                            <FaShoppingBag className='text-purple-600'></FaShoppingBag>
                        </div>
                        <div className=''>
                            <p className='font-bold'>${order.total}</p>
                            <p className='text-sm'>{order.name.first}</p>
                        </div>
                        <p className=''>{order.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentOrders;
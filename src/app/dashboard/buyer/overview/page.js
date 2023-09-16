import React from 'react';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';

const page = () => {
    return (
        <div>
            <Header></Header>
            <TopCards></TopCards>
            <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
            <BarChart></BarChart>
            <RecentOrders></RecentOrders>
            </div>
        </div>
    );
};

export default page;
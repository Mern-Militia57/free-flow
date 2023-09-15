"use client"
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = () => {
    const [chartData,setChartData]=useState({datasets:[],
    })
    const [chartOptions,setChartOptions]=useState({})
    useEffect(()=>{
      setChartData({
        labels:['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'],
        datasets:[
            {
                label:"Buy",
                data:[5174,9979,8985,7475,8477,5455,8474],
                borderColor:'rgb(53,162,235)',
                backgroundColor:'rgb(53,162,235,0.4)',
            }
        ]
      })
      setChartOptions({
        plugins:{
            legend:{
                position:'top',
            },
            title:{
                display:true,
                text: "Daily Revenue"
            }
        },
        maintainAspectRatio:false,
        responsive:true
      })
    },[])
    return (
        <div className='w-full md:col-span-2 relative lg:h[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-gray-100'>
            <Bar data={chartData} options={chartOptions}></Bar>
            
        </div>
    );
};

export default BarChart;
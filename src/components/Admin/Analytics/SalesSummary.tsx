import React from 'react';
import MenuDropDown from "@src/components/UI/Search/MenuDropDown";
import { PolarArea } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
import { Chart, CategoryScale, RadialLinearScale, ArcElement } from "chart.js";
import { ApexOptions } from 'apexcharts';
import { ApexCharts } from '@src/utils/Charts/ApexCharts';

Chart.register(CategoryScale, RadialLinearScale, ArcElement);


const SalesSummary = () => {

    const series = [44, 85, 67];

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'radialBar'
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px'
                    },
                    value: {
                        fontSize: '16px'
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (opts: any) {
                            return '249';
                        }
                    }
                }
            }
        },
        labels: ['Apple', 'Orange', 'Banana']
    }

    const data = {
        datasets: [{
            data: [11, 16, 14],
            backgroundColor: ["#DA0463", "gold", "cyan"],
            label: "Sales Summary"
        }],
        labels: ["Menu sold", "Revenue", "Safe"],
    }

    return (
        <div className="w-full bg-white shadow-lg p-8 rounded-md">
            <div className="flex sm:flex-col justify-between pb-24 gap-y-6">
                <div className="">
                    <h1 className="text-dark-gray text-2xl font-semibold border-l-8 pl-2 border-dark-peach">Sales Summary</h1>
                    <p className="text-medium-gray text-md">Lorem ipsum dolor sit amet, elit. Obcaecati, unde.</p>
                </div>
                <MenuDropDown />
            </div>
            <div className="w-full flex sm:flex-col-reverse gap-x-48 gap-y-8 justify-between">
                <div className='space-y-8'>
                    <div className='flex items-center gap-x-4'>
                        <div className='p-3 bg-dark-peach rounded-full'></div>
                        <div className=''>
                            <h1 className='text-xl text-dark-gray font-bold'>$78,900</h1>
                            <p className='text-md text-medium-gray mt-2'>Menu sold</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <div className='p-3 bg-[gold] rounded-full'></div>
                        <div className=''> 
                            <h1 className='text-xl text-dark-gray font-bold'>$878,900</h1>
                            <p className='text-md text-medium-gray mt-2'>Revenue</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4'>
                        <div className='p-3 bg-[cyan] rounded-full'></div>
                        <div className=''>
                            <h1 className='text-xl text-dark-gray font-bold'>$98,900</h1>
                            <p className='text-md text-medium-gray mt-2'>Safe (20%)</p>
                        </div>
                    </div>

                </div>
                <div className='w-full h-80'>
                    <ApexCharts options={options} series={series} type='radialBar' width={350} />
                    {/* <PolarArea data={data} options={{maintainAspectRatio: false}} /> */}
                </div>
            </div>
        </div>
    )
}

export default SalesSummary;
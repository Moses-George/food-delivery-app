import { RadialLinearScale, Chart, ArcElement } from "chart.js";
import {  Pie, PolarArea } from "react-chartjs-2"; 
import { ApexOptions } from 'apexcharts';
import { ApexCharts } from "@src/utils/Charts/ApexCharts";


const CustomerFavouriteChart = () => {

    Chart.register(RadialLinearScale, ArcElement);   

    const series = [42, 47, 52, 58, 65]

    const options: ApexOptions = {
        chart: {
            type: 'polarArea',
        },
        labels: ['Pizza', 'Sandwich', 'Spaghetti', 'Soup', 'Wine'],
        colors: [],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            show: false,
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                }
            }
        },
        // theme: {
        //     monochrome: {
        //         enabled: true,
        //         shadeTo: 'light',
        //         shadeIntensity: 0.6
        //     }
        // }
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
        <div className="bg-white rounded-md shadow-lg p-6 w-full space-y-8 h-[32rem]">
            <h1 className="font-medium text-xl">Customer Favourite</h1>
            <div className=""> 
                <ApexCharts options={options} series={series} type="polarArea" width="100%" />
                {/* <Pie data={data} options={{maintainAspectRatio: false}} className="w-4/5" /> */}
            </div>
            <div className="w-full space-y-4">
                <div className="w-full space-y-3">
                    <div className="flex justify-between font-medium"> 
                        <span className="text-dark-gray">Pizza(40%)</span>
                        <span className="text-medium-gray">25</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-md "> <div className="w-4/5 bg-dark-peach h-2 rounded-md"></div> </div>
                </div>

                <div className="w-full space-y-3">
                    <div className="flex justify-between font-medium"> 
                        <span className="text-dark-gray">Pizza(40%)</span>
                        <span className="text-medium-gray">25</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-md "> <div className="w-4/5 bg-dark-peach h-2 rounded-md"></div> </div>
                </div>

                <div className="w-full space-y-3">
                    <div className="flex justify-between font-medium"> 
                        <span className="text-dark-gray">Pizza(40%)</span>
                        <span className="text-medium-gray">25</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-md "> <div className="w-4/5 bg-dark-peach h-2 rounded-md"></div> </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerFavouriteChart;
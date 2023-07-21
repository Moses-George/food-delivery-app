import MenuDropDown from "@src/components/UI/Search/MenuDropDown";
// import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Line } from "react-chartjs-2";
import { ApexCharts } from "@src/utils/Charts/ApexCharts";

const Revenue = () => {

    const series = [
        {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ]

    const options: ApexOptions = {
        chart: {
            width: 500,
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:00:30.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z" ]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    }

    // const data = {
    //     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //     datasets: [
    //         {
    //             label: "First dataset",
    //             data: [33, 53, 85, 41, 44, 65],
    //             fill: true,
    //             backgroundColor: "rgba(75,192,192, 0.2)",
    //             borderColor: "rgba(75,192,192,1)"
    //         },
    //         {
    //             label: "Second dataset",
    //             data: [33, 25, 35, 51, 54, 76],
    //             fill: false,
    //             borderColor: "#742774"
    //         }
    //     ]
    // }

    return (
        <div className="w-full bg-white rounded-md shadow-lg p-6">
            <div className="flex sm:flex-col justify-between pb-10 gap-y-6">
                <div className="">
                    <h1 className="text-dark-gray text-2xl font-semibold border-l-8 pl-2 border-dark-peach">Revenue</h1>
                    <p className="text-medium-gray text-md">Lorem, ipsum dolor.</p>
                </div>
                <MenuDropDown />
            </div>
            <div className="py-10">
                <p className="text-medium-gray text-lg">Income</p>
                <h1 className="text-dark-gray text-2xl font-bold">$552,700</h1>
            </div>
            <div className="w-full h">
                {(typeof window !== 'undefined') && <ApexCharts options={options} series={series} type="area" width={500} height={350} />}
                {/* <Line data={data} options={{ maintainAspectRatio: false }} /> */}
            </div>
        </div> 
    )
}

export default Revenue;
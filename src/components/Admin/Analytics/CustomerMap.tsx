import MenuDropDown from "@src/components/UI/Search/MenuDropDown";
import { Chart as ChartJs, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from "chart.js";
import { Bar, Chart } from "react-chartjs-2";

ChartJs.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController)

const CustomerMap = () => {

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const data = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'All',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: [-50, -40, -30, -20, -10, 0, 100, 200, 300, 400, 500]
            },
            {
                type: 'bar' as const,
                label: 'Active',
                backgroundColor: 'rgb(75,192, 192)',
                data: [100, 200, 300, 400, 500, 600],
                borderColor: 'white',
                borderWidth: 2
            },
            {
                type: 'bar' as const,
                label: 'Inactive',
                backgroundColor: 'rgb(53, 162, 235)',
                data: [-500, -400, -300, -200, -100, 0, 100, 200, 300, 400, 500, 600]
            }
        ]
    }

    return (
        <div className="bg-white rounded-md shadow-lg p-6">
            <div className="flex sm:flex-col justify-between pb-10 gap-y-6">
                <div className="">
                    <h1 className="text-dark-gray text-2xl font-semibold border-l-8 pl-2 border-dark-peach">Customer Map</h1>
                    <p className="text-medium-gray text-md">Lorem, ipsum dolor.</p>
                </div>
                <MenuDropDown />
            </div>
            <div className="w-full pt-10">
                <Chart type="bar" data={data} options={{ aspectRatio: 1 }} />
            </div>
        </div >
    )
}

export default CustomerMap;
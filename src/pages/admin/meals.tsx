import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProfileLayout from "@src/components/Layout/ProfileLayout/ProfileLayout";
import HotMealCard from "@src/components/Meals/HotMeals/HotMeal";
import MenuDropDown from "@src/components/UI/Search/MenuDropDown";
import SearchBar from "@src/components/UI/Search/SearchBar";
import { ApexCharts } from "@src/utils/Charts/ApexCharts";
import { ApexOptions } from "apexcharts";
import { MdAddCircleOutline } from "react-icons/md";
import "@splidejs/react-splide/css";
import Link from "next/link";



const Meals = () => {

    const series = [20];

    const options: ApexOptions = {
        labels: ["Burger"],
        legend: {
            show: false
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontWeight: "700",
                        fontSize: "22px"
                    }
                }
            }
        }
    }

    return (
        <ProfileLayout header="Meals">
            <section className="mx-6 space-y-10">
                <div className="flex justify-between">
                    <SearchBar />
                    <div className="flex gap-x-3">
                        <Link href="/admin/new-meal">
                            <button className="flex items-center gap-x-2 bg-medium-gray py-2 px-5 rounded-3xl shadow-sm text-white ">
                                <span>New Meal</span>
                                <MdAddCircleOutline className="text-xl" />
                            </button>
                        </Link>
                        <MenuDropDown />
                    </div>
                </div>
                <div className="pt-28 flex flex-wrap justify-between gap-y-32">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map(meal => <HotMealCard key={meal} />)}
                </div>
                <div className="bg-white rounded-md shadow-md p-8 w-full ">
                    <h1 className="text-xl text-dark-gray font-medium pb-8">Menu Comparison</h1>
                    <Splide options={{
                        perPage: 3,
                        height: 'fit-content',
                        width: 'fit-content',
                        rewind: true,
                        keyboard: 'global',
                        perMove: 1,
                        focus: "center",
                        type: 'slide',
                        easing: "ease",
                    }}
                    >
                        <SplideSlide>
                            <ApexCharts series={series} options={options} type="radialBar" width={350} />
                        </SplideSlide>
                        <SplideSlide>
                            <ApexCharts series={series} options={options} type="radialBar" width={350} />
                        </SplideSlide>
                        <SplideSlide>
                            <ApexCharts series={series} options={options} type="radialBar" width={350} />
                        </SplideSlide>
                        <SplideSlide>
                            <ApexCharts series={series} options={options} type="radialBar" width={350} />
                        </SplideSlide>
                        <SplideSlide>
                            <ApexCharts series={series} options={options} type="radialBar" width={350} />
                        </SplideSlide>
                        <SplideSlide>
                            <ApexCharts series={series} options={options} type="radialBar" width={350} />
                        </SplideSlide>

                    </Splide>
                </div>
            </section>
        </ProfileLayout>
    )
}

export default Meals;
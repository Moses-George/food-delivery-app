import Head from 'next/head';
import { Inter, Roboto } from 'next/font/google';
import styles from '@src/styles/Home.module.css';
import IntroSection from '@src/components/IntroSection/IntroSection';
import HotMealsRow from '@src/components/Meals/HotMeals/HotMealsRow';
import Carousel from '@src/components/Testimonials/Carousel';
import MealCaption from '@src/components/UI/MealCaption/MealCaption';
import MenuList from '@src/components/MenuList/MenuList';
import MealsRow from '@src/components/Meals/MealsRow';
import Navbar from '@src/components/Layout/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gee Foods</title>
        <meta name="description" content="order your favourite foods from GeeFoods" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <Navbar />
        <IntroSection />
        <HotMealsRow />
        <MenuList />
        <MealsRow />
        <MealCaption
          header='You gotta nourish to florish'
          bgImageClass="bg-[url('../assets/images/bg/blur-8.jpg')]"
          note='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi assumenda molestiae beatae nisi quis culpa adipisci et eius, quisquam repellendus magnam earum aut architecto.' />
        <Carousel />
        <MealCaption
          header='Good food, good taste'
          bgImageClass="bg-[url('../assets/images/bg/blur-4.jpg')]"
          note='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi assumenda molestiae beatae nisi quis culpa adipisci et eius, quisquam repellendus magnam earum aut architecto.' />
      </div>
    </>
  )
}

import React from 'react'
import breakfastbg from '../assets/menu/bgImages/breakFastBG.jpg';
import CardItem from '../components/CardItem';
import MenuTopbg from '../components/MenuTopbg';
import Gotomenu from '../components/Gotomenu';
import { BreakfastData } from '../Data/breakfastData';

const Breakfast = ({orderData,isLoggedIn}) => {
  return (
    <div>
        <MenuTopbg img={breakfastbg} title={"Breakfast"} desc={"Taste the First Meal"}/>

            <div className='w-[1350px] max-w-[1350px] flex flex-wrap gap-16 mx-auto mt-6'>
            {
                BreakfastData.map((data) => {
                return <CardItem {...data} key={data.id} orderData={orderData} isLoggedIn={isLoggedIn}/>
                })
            }
            </div>

        <Gotomenu/>
    </div>
  )
}

export default Breakfast
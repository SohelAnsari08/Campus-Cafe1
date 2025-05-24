import React from 'react'
import { DrinkData } from '../Data/drinkData';
import drinkBg from '../assets/menu/bgImages/softDrink.jpg'
import CardItem from '../components/CardItem';
import MenuTopbg from '../components/MenuTopbg';
import Gotomenu from '../components/Gotomenu';

const Drink = ({orderData, isLoggedIn}) => {
  return (
    <div>
        <MenuTopbg img={drinkBg} title={"Refreshments"} desc={"Fizz up your mood instantly!"}/>

            <div className='w-[1350px] max-w-[1350px] flex flex-wrap gap-16 mx-auto mt-6'>
            {
                DrinkData.map((data) => {
                return <CardItem {...data} key={data.id} orderData={orderData} isLoggedIn={isLoggedIn} />
                })
            }
            </div>

        <Gotomenu/>
    </div>
  )
}

export default Drink
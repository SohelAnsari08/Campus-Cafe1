import React from 'react'
import lunchBg from '../assets/menu/bgImages/lunch.jpeg';
import { LunchData } from '../Data/lunchData';
import CardItem from '../components/CardItem';
import MenuTopbg from '../components/MenuTopbg';
import Gotomenu from '../components/Gotomenu';

const Lunch = ({orderData, isLoggedIn}) => {
  return (
    <div>
        <MenuTopbg img={lunchBg} title={"Lunch"} desc={"Taste the Mid-Day Meal"}/>

        <div className='w-[1350px] max-w-[1350px] flex flex-wrap gap-16 mx-auto mt-6'>
          {
            LunchData.map((data) => {
              return <CardItem {...data} key={data.id} orderData={orderData} isLoggedIn={isLoggedIn} />
            })
          }
        </div>

      <Gotomenu/>
    </div>
  )
}

export default Lunch
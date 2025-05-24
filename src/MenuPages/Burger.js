import React from 'react'
import burgerbg from '../assets/menu/bgImages/burgerBG.jpg';
import { BurgerData } from '../Data/burgerData';
import CardItem from '../components/CardItem';
import MenuTopbg from '../components/MenuTopbg';
import Gotomenu from '../components/Gotomenu';

const Burger = ({orderData, isLoggedIn}) => {
  return (
    <div>
        <MenuTopbg img={burgerbg} title={"Burger"} desc={"Taste the best Burger"}/>

        <div className='w-[1350px] max-w-[1350px] flex flex-wrap gap-16 mx-auto mt-6'>
          {
            BurgerData.map((data) => {
              return <CardItem {...data} key={data.id} orderData={orderData} isLoggedIn={isLoggedIn}/>
            })
          }
        </div>

        <Gotomenu/>
        
    </div>
  )
}

export default Burger
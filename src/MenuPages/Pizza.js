import React from 'react'
import pizzabg from '../assets/menu/bgImages/pizzaBg.jpg';
import CardItem from '../components/CardItem';
import MenuTopbg from '../components/MenuTopbg';
import Gotomenu from '../components/Gotomenu';
import { PizzaData } from '../Data/pizzaData';

const Pizza = ({orderData,isLoggedIn}) => {
  return (
    <div>
      <MenuTopbg img={pizzabg} title={"Pizza Mania"} desc={"Taste the best Pizza"}/>

        <div className='w-[1350px] max-w-[1350px] flex flex-wrap gap-16 mx-auto mt-6'>
          {
            PizzaData.map((data) => {
              return <CardItem {...data} key={data.id} orderData={orderData} isLoggedIn={isLoggedIn} />
            })
          }
        </div>

      <Gotomenu/>
    </div>
  )
}

export default Pizza
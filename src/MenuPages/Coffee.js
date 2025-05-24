import React from 'react'
import coffeebg from '../assets/menu/bgImages/coffeeBG.jpg'
import { CoffeeData } from '../Data/coffeeData'
import CardItem from '../components/CardItem';
import MenuTopbg from '../components/MenuTopbg';
import Gotomenu from '../components/Gotomenu';

const Coffee = ({orderData,isLoggedIn}) => {
  return (
    <div>
      <MenuTopbg img={coffeebg} title={"Coffee & Tea"} desc={"Taste the best Coffee"}/>

        <div className='w-[1350px] max-w-[1350px] flex flex-wrap gap-16 mx-auto mt-6'>
          {
            CoffeeData.map((data) => {
              return <CardItem {...data} key={data.id} orderData={orderData} isLoggedIn={isLoggedIn} />
            })
          }
        </div>

      <Gotomenu/>
    </div>
  )
}

export default Coffee
import React from 'react'
import pasta from '../assets/menu/bgImages/noodlesBG.jpg'
import { PastaData } from '../Data/pastaData';
import CardItem from '../components/CardItem';
import MenuTopbg from '../components/MenuTopbg';
import Gotomenu from '../components/Gotomenu';

const Pasta = ({orderData, isLoggedIn}) => {
  return (
    <div>
        <MenuTopbg img={pasta} title={"Noodles & Pasta"} desc={"Taste the best Noodles"}/>

        <div className='w-[1350px] max-w-[1350px] flex flex-wrap gap-16 mx-auto mt-6'>
          {
            PastaData.map((data) => {
              return <CardItem {...data} key={data.id} orderData={orderData} isLoggedIn={isLoggedIn}/>
            })
          }
        </div>

      <Gotomenu/>
    </div>
  )
}

export default Pasta
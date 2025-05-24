import React, { useState } from 'react'
import menuBG from '../assets/menu/bgImages/menuBG.avif'
import {menuCategory} from '../Data/menuData';
import MenuItems from '../components/MenuItems';
import {useNavigate } from 'react-router';

const Menu = () => {

    const navigate = useNavigate() 

    function navigateMenu(id){
        if(id === 1){
            navigate('/coffee')
        }
        if(id === 2){
            navigate('/burger')
        }
        if(id === 3){
            navigate('/pizza')
        }
        if(id === 4){
            navigate('/pasta')
        }
        if(id === 5){
            navigate('/breakfast')
        }
        if(id === 6){
            navigate('/lunch')
        }
        if(id === 7){
            navigate('/drinks')
        }
        else{
            return;
        }
    }
  return (
    <div>
    
        {/* background section */}
        <div className='relative'>
            <img src={menuBG} className='w-full h-[550px] bg-center object-cover'></img>
            <h1 className='font-sans font-extrabold leading-8 tracking-[0.13em] text-[95px] absolute text-white top-[20%] right-[40%]'>Order</h1>
            <p className='text-white font-semibold text-[3rem] text-center absolute top-[45%] right-[25%] poppins'>Taste the best Coffee, Burger and<br/>Pizza in Cafe</p>
        </div>

        <div className='w-[1400px] max-w-[1450px] mx-auto flex flex-wrap mt-6'>
            {
                menuCategory.map((menuCard) => {
                    return <MenuItems key={menuCard.id} {...menuCard} navigateMenu={navigateMenu}/>
                })
            }

        </div>
    </div>
  )
}

export default Menu
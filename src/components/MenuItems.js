import React from 'react'
import { Link } from 'react-router'

const MenuItems = ({img,title,desc,id,navigateMenu}) => {
  return (
        <div className='w-[45%] mx-auto rounded-[10px] relative mb-10'>
            
              <figure onClick={() => navigateMenu(id)} className='figureshadow hover:scale-105 transition-all duration-300 relative'>
                    <img src={img} className='w-[100%] rounded-[10px] object-cover'/>
                    <figcaption className='absolute bottom-[4rem] left-0 p-[25px] w-[100%] h-[20%] text-[40px] text-white font-semibold poppins flex flex-col gap-1'>
                        <p>{title}</p>
                        <p className='text-[18px] ml-3'>{desc}</p>
                        <p className='text-[15px] absolute right-0 -bottom-14 mr-2'>Click ➜</p>
                    </figcaption>
              </figure>
            
        </div>
  )
}

export default MenuItems
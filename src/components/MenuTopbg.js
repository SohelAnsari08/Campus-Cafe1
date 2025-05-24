import React from 'react'

const MenuTopbg = (props) => {
  return (
    <div>
        <div className='relative'>
            <img src={props.img} className='w-full h-[550px] bg-center object-cover'></img>
            <h1 className='font-sans font-extrabold leading-8 tracking-[0.13em] text-[95px] absolute text-white bottom-12 left-[2%]'>{props.title}</h1>
            <p className='text-white font-semibold text-[2.5rem] text-center absolute bottom-[2%] right-2 poppins'>{props.desc}</p>
        </div>
    </div>
  )
}

export default MenuTopbg
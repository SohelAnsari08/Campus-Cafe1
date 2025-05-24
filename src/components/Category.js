import React from 'react'

const Category = ({imgSrc,title,itemno}) => {
  return (
    <div className='shadow-lg flex flex-col flex-wrap gap-1 hover:scale-110 transition-all duration-200 '>
        <img src={imgSrc} width={238} height={203}></img>
        <div className='mt-2 p-2'>
            <p className='text-[#03081F] text-[24px] poppins font-extrabold'>{title}</p>
            <p className='text-[14px] text-[#FC8A06]'>Available Item :{itemno}</p>
        </div>
    </div>
  )
}

export default Category
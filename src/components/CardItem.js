import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router'

const CardItem = ({img,title,price,rating,incredients,orderData,isLoggedIn}) => {

  const navigate = useNavigate();
  return (
    <div className='w-[30%] rounded-lg'>
        <div className='flex flex-col rounded-lg bg-slate-100 shadow-slate-100'>
            <img src={img} className='w-[100%] rounded-lg'></img>
            <div className='p-1'>
                <div className='flex gap-2 justify-between'>
                    <p className='text-2xl font-semibold text-[#03081F] poppins'>{title}</p>
                    <p className='bg-green-500 rounded-md p-[2px] mt-1 pl-[2px] text-white text-[14px]'>{rating}<span>★</span></p>
                </div>
                
                <p className='text-[16px] text-[#03081F] opacity-80'>{incredients}</p>
                <p className='text-2xl text-[#03081F] font-extrabold poppins mt-1'>{`₹ ${price}`}</p>
            </div>
            <button 
              onClick={() => {
                if(isLoggedIn){
                  orderData(img,title,rating,incredients,price)
                  navigate('/order')
                }
                else{
                  toast.error("Login First")
                }
                
              }}
              className="rounded-[8px] w-[90%] mx-auto text-center font-medium bg-[#ffd60a] px-6 py-[8px] mt-6 hover:scale-110 hover:shadow-lg transition-all duration-200">Order Now</button>
        </div>
    </div>
  )
}

export default CardItem
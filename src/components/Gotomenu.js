import React from 'react'
import { useNavigate } from 'react-router'


const Gotomenu = () => {

    const Navigate = useNavigate();
    function clickHandeler(){
        Navigate("/menu")
    }
  return (
    <div className='text-center'>
        <button 
            onClick={clickHandeler}
            className='rounded-[8px] font-medium bg-[#ffd60a] px-10 py-[15px] mt-6'
        >
            Go Back To Menu

        </button>
    </div>
  )
}

export default Gotomenu
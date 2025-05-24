import React from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { FcGoogle } from 'react-icons/fc'

const Template = ({title, image, formtype, setIsLoggedIn, setCurrentpage}) => {
  return (
    <div className='flex justify-center w-[70%] rounded-2xl bg-[#D9D9D9] bg-opacity-70 bg- max-w-[550px] py-5 mx-auto mt-[1rem] gap-y-0 md:mx-auto poppins shadow-xl mb-2'>

        <div className='relative w-11/12 max-w-[450px]'>
            <h1 className=' font-extrabold text-[1.875rem] leading-[2.375rem] text-[#03081F] poppins'>{title}</h1>

            {
                formtype === "signup" ?
                (<SignUpForm setIsLoggedIn={setIsLoggedIn} setCurrentpage={setCurrentpage} />) : (<LoginForm  setIsLoggedIn={setIsLoggedIn} setCurrentpage={setCurrentpage} />)
            }

            <div className='flex items-center w-full my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-[#03081F]'></div>
                <div className='font-medium leading-[1rem] text-[#03081F]'>OR</div>
                <div className='h-[1px] w-full bg-[#03081F]'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white  bg-[#03081F] border border-[#03081F] px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
        </div>

    </div>
  )
}

export default Template;

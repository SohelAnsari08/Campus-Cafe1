import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn, setCurrentpage}) => {

    const navigate = useNavigate();

    const [formData, setFormData]= useState(
        {email: "", password: ""}
    )

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
        const {name,value} = event.target;

        setFormData( (prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        });
    }

    function submitHandeler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        setCurrentpage('home')
        navigate("/")
        console.log(formData)
    }


  return (
    <form onSubmit={submitHandeler} className='flex flex-col w-full gap-y-4 mt-6' >
        <label className='w-full'>
            <p className='text-[0.875rem] text-[#03081F]   mb-1 leading-[1.375rem]'>
                Email Address<sup>*</sup>
            </p>
            <input
                className=' h-11 rounded-[0.5rem] bg-[#FAF9F6] text-[#03081F] border-b-2 border-[#03081F] w-full p-[12px] outline-none'
                required
                type='email'
                name='email'
                value = {formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-[#03081F]  mb-1 leading-[1.375rem]'>
                Password<sup>*</sup>
            </p>
            <input
                className='h-11 rounded-[0.5rem] text-[#03081F] bg-[#FAF9F6] border-b-2 border-[#03081F]  w-full p-[12px] outline-none'
                required
                type={showPassword ? ("text") : ("password")}
                name='password'
                value = {formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
            />

            <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                {
                    showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)  : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  />)
                }
            </span>

            <Link to="#">
                <p className='text-xs text-[#03081F]  mt-1 text-right'>
                    Forget Password?
                </p>
            </Link>

        </label>

        <button className=' rounded-[8px] font-medium bg-[#ffd60a] px-4 py-[8px] mt-6 '>
            Sign Up
        </button>
        
    </form>
  )
}

export default LoginForm;
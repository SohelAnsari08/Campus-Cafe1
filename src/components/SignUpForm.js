import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast'


const SignUpForm = ({setIsLoggedIn, setCurrentpage}) => {

    const navigate = useNavigate();

    const [formData, setFormData]= useState({
            firstName:"",
            lastName:"",
            email: "", 
            password: "",
            confirmPassword:""
    })


    function changeHandler(event){
        const {name,value} = event.target;

        setFormData( (prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        });
    }

    const [showPassword, setShowPassword] = useState(false)
    const [cnfPassword, setcnfPassword] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created")
        navigate("/")
        setCurrentpage('home')

        console.log(formData)
    }

  return (
    <div>

        <form onSubmit={submitHandler} className='mt-8'>

            {/* first name and last name cont */}
            <div className='flex gap-x-4 w-full mt-2'>

                <label className='w-full'>
                    <p className='text-[0.875rem]  mb-1 leading-[1.375rem]'>
                        First Name<sup className='text-[#EF476F]'>*</sup>
                    </p>
                    <input
                        className='h-11 bg-[#FAF9F6] border-b-2 border-[#03081F]   rounded-[0.5rem] w-full p-[12px] outline-none'
                        required
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem]  mb-1 leading-[1.375rem]'>
                        Last Name<sup className='text-[#EF476F]'>*</sup>
                    </p>
                    <input
                        className='h-11 bg-[#FAF9F6] border-b-2 border-[#03081F]   rounded-[0.5rem]  w-full p-[12px] outline-none'
                        required
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                    />
                </label>

            </div>

            {/* email */}
            <div className='mt-2'>
                <label className='w-full'>
                <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-[#EF476F]'>*</sup>
                </p>
                <input
                    className='bg-[#FAF9F6] h-11 border-b-2 border-[#03081F]   rounded-[0.5rem] text-[#DBDDEA] w-full p-[12px] outline-none'
                    required
                    type='email'
                    name='email'
                    value = {formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email address'
                />
                </label>
            </div>

            {/* createPassword and confirm password */}
            <div className='flex gap-x-4 w-full mt-2'>

                <label className='w-full relative'>
                    <p className='text-[0.875rem]  mb-1 leading-[1.375rem]'>
                        Create password<sup className='text-[#EF476F]'>*</sup>
                    </p>
                    <input
                        className='bg-[#FAF9F6] border-b-2 border-[#03081F]   h-11 rounded-[0.5rem] w-full p-[12px] outline-none'
                        required
                        type={showPassword ? ("text") : ("password") }
                        name='password'
                        value = {formData.password}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                    />
                    <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}>
                                    {
                                        showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'  />)  : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  />)
                                    }

                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem]  mb-1 leading-[1.375rem]'>
                        Confirm password<sup className='text-[#EF476F]'>*</sup>
                    </p>
                    <input
                        className='bg-[#FAF9F6] border-b-2 border-[#03081F]   h-11 rounded-[0.5rem]  w-full p-[12px] outline-none'
                        required
                        type={cnfPassword ? ("text") : ("password") }
                        name='confirmPassword'
                        value = {formData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                    />
                    <span 
                        className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={() => setcnfPassword((prev) => !prev)}>
                                    {
                                        cnfPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)  : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'  />)
                                    }
                    </span>
                </label>



            </div>

            <button className='bg-[#ffd60a] rounded-[8px] font-medium text-[#000814] px-[12px] py-[8px] mt-6 w-full ' >
                Create Account
            </button>

        </form>

    </div>
  )
}

export default SignUpForm;
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Logo from "../assets/Logo.png"
import { toast } from 'react-hot-toast'

const Navbar = (props) => {
    let  isLoggedIn = props.isLoggedIn;
    let  setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate()

    let currentPage=props.currentPage;
    let setCurrentpage=props.setCurrentpage;


  return (
    <div className='flex justify-between items-center w-[1350px] max-w-[1350px] py-4 mx-auto  z-20 '>

        <Link to="/">
            <img src={Logo} alt='Logo' width={120} height={32} loading='lazy' />
        </Link>
        {/* 'bg-[#FC8A06] text-white py-2 px-6 rounded-[100px] '> */}
        <nav>
            <ul className='flex gap-x-6 text-[#03081F]'>
                <li onClick={() => setCurrentpage('home')}>
                    <Link to="/" 
                        className={`font-semibold transition-all duration-300 ${currentPage === 'home' ? " bg-[#FC8A06] text-white py-2 px-6 rounded-[100px]" : " text-[#03081F]" }`}>Home</Link>
                </li>
                <li onClick={() => setCurrentpage('menu')}>
                    <Link to="/menu" className={`font-semibold transition-all duration-300 ${currentPage === 'menu' ? " bg-[#FC8A06] text-white py-2 px-6 rounded-[100px]" : " text-[#03081F]" }`}>Menu</Link>
                </li>
                <li onClick={() => setCurrentpage('contact')}>
                    <Link to="/contact" className={`font-semibold transition-all duration-300 ${currentPage === 'contact' ? " bg-[#FC8A06] text-white py-2 px-6 rounded-[100px]" : " text-[#03081F]" }`}>Contact us</Link>
                </li>
            </ul>
        </nav>

        {/* Login - Signup - Logout - Dashboad */}

        <div className='flex items-center justify-center gap-x-4'>
            {   !isLoggedIn &&
                <Link to="/login">
                    <button onClick={() => setCurrentpage(null)} className='bg-[#03081F] text-white  py-2 px-4 rounded-lg border border-[#03081F]'>
                        Login
                    </button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button onClick={() => setCurrentpage(null)} className='bg-[#03081F] text-white  py-[8px] px-[12px] rounded-[8px] border border-[#2c333f]'>
                        Sign up
                    </button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button 
                        className='bg-[#03081F] text-white  py-[8px] px-[12px] rounded-[8px] border border-[#2c333f]'
                        onClick={() => {
                            setIsLoggedIn(false);
                            navigate("/")
                            setCurrentpage('home')
                            toast.success("Logged Out")   
                            
                        }}
                    >
                        Log Out
                    </button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/cart" >
                    <button onClick={() => setCurrentpage(null)} className='bg-[#03081F] text-white py-[8px] px-[12px] rounded-[8px] border border-[#2c333f]'>
                        View Cart
                    </button>
                </Link>
            }

        </div>


    </div>
  )
}

export default Navbar;

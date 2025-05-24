import React from 'react'
import { Link } from 'react-router'
import playStore from '../assets/Logo/playStore.svg';
import appleStore from '../assets/Logo/appleStore.svg';
import facebook from '../assets/Logo/Facebook.svg';
import instagram from '../assets/Logo/Instagram.svg';
import snapchat from '../assets/Logo/Snapchat.svg';
import Logo from '../assets/Logo.png';


const Footer = () => {
  return (
    <div>
        <div className="w-full bg-[#D9D9D9] bg-opacity-60 mt-4">
                  
                  <div className="w-[1350px] max-w-[1350px] mx-auto p-16 flex gap-40 text-[#03081F]">

                    {/* Left part */}
                    <div>
                        <img src={Logo}></img>
                        <div className="flex items-center -mt-6">
                            <img src={playStore} width={146}></img>
                            <img src={appleStore} width={146}></img>
                        </div>
                        <div className="-mt-6 text-[#03081F]">
                            <p>Company #4900520-856, Registered with</p>
                            <p>Coffee House.</p>
                        </div>
                    </div>

                    {/* Right Part */}
                    <div className="flex gap-[5.2rem]">

                        <div className="flex flex-col gap-4">
                            <p className="poppins text-[18px] font-bold">Get Exclusive Deals in Your inbox</p>

                            <div className="pl-2">

                                <p className="text-[14px]">we wont spam, read our <a href="#" className="underline">email poilicy</a></p>
                            </div>

                            <div>
                                <p className="text-[16px] font-semibold">Follow Us, For Latest Update</p>
                                <div className="flex gap-2 mt-2">
                                    <Link to="#"><img src={facebook} alt="facebook"></img></Link>
                                    <Link to="#"><img src={instagram} alt="instagram"></img></Link>
                                    <Link to="#"><img src={snapchat} alt="snapchat"></img></Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="poppins text-[18px] font-bold">Legal Pages</p>

                            <p className="text-[15px]"><Link to="#" className="underline">Terms and condition</Link></p>
                            <p className="text-[15px]"><Link to="#" className="underline">Privacy</Link></p>
                            <p className="text-[15px]"><Link to="#" className="underline">Cookies</Link></p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="poppins text-[18px] font-bold">Important Links</p>

                            <p className="text-[15px]"><Link to="#" className="underline">Get Help</Link></p>
                            <p className="text-[15px] underline"><Link to="#" className="underline">Sign Up</Link></p>
                            <p className="text-[15px]"><Link to="#" className="underline">Cookies</Link></p>
                        </div>
                    </div>

                  </div>  

                {/* last section */}
                  <div className="w-full h-[73px] bg-[#03081F] ">
                    <div className="flex items-center justify-between text-white text-[15px] w-[1350px] max-w-[1350px] mx-auto p-6 ">
                        <div className="text-center">Order Copyright 2024, All Rights Reserved</div>
                        <div className="flex gap-7">
                            <p className="text-[15px]"><Link to="#">Privacy Policy</Link></p>
                            <p className="text-[15px]"><Link to="#">Terms</Link></p>
                            <p className="text-[15px]"><Link to="#">Pricing</Link></p>
                            <p>Do not sell or Share my Personal Information</p>
                        </div>
                    </div>
                  </div>

        </div>
    </div>
  )
}

export default Footer
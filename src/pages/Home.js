import React from "react";
import titlebackpic from '../assets/titlebackpic.png';
import titlefrontpic from '../assets/titlefrontpic.png';
import { foodCategories } from "../Data/data";
import Category from "../components/Category";
import burgerBG from '../assets/burgerBg.png'
import pizza1 from '../assets/pizza.png';
import {useNavigate } from "react-router";



function Home({isLoggedIn, setCurrentpage}){

    const navigate = useNavigate()

    return(
        <div>
            <div className="relative text-3xl w-[1350px] max-w-[1350px] h-full mx-auto mt-4">
                
                {/* Hero section */}
                <div className="flex justify-between bg-[#03081F] w-full h-[600px] rounded-md relative shadow-md">

                    <img src={titlebackpic} className="absolute right-[300px] bottom-0 z-10"></img>
                    <img src={titlefrontpic} className="absolute right-[300px] bottom-0 z-10"></img>
                    {/* Left Part */}
                    <div className="w-1/2 flex flex-col gap-5 pl-10 mt-[9rem] z-10">
                        <p className="text-[16px] text-white poppins">Order Cafe food, Take a Bite.. </p>
                        <p className="text-[50px] text-white poppins font-semibold">Feast Your Senses,</p>
                        <p className="text-[50px] text-[#FC8A06] poppins mt-3 font-semibold poppins">Fast and Fresh</p>
                    </div>

                    {/* Right Part */}
                    <div className="bg-[#FC8A06] w-[550px] rounded-tl-[300px] mt-9 rounded-lg rounded-tr-none rounded-bl-none z-0">
                        <div className="relative">
                            {/* Process */}
                            <div className="bg-[#F8F8F8] rounded-lg w-[300px] absolute top-16 right-[3rem] p-1 border-b-4 border-[#03081F]">
                                <p className="absolute text-[68px] -top-8 right-0 font-semibold opacity-70 ">1</p>
                                <p className=" text-[16px] font-extrabold mb-[-10px] pl-[10px]">Order !</p>
                                <p className="text-[12px] font-semibold pl-[10px] ">We have recived your order...</p>
                            </div>
                            <div className="bg-[#F8F8F8] rounded-lg w-[300px] absolute top-[230px] right-[1rem] p-1 border-b-4 border-[#03081F]">
                                <p className="absolute text-[68px] -top-8 right-0 font-semibold opacity-70 ">2</p>
                                <p className=" text-[16px] font-extrabold mb-[-10px] pl-[10px]">Order !</p>
                                <p className="text-[12px] font-semibold pl-[10px] ">Order Getting Ready...</p>
                            </div>
                            <div className="bg-[#F8F8F8] rounded-lg w-[300px] absolute top-[400px] right-[3rem] p-1 border-b-4 border-[#03081F] ">
                                <p className="absolute text-[68px] -top-8 right-0 font-semibold opacity-70 ">3</p>
                                <p className=" text-[16px] font-extrabold mb-[-10px] pl-[10px]">Order !</p>
                                <p className="text-[12px] font-semibold pl-[10px] ">Receive Your order from Counter...</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* categories section */}
                <div className="flex flex-col gap-3 mt-12 w-[1350px] shadow-md p-4">
                    <p className="poppins font-semibold text-[40px]">Order Populer Categories <span>🎉</span><span>😃</span></p>
                    <div className="flex flex-wrap w-full mt-8 gap-6 gap-y-6">
                        {
                        foodCategories.map((category) => {
                            return <Category key={category.id} {...category}></Category>
                        }) 
                        }
                    </div>
                </div>

                {/* Addvertisement section */}
                <div className=" w-full h-[500px] flex justify-between mt-12 bg-[#FAF9F6] text-[#03081F] rounded-md poppins p-4">
                    <div className="w-1/2 flex flex-col items-center gap-4 justify-center">
                        <div className="flex flex-col gap-6">
                            <p className="text-center text-[40px] font-extrabold">50% OFF</p>
                            <p className="text-[30px] text-center">
                                Starting From <span className="text-[25px] opacity-60"><del>₹ 139</del></span> <span className="font-extrabold">₹ 69 </span>
                            </p>
                            <p className="text-center text-[30px] font-bold text-[#ffd60a]">

                                Burger and Fries Combo starting <br/> at just <span className="font-extrabold text-[35px]">₹ 99</span>
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                navigate('/burger')
                                setCurrentpage('menu')   
                            }} 
                            className="rounded-[8px] text-center font-medium bg-[#ffd60a] px-6 py-[8px] mt-6 hover:scale-110 hover:shadow-lg transition-all duration-200">Order Now !</button>
                    </div>
                    <img src={burgerBG} className="w-[600px] h-full"></img>
                </div>

                <div className=" w-full h-[500px] flex justify-between mt-12 bg-[#FAF9F6] text-[#03081F] rounded-md poppins p-4">
                    <div className="w-1/2 flex flex-col items-center gap-4 justify-center">
                        <div className="flex flex-col gap-6">
                            <p className="text-center text-[40px] font-extrabold">40% OFF</p>
                            <p className="text-[30px] text-center">
                                Starting From <span className="text-[25px] opacity-60"><del>₹ 199</del></span> <span className="font-extrabold">₹ 119  </span>
                            </p>
                            <p className="text-center text-[30px] font-bold text-[#ffd60a]">

                                Buy 1 Get 1 Free every Monday  <br/> at just <span className="font-extrabold text-[35px]">₹ 159</span>
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                    navigate('/pizza')
                                    setCurrentpage('menu')                               
                            }}
                            className="rounded-[8px] text-center font-medium bg-[#ffd60a] px-6 py-[8px] mt-6 hover:scale-110 hover:shadow-lg transition-all duration-200">Order Now !</button>
                    </div>
                    <img src={pizza1} className="w-[600px] h-full object-cover"></img>
                </div>
                
                {/* cafe detail section */}
                <div className="w-full flex justify-evenly bg-[#FC8A06] mt-12 p-4 rounded-lg">

                    <div className="flex flex-col gap-3 pr-[180px] border-r-4 border-white">
                        <p className="text-center text-white font-semibold text-[50px]">300+</p>
                        <p className="text-center text-white text-[30px] font-extrabold poppins">Order Recived Per/Day</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-center text-white font-semibold text-[50px]">100+</p>
                        <p className="text-center text-white text-[30px] font-extrabold poppins">Food Item Available</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
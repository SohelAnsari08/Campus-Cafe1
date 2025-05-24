import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast'

const Contact = () => {


    const [formData, setFormData]= useState({
                name:"",
                email: "",
                message:"", 
                
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

        function submitHandler(event){
            event.preventDefault();
            toast.success("Messege Sent Successfully")
            console.log(formData)
        }
  return (
    <div className="bg-yellow-50 text-[#03081F] py-12 px-4 sm:px-8 lg:px-24">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
            <h1 className="text-5xl font-bold text-center text-[#03081F]">Contact Us</h1>
            <h3 className="text-lg text-center text-[#03081F]">
            Whether you have a question, want to place an order, or just want to say hi, feel free to reach out.
            </h3>

            <div className="bg-yellow-100 p-6 rounded-xl  space-y-3">
            <p><span className="font-semibold text-[#03081F]">📞 Phone:</span> (123) 456-7890</p>
            <p><span className="font-semibold text-[#03081F]">📧 Email:</span> Order.@gmail.com</p>
            <p><span className="font-semibold text-[#03081F]">📍 Address:</span> Quantum University</p>
            <p>
                <span className="font-semibold text-[#03081F]">🕒 Hours:</span><br />
                Monday – Friday: 8:00 AM – 6:00 PM <br />
                Saturday – Sunday: 9:00 AM – 4:00 PM
            </p>
            </div>

            <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#03081F] text-center">Or just drop us a message below!</h2>
            <form onSubmit={submitHandler} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 text-[#03081F]">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                    placeholder="Your name"
                    className="p-3 rounded-lg text-[#03081F] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Your email"
                    className="p-3 rounded-lg border text-[#03081F] border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                </div>

                <textarea
                placeholder="Enter your message"
                onChange={changeHandler}
                name="message"
                cols={30}
                rows={6}
                value={formData.message}
                className="w-full p-3 rounded-lg border text-[#03081F] border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <div className="text-center">
                <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-[#03081F] font-semibold py-2 px-8 rounded-full transition duration-300"
                >
                    Send Message
                </button>
                </div>
            </form>
            </div>
        </div>
    </div>

  )
}

export default Contact
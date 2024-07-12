import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-gray-300'>
        <div className='p-5'>
            <div className='flex justify-center'>
                <div className='flex justify-evenly m-5 p-5 w-[40%] '>
                    <a className='group transition duration-300 p-2 cursor-pointer'>Home
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </a> 
                    <a className='group transition duration-300 p-2 cursor-pointer'>About
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </a> 
                    <a className='group transition duration-300 p-2 cursor-pointer'>Contact
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                    </a> 
                </div> 
            </div>

            <div className='flex justify-center  p-5 m-5'>
                <div className='flex w-[30%] justify-evenly'>
                    <FaFacebook className='w-[50px] h-[50px] cursor-pointer'/>
                    <FaLinkedin  className='w-[50px] h-[50px] cursor-pointer'/>
                    <FaFacebookMessenger  className='w-[50px] h-[50px] cursor-pointer'/>
                    <FaSquareXTwitter  className='w-[50px] h-[50px] cursor-pointer'/>
                </div>
            </div>

            <div className='flex justify-center p-5 m-5'>
                <p>&copy; 2024 Company Ltd. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
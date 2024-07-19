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
                <div className='flex justify-evenly sm:m-5 sm:p-5 sm:w-[40%] w-full'>
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

            <div className='flex justify-center p-5 m-5'>
                <div className='flex w-full sm:w-[30%] justify-evenly'>
                    <FaFacebook className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] cursor-pointer'/>
                    <FaLinkedin  className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] cursor-pointer'/>
                    <FaFacebookMessenger  className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] cursor-pointer'/>
                    <FaSquareXTwitter  className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] cursor-pointer'/>
                </div>
            </div>

            <div className='flex justify-center sm:p-5 sm:m-5'>
                <p>&copy; 2024 Sulaksha Aththanayaka</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
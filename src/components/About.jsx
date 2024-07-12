import React from 'react'
import hero from '../assets/hero.png'

function About() {
  return (
    <div className='' id='about'>
        <div className='flex flex-col pl-48 pt-60 z-10 h-screen relative w-[40%]'>
            <div className=''>
                <h1 className='text-4xl text-button-green'>Hi There I'm Binjan</h1>
            </div>
            <div className='my-[5vh] flex justify-center text-justify text-2xl'>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
            </div>
            <div className=''>
                <button className='bg-button-green text-white p-3 rounded-xl hover:bg-[#1d4e4b] transition duration-700 ease-in-out text-lg'>GET IN TOUCH</button>
            </div>
        </div>
        <div className='flex justify-end items-end pt-20 absolute right-0 z-0 top-0 w-[60%] h-full'>
            <img src={hero} className='w-full h-[90%] object-contain'/>
        </div>
    </div>
  )
}

export default About
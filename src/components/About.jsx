import React from 'react'
import hero from '../assets/hero.png'

function About() {
    

  return (
    <div className='flex flex-col' id='about'>
        <div className='flex flex-col pl-8 lg:pl-48 pr-8 sm:pr-12 pt-16 md:pt-36 lg:pt-48 z-10 sm:h-screen relative w-full md:w-[50%] animate-slideInFromLeft'>
            <div className='w-full '>
                <h1 className='text-2xl sm:text-3xl md:text-4xl text-button-green flex justify-center sm:justify-normal'>Hi There I'm Sulaksha</h1>
            </div>
            <div className='my-5 sm:flex justify-center text-justify text-md sm:text-xl lg:text-lg'>
                <p>
                    I am a final-year undergraduate student passionate about software engineering. Dedicated to learning and mastering 
                    software development, I continuously explore new technologies and methodologies. My academic journey includes practical 
                    projects and collaborations where I thrive in team settings, solving complex problems, and creating innovative solutions. 
                    Committed to continuous improvement, my goal is to leverage 
                    my skills and passion to positively impact the tech industry.
                </p>
            </div>
            <div className='my-5'>
                <button className='hidden sm:block bg-button-green text-white p-3 rounded-xl hover:bg-[#1d4e4b] transition duration-700 ease-in-out text-sm lg:text-lg'>GET IN TOUCH</button>
            </div>
        </div>
        <div className='flex justify-center sm:justify-end items-center sm:items-end sm:pt-20 pt-[600px] absolute sm:right-0 z-0 sm:top-0 w-full sm:w-[60%] h-full'>
            <img src={hero} className='w-full sm:h-[90%] sm:object-contain mb-8 sm:mb-0 animate-slideInFromBottom'/>
        </div>
    </div>
  )
}

export default About
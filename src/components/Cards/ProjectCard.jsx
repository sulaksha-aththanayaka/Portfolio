import React from 'react'
import software from '../../assets/softwareProject.png'


function ProjectCard({id, img, name, intro}) {

    const handleBorderColor = (id) => {
        if (id % 3 === 1) {
          return 'border-[#b0aac0]';
        //   return 'border-[#f9d5e5]';
        } else if (id % 3 === 2) { // Corrected the logic to use modulo 3
          return 'border-[#c2d4dd]';
        //   return 'border-[#eeac99]';
        } else {
          return 'border-[#ddeedd]';
        //   return 'border-[#e06377]';
        }
      };
      


  return (
    <div>
        <div className='bg-[#f8f7f1] px-[10vw] sm:py-[5vw] py-10'>
            <div className={`px-2 sm:px-0 sm:flex items-center ${handleBorderColor(id)} border-8 text-lg bg-white rounded-3xl`}>
                <div className='p-5 sm:p-10 '>
                    <img src={img}/>
                </div>
                <div className='sm:p-10 p-2 text-sm sm:text-xl'>
                    <div className='p-1 sm:p-5'>
                        <h1 className='text-xl sm:text-3xl font-bold'>{name}</h1>
                    </div>
                    <div className='p-1 sm:p-5'>
                        <p className=''>{intro}</p>
                    </div>
                    <div className='text-white p-2 sm:p-5 flex justify-center sm:justify-normal'>
                        <button className='bg-button-green p-2 rounded-lg hover:bg-[#1d4e4b]'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
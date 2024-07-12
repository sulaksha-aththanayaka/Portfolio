import React from 'react'

function Contact() {
  return (
    <div className='bg-white h-full' id='contact'>
        <div className='flex flex-col sm:flex-row h-[100%] m-[5vw]'>
            <div className='text-lg sm:text-3xl w-full sm:w-[40%] flex flex-col justify-between sm:justify-center items-center text-button-green'>
                <h1 className='block'>Let's chat.</h1>
                <h1 className='block'>Tell me about your project</h1>
            </div>
            <div className='w-full sm:w-[60%]'>
                <div className='m-2 sm:m-5 bg-[#e9e8e2] p-5 sm:p-10 rounded-3xl'>
                    <div className='flex flex-col'>
                        <h1 className='text-lg sm:text-2xl'>Send me a messsage</h1>
                        <input placeholder='Full Name' className='sm:my-5 my-2 sm:p-3 p-2 rounded-lg'/>
                        <input placeholder='Email Address' className='sm:my-5 my-2 sm:p-3 p-2 rounded-lg'/>
                        <input placeholder='Subject' className='sm:my-5 my-2 sm:p-3 p-2 rounded-lg'/>
                        <label className='text-lg sm:text-2xl my-2 py-2'>Tell me more about the project</label>
                        <textarea rows="4" cols="50" className='rounded-lg mb-5 p-2'/>
                        <div className='flex sm:justify-normal justify-center'> 
                            <button className='sm:h-[3vw] py-2 px-10 sm:p-5 text-md sm:text-xl bg-button-green hover:bg-[#164845] transition duration-700 ease-in-out rounded-lg w-[8vw] flex justify-center items-center text-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
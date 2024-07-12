import React from 'react'

function Contact() {
  return (
    <div className='bg-white h-full' id='contact'>
        <div className='flex h-[100%] m-[5vw]'>
            <div className='text-3xl w-[40%] flex flex-col justify-center items-center text-button-green'>
                <h1 className='block'>Let's chat.</h1>
                <h1 className='block'>Tell me about your project</h1>
            </div>
            <div className='w-[60%]'>
                <div className='m-5 bg-[#e9e8e2] p-10 rounded-3xl'>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl'>Send me a messsage</h1>
                        <input placeholder='Full Name' className='my-5 p-3 rounded-lg'/>
                        <input placeholder='Email Address' className='my-5 p-3 rounded-lg'/>
                        <input placeholder='Subject' className='my-5 p-3 rounded-lg'/>
                        <label className='text-2xl my-2 py-2'>Tell me more about the project</label>
                        <textarea rows="4" cols="50" className='rounded-lg mb-5 p-2'/>
                        <button className='p-5 text-xl bg-button-green hover:bg-[#164845] transition duration-700 ease-in-out rounded-lg w-[8vw] h-[3vw] flex justify-center items-center text-white'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
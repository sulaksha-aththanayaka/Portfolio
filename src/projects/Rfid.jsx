import React from 'react'
import img3 from '../assets/RFID_img_1.jpg'
import rfid_gui from '../assets/rfid_gui.png'
import rfid_physcial from '../assets/rfid_physical.png'

function Rfid() {
  return (
    <div className='mt-12 px-5 sm:px-64 py-6 sm:text-lg bg-gray-200'>
        <h1 className='font-bold italic text-xl sm:text-3xl text-center pb-6'>RFID Key Handover System</h1>
        
        <div className='flex justify-center pb-6'>
            <img src={img3}/>
        </div>

        <p>
        The RFID-Based Key Handover System leverages the power of RFID technology to create an efficient and secure method 
        for managing the handover of keys. This system is designed to streamline the process of verifying and authorizing key 
        recipients, ensuring only authorized individuals can access the keys.
        </p>

        <br/>

        <p>
        Radio Frequency Identification (RFID) technology has become a popular choice in various applications due to its convenience 
        and efficiency in tracking objects and people. This project utilizes RFID technology to develop a key handover system that 
        enhances security and user convenience.
        </p>

        <br/>

        <p>
        The key handover system operates through the following core functionalities
        </p>

        <br/>

        <p>
            <li>
                <span className='font-bold'>RFID Reader: </span>Captures tag data from RFID tags or cards attached to keys or other objects.
            </li>
            <li>
                <span className='font-bold'>Data Verification: </span>Captured data is checked against a database to verify the
             identity and authorization of the cardholder.
             </li>
            <li>
                <span className='font-bold'>Handover Process: </span>Upon successful verification, the system initiates the handover process, 
                allowing the keys to be handed over to the authorized cardholder.
            </li>
            <li>
                <span className='font-bold'>Graphical User Interface (GUI)</span>: A user-friendly GUI displays relevant information about 
                the key handover process, including the identity of the cardholder and other pertinent details. Following figure shows the 
                implementation of GUI.
            </li>
        </p>

        <br/>

        <div className='flex justify-center pb-6 sm:mx-14'>
            <img src={rfid_gui}/>
        </div>

        <br/>

        <p>Following technologies were used in this project</p>

        <br/>

        <p>
            <li>
                <span className='font-bold'>Frontend: </span>React was used to develop a dynamic and responsive graphical user interface 
                (GUI) that facilitates user interaction.
            </li>

            <li>
                <span className='font-bold'>Backend: </span>Node.js was employed to handle server-side logic, ensuring efficient processing 
                and communication between the RFID reader and the database.
            </li>

            <li>
                <span className='font-bold'>Databases: </span> Firebase realtime database was used to get the details of the RFID card and the tags in realtime 
                that is coming from a nodeMCU board. MongoDB database was used to store the details of the carda, tags and the card holders.
            </li>

            <li>
                <span className='font-bold'>Hardware Implementation:</span>Arduino was used for the physical implementation of the RFID 
                reader and integration with the system. Physical implementation of the system is shown below
            </li>

            <br/>

            <div className='flex justify-center pb-6 mx-14'>
                <img src={rfid_physcial}/>
            </div>
        </p>

        <br/>

        <p>
        The RFID-Based Key Handover System exemplifies the integration of RFID technology with modern web and database technologies to 
        create a secure, efficient, and user-friendly solution. This project highlights my ability to develop comprehensive systems that 
        address real-world problems through innovative technology solutions.
        </p>
    </div>
  )
}

export default Rfid
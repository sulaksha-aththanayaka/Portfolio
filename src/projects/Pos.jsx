import React from 'react'
import img1 from '../assets/POS_img_1.webp'

function Pos() {
  return (
    <div className='mt-12 px-5 sm:px-64 py-6 sm:text-lg bg-gray-200'>
        <h1 className='font-bold italic text-xl sm:text-3xl text-center pb-6'>Sales Management System | happysales.lk</h1>

        <div className='flex justify-center pb-6'>
            <img src={img1}/>
        </div>
         
        <p className=''>
        The Happy Sales POS System represents a significant advancement in the realm of wholesale distribution management in Sri Lanka. 
        This web-based application aims to streamline and automate the traditionally manual processes of order-taking and invoice creation, 
        catering specifically to the needs of wholesale distributors.
        </p>
        <br/>
        <p>
        In Sri Lanka, sales representatives typically visit customers to manually record orders. These orders are then manually entered 
        by warehouse keepers into the system, which introduces inefficiencies and the potential for errors.
        </p>
        <br/>
        <p>
        Happy Sales POS System addresses these challenges by automating the entire order and invoice management process. 
        This includes:
        </p>
        <br/>
        <p>
            <li><span className='font-bold'>Mobile Invoice Creation: </span>Sales representatives can create draft invoices on the go and print bills using a Bluetooth thermal printer, facilitating immediate customer transactions.</li>
            <li><span className='font-bold'>Streamlined Warehouse Operations: </span>Warehouse keepers can review and edit draft invoices as needed, ensuring accuracy before finalizing the transaction and issuing products.</li>
            <li><span className='font-bold'>Comprehensive Management Tools: </span>Distributors benefit from tools for analyzing monthly and annual sales, managing inventory, and monitoring profits and losses.</li>
        </p>
        <br/>
        <p>
        The system is built using following technologies.
        </p>
        <br/>
        <p>
            <li><span className='font-bold'>Frontend: </span>Angular</li>
            <li><span className='font-bold'>Backend: </span>Spring Boot</li>
            <li><span className='font-bold'>Deployment: </span>Automated using Jenkins and Docker</li>
            <li><span className='font-bold'>Server Management: </span>Utilizes Nginx for efficient server operations</li>
        </p>
        <br/>
        <p>
        As the Backend Developer for this project, my primary responsibilities included:
        </p>
        <br/>
        <p>
        <li>Designing and implementing robust backend functionalities using Spring Boot.</li>
        <li>Developing APIs to facilitate seamless data flow between the frontend and backend components.</li>
        <li>Implementing secure authentication mechanisms and integrating essential APIs for enhanced system capabilities.</li>
        </p>
        <br/>
        <p>
        The project successfully delivered its initial release to the client, marking a significant milestone in improving operational efficiency and reducing errors in wholesale distribution processes. Future plans include converting the mobile component into a standalone mobile application to further enhance accessibility and usability.
        </p>
    </div>
  )
}

export default Pos
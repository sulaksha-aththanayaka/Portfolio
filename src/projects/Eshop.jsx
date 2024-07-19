import React from 'react'
import img2 from '../assets/ESHOP_img_2.png'

function Eshop() {
  return (
    <div className='mt-12 px-5 sm:px-64 py-6 sm:text-lg bg-gray-200'>
      <h1 className='font-bold italic text-xl sm:text-3xl text-center pb-6'>Eshop</h1>

      <div className='flex justify-center pb-6'>
          <img src={img2}/>
      </div>

      <p>
      Eshop is a robust ecommerce website that caters to both buyers and sellers, offering a seamless shopping experience with 
      a comprehensive set of functionalities. Built with a focus on user-friendly navigation and performance, Eshop incorporates 
      essential features required for modern ecommerce platforms.
      </p>

      <br/>

      <p>
        Followings are some of the key and essential features of this application.
      </p>

      <br/>

      <p>
        <li>
          <span className='font-bold'>Product Filtering: </span>Users can easily navigate through a wide range of products using advanced filtering options
          based on categories and brands. This helps in refining search results and finding specific items quickly.
        </li>
        <li>
          <span className='font-bold'>Product Search: </span>A powerful search functionality allows users to find products based on keywords,
          ensuring a smooth browsing experience.
        </li>
        <li>
          <span className='font-bold'>Shopping Cart: </span>Integrated shopping cart functionality enables users to add desired products, 
          review them, and proceed to checkout seamlessly.
        </li>
        <li>
          <span className='font-bold'>User Roles: </span>Eshop supports two distinct user roles, buyers and sellers.
        </li>
      </p>

      <br/>

      <p>
      Eshop is built using modern web technologies to ensure reliability, scalability, and security. Following technologies were used 
      in this application
      </p>

      <br/>

      <p>
        <li>
          <span className='font-bold'>Frontend: </span>Utilizes responsive design principles with React.js for a dynamic 
          and engaging user interface.
          </li>

        <li>
          <span className='font-bold'>Backend: </span>Powered by a robust backend architecture, leveraging frameworks like Node.js 
          and Express.js for handling server-side logic.
        </li>

        <li>
          <span className='font-bold'>Database: </span>Manages data storage efficiently, using MongoDB to store product information, 
          user details, and transactional data.
        </li>

        <li>
          <span className='font-bold'>Authentication and Authorization: </span>Implements secure user authentication and authorization
          mechanisms such as jwt tokens and redux toolkit to protect user data and ensure privacy.
        </li>
      </p>

      <br/>

      <p>
      Future plans for Eshop include enhancing the user interface for an even more intuitive shopping experience, integrating payment 
      gateways for seamless transactions, and expanding seller tools to streamline product management.
      </p>
    </div>
  )
}

export default Eshop
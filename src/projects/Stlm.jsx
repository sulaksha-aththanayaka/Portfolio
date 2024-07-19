import React from "react";
import img5 from '../assets/STLM_img_1.jpg'

function Stlm() {
  return (
    <div className='mt-12 px-5 sm:px-64 py-6 sm:text-lg bg-gray-200'>
      <h1 className="font-bold italic text-xl sm:text-3xl text-center pb-6">
        Smart Teaching and Learning Management System
      </h1>

      <div className="flex justify-center pb-6">
        <img src={img5} />
      </div>

      <p>
      Smart Teaching and Learning Management System (STLMS) using the MERN stack (MongoDB, Express.js, React.js, Node.js).
      This system is designed to facilitate efficient management of courses, enabling teachers to create and manage courses while allowing 
      students to enroll in and interact with the course content.
      </p>

      <br/>

      <p>
        Here are some of the technologies used in this project
      </p>

      <br/>

      <p>
        <li>
            <span className="font-bold">TailwindCSS: </span>Used for custom stylings to ensure a responsive and aesthetically pleasing user 
            interface.
        </li>

        <li>
            <span className="font-bold">Redux: </span>Implemented for state management, providing a predictable state container for 
            JavaScript apps.
        </li>

        <li>
            <span className="font-bold">bcrypt: </span>Employed for password hashing to ensure secure storage of user passwords.
        </li>

        <li>
            <span className="font-bold">jsonwebtoken: </span>Implemented for authentication, providing a secure method for verifying 
            user identities.
        </li>
      </p>

      <br/>

      <p>
        Here are some of the key features of the STLMS system
      </p>

      <br/>

      <p>
        <li>
            <span className="font-bold">Teachers: </span>Teachers can perform CRUD operations on courses, upload lessons to each course.
            Also, they can post MCQ questions with answers jumbled for each student.
        </li>

        <li>
            <span className="font-bold">Students: </span>Can enrolled to te courses and and study the contents. Also, they can answer 
            MCQs posted by their teachers and receive marks, facilitating self-assessment and progress tracking.
        </li>
      </p>

      <br/>

      <p>
      This project showcases the development of a robust and efficient Teaching and Learning Management System using modern web technologies 
      and best practices. The integration of secure authentication, comprehensive error handling, and user-friendly features ensures an 
      effective and seamless experience for both teachers and students. This project demonstrates my proficiency in full-stack development 
      and my ability to create scalable, maintainable, and secure web applications.
      </p>
    </div>
  );
}

export default Stlm;

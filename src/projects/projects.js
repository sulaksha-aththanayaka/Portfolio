import img1 from '../assets/POS_img_1.webp'
import img2 from '../assets/ESHOP_img_1.png'
import img3 from '../assets/RFID_img_1.jpg'
import img4 from '../assets/VA_img_1.jpg'
import img5 from '../assets/STLM_img_1.jpg'
import angular from '../assets/angular.png'
import mysql from '../assets/mysql.png'
import docker from '../assets/docker.png'
import nodejs from '../assets/nodejs.png'
import mongodb from '../assets/mongodb.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import express from '../assets/express.webp'
import springboot from '../assets/springboot.png'
import arduino from '../assets/arduino.png'
import firebase from '../assets/firebase.png'
import python from '../assets/python.png'
import colab from '../assets/colab.png'
import opencv from '../assets/opencv.png'
import tailwind from '../assets/tailwind.png'

const projects = [
    {id: 1, img: img1, tech:{1: angular, 2: mysql, 3:springboot, 4: docker}, title: 'pos', name: 'Sales Management System | happysales.lk', intro: 'The Happy Sales POS System represents a significant advancement in the realm of wholesale distribution management in Sri Lanka. This web-based application aims to streamline and automate the traditionally manual processes of order-taking and invoice creation, catering specifically to the needs of wholesale distributors.'},
    {id: 2, img: img2, tech:{1: react, 2: mongodb, 3: nodejs, 4: redux, 5: express, 6: tailwind}, title: 'e-commerce', name: 'EShop', intro: 'Eshop is a robust ecommerce website that caters to both buyers and sellers, offering a seamless shopping experience with a comprehensive set of functionalities. Built with a focus on user-friendly navigation and performance, Eshop incorporates essential features required for modern ecommerce platforms.'},
    {id: 3, img: img3, tech:{1: arduino, 2: mongodb, 3: firebase, 4: express, 5: react}, title: 'rfid', name: 'RFID Key Handover System', intro: 'The RFID-Based Key Handover System leverages the power of RFID technology to create an efficient and secure method for managing the handover of keys. This system is designed to streamline the process of verifying and authorizing key recipients, ensuring only authorized individuals can access the keys.'},
    {id: 4, img: img4, tech:{1: python, 2: colab, 3: opencv}, title: 'va', name: 'Vehicle Advertisements Detector', intro: 'This project involved the training and implementation of an object detection model to identify and isolate vehicle advertisements from a collection of images. By leveraging the power of deep learning and state-of-the-art object detection techniques, the system provides an accurate and efficient solution for detecting vehicle advertisements.'},
    {id: 5, img: img5, tech:{1: react, 2: mongodb, 3: nodejs, 4: tailwind, 5: express}, title: 'stlm', name: 'Smart Teaching and Learning Management System', intro: 'This system is designed to facilitate efficient management of courses, enabling teachers to create and manage courses while allowing students to enroll in and interact with the course content.'},
];

export default projects;
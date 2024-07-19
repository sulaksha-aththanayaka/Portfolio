import React from 'react'
import img4 from '../assets/VA_img_1.jpg'

function VehicleAds() {
  return (
    <div className='mt-12 px-5 sm:px-64 py-6 sm:text-lg bg-gray-200'>
        <h1 className='font-bold italic text-xl sm:text-3xl text-center pb-6'>Vehicle Advertisements Detection System</h1>

        <div className='flex justify-center pb-6 sm:mx-24'>
            <img src={img4}/>
        </div>

        <p>
        This project involved the training and implementation of an object detection model to identify and isolate vehicle advertisements
        from a collection of images. By leveraging the power of deep learning and state-of-the-art object detection techniques, the system 
        provides an accurate and efficient solution for detecting vehicle advertisements.
        </p>

        <br/>

        <p>
        The core of the system is built upon the DETR (Detection Transformer) model, specifically the facebook/detr-resnet-50 variant. 
        The DETR model utilizes an encoder-decoder transformer architecture with a convolutional backbone. Two heads are added on top of 
        the decoder outputs: a linear layer for class labels and a multi-layer perceptron (MLP) for bounding boxes. Object queries are 
        used to detect objects within an image, with each query targeting a specific object. For this implementation, the number of object 
        queries is set to 100, suitable for the COCO dataset.
        </p>

        <br/>

        <p>
            Below are some of the key components of the system
        </p>

        <br/>

        <p>
            <li>
                <span className='font-bold'>Model Training: </span>The model was trained using annotated images provided by the Roboflow 
                online platform. The annotations were crucial for identifying vehicle advertisements and distinguishing them from other 
                objects.
            </li>
            <li>
                <span className='font-bold'>Data Preprocessing: </span>Annotated images were processed to extract bounding box information. 
                A white mask was applied, and bounding box data was drawn to facilitate object detection. Optical Character Recognition 
                (OCR) techniques were employed to enhance accuracy, ensuring the final results focused solely on vehicle advertisements.
            </li>

            <li>
                <span className='font-bold'>Image Enhancement: </span>Prior to detection, images were enhanced using 
                custom preprocessing techniques to improve detection accuracy.
            </li>

            <li>
                <span className='font-bold'>Bounding Box Annotation: </span>Detected objects were annotated with bounding 
                boxes, displaying class labels and confidence scores.
            </li>

            <li>
                <span className='font-bold'>Output Management: </span>Cropped images of detected advertisements were saved,
                categorizing them into vehicle and non-vehicle advertisements for further processing.
            </li>
        </p>

        <br/>

        <p>
        This project showcases the integration of cutting-edge object detection technology with practical application requirements. By 
        combining deep learning models with robust data processing and hardware integration, the system offers an effective solution for 
        vehicle advertisement detection. This project underscores my expertise in implementing advanced machine learning models and 
        developing comprehensive solutions that address real-world challenges.
        </p>
    </div>
  )
}

export default VehicleAds
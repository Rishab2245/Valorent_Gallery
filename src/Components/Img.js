import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import { CLOUD_NAME } from '../Common/constants.js';

// Import required actions.
import {sepia} from "@cloudinary/url-gen/actions/effect";

const Img = ({cardImg}) => {

  console.log(CLOUD_NAME , cardImg)

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME
    }
  }); 

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image(cardImg);

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} className='valoimg'/>
    </div>
  )
};

export default Img;
import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {sepia} from "@cloudinary/url-gen/actions/effect";

export default  Img = ({cardImg}) => {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dm5zto58y'
    }
  }); 

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image(cardImg);


console.log(myImage);
  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} className='valoimg'/>
    </div>
  )
};
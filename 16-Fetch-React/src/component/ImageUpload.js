
import React, { useState } from 'react';

function previewFile(file,setImage,changeImage) {

  const reader = new FileReader();

  reader.addEventListener("load", function () {
    setImage(reader.result);
    changeImage(reader.result);
  }, false);

  if (file) reader.readAsDataURL(file);

}

export default function ImageUpload({changeImage}){

  const [image,setImage] = useState(null);

return ( <>
    <input type="file" onChange={ e => {
      previewFile(e.target.files[0],setImage,changeImage)
    }}/>
    <img src={image} width="200" alt="Image preview..."/>
  </> );

}

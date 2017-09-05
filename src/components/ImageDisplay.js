import React, { Component } from 'react';

const ImageDisplay = (props) => {

    let images = props.images.map((photos) => {
      return(
        <img src={photos.img_src} key={photos.id} />
      )
    });

    return (
      <div>
        {images}
      </div>
    );
  }

export default ImageDisplay;

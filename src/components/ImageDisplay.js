import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let images = this.props.images.map((photos) => {
      return(
        <img src={photos.img_src} key={photos.id} />
      )
    });

    return (
      <div style={this.props.style}>
        {images}
      </div>
    );
  }
}

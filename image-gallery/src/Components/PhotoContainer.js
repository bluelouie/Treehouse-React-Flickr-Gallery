import React, { Component } from 'react';
import Image from './Image';
import NoImage from './NoImage';


export default class PhotoContainer extends Component {

  render() {

    //A familiar array map to output the correct link for every image. Lots of objects
    const results = this.props.data;//Data was passed along from Container
    let images;
    if (results.length > 0) {
      images = results.map(image =>
        <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>
      );
    } else {
      images = <NoImage />//If no images
    };
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {images}
        </ul>
      </div>
    );
  }
}

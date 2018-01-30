import React, { Component } from 'react';
import axios from 'axios';
//Please use your Config file in this way. Insert your export here as instructed in the project.
import apiKey from './Config';
//React-Router


//Components
import PhotoContainer from './Components/PhotoContainer';
import Nav from './Components/Nav';



export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }




  componentDidMount() {
    this.performSearch(this.props.value);
  }


  changeSearchText(text) {
    this.props.changeValue(text);
    this.performSearch(this.props.value.query);
  }

  //Api fetcher that useses state thats passed in after being changed from changeSearchText to fillout the link
  performSearch (query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
    .then( response => {
      console.log(this.props.value);
      this.setState(
        {
          images: response.data.photos.photo,
        });
        console.log(this.props.value);
      })
      .catch(error => {
        alert('Error 404');
      });
    }

    render() {
      return (
          <div className="container">
            <Nav changeSearchText={this.changeSearchText.bind(this)}/>
            <PhotoContainer data={this.state.images}/>
          </div>
      );
    }
}

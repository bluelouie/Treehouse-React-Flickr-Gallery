import React, { Component } from 'react';
import axios from 'axios';
//Please use your Config file in this way. Insert your export here as instructed in the project.
import apiKey from './Config';


//React-Router
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom';

//Components
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
//

export default class Container extends Component {

  //Initial State
  constructor() {
    super();
    this.state = {
      images: [],//Empty
      loading: true,
      query: 'pretty'
    };
  }

  //Sets the state based on input from user
  changeSearchText(text) {
    this.setState({query : text});
    this.performSearch(this.state.query);
  }

  componentDidMount() {
    this.performSearch();
  }


  //Api fetcher that useses state thats passed in after being changed from changeSearchText to fillout the link
  performSearch (query = 'pretty') {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState(
        {
          images: response.data.photos.photo,
        });
      })
      .catch(error => {
        alert('Error 404');
      });
    }

    render() {
      return (

        <BrowserRouter>
          <div className="container">
            <Nav changeSearchText={this.changeSearchText.bind(this)} />
            {/* Called a new PhotoContainer for each link. Terrible I know. I'll get better*/}
            <Route exact path='/' render={ () => <Redirect to={`/cats`}/>}/>
            <Route  path='/search' render={ () => <PhotoContainer  data={this.state.images} />}/>
            <Route  path='/cats' render={ () => <PhotoContainer  data={this.state.images}  />}/>
            <Route  path='/dogs' render={ () => <PhotoContainer  data={this.state.images} />}/>
            <Route  path='/computers' render={ () => <PhotoContainer  data={this.state.images}  />}/>
          </div>
        </BrowserRouter>
      );
    }

}

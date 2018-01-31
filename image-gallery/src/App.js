import React, { Component } from 'react';
import Container from './Container';
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom';




class App extends Component {

  //Initial State
  constructor() {
    super();
    this.state = {
      loading: true,
      query: ``
    };
  }

    //Changes the state to the search bar input text
    changeValue (text) {
      this.setState({query : text});
    }

    render() {

      return (
        <BrowserRouter>
          {/* Called a new PhotoContainer for each link. Terrible I know. I'll get better*/}
          <div className="container">
            <Route exact path='/' render={ () => <Redirect to={`/cats`}/>}/>
            <Route  path='/search' render={ () => <Container changeValue={this.changeValue.bind(this)} value={this.state} />}/>
            <Route  path='/cats' render={ () => <Container value='cats'/>}/>
            <Route  path='/dogs' render={ () => <Container  value="dogs"/>}/>
            <Route  path='/computers' render={ () => <Container   value="computers" />}/>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;

import React, { Component } from 'react';
import SearchBar from './SearchBar';

// import PropTypes from 'prop-types';
import {
  NavLink,
  Route,
} from 'react-router-dom';

export default class Nav extends Component {

  //Im alittle ashamed of this code. ALOT of repetition! I would love to revisit this alittle later but its quite late :)
  //
  //This function pulls the input from the search input and calls the stateSet
  handleValueSearch(input) {
    this.props.changeSearchText(input);
  }


  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to={`/cats`} >Cats</NavLink></li>
          <li><NavLink to={`/dogs`} >Dogs</NavLink></li>
          <li><NavLink to={`/computers`} >Computers</NavLink></li>
          <li><NavLink to={`/search`} >Search</NavLink></li>
          <Route  path='/search' render={ () => <SearchBar handleValueSearch={this.handleValueSearch.bind(this)} />}/>
        </ul>
      </nav>
    );
  }
}

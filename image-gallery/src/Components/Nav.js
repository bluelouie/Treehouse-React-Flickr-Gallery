import React, { Component } from 'react';
import SearchBar from './SearchBar';

// import PropTypes from 'prop-types';
import {
  NavLink,
  Route,
} from 'react-router-dom';

export default class Nav extends Component {

  //This function pulls the input from the search input and calls changeSearchText method
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

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
    const text = input;
    this.props.changeSearchText(text);
  }

  //These just use hard coded strings to fill out the query
  handleValueCats() {
    const text = 'Cats';
    this.props.changeSearchText(text);
  }

  handleValueDogs() {
    const text = 'dogs';
    this.props.changeSearchText(text);
  }

  handleValueComp() {
    const text = 'computers';
    this.props.changeSearchText(text);
  }

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to={`/cats`} onClick={this.handleValueCats.bind(this)}>Cats</NavLink></li>
          <li><NavLink to={`/dogs`} onClick={this.handleValueDogs.bind(this)}>Dogs</NavLink></li>
          <li><NavLink to={`/computers`} onClick={this.handleValueComp.bind(this)}>Computers</NavLink></li>
          <li><NavLink to={`/search`} onClick={this.handleValueSearch.bind(this)}>Search</NavLink></li>
          <Route  path='/search' render={ () => <SearchBar handleValueSearch={this.handleValueSearch.bind(this)} />}/>
        </ul>
      </nav>
    );
  }
}

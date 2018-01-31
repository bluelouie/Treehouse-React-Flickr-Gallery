import React, { Component } from 'react';


export default class SearchBar extends Component {

  handleValueSearch(e) {
    e.preventDefault();
    let input = e.target.children[0].value;
    if (input === "") {
      input = 'pretty';
    }
    this.props.handleValueSearch(input);

  }


  render() {
    return(
      <div >
        <form className="search-form" onSubmit={this.handleValueSearch.bind(this)}>
          <input type="text"/>
          <button >Search</button>
        </form>
      </div>
    );
  }
}

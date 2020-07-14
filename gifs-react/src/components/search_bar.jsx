import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdate = (event) => {
    if (event.target.value) {
      this.props.search(event.target.value);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <input type="text" placeholder="Search for a gif..." autoComplete="off" className="form-search form-control" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;

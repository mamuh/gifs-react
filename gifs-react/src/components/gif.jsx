import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.setGif) {
      this.props.setGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://media0.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

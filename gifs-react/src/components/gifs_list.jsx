import React, { Component } from 'react';
import Gif from './gif.jsx';
import Loader from './loader.jsx';

class GifsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gifs, setGif, isLoading } = this.props;
    return (
      <div className="gif-list" style={ isLoading ? {display: 'flex'} : {} }>
        {
          isLoading ?
           <Loader />
           :
           (gifs.map(({id}) => {
              return (
                <Gif id={id} key={id} setGif={setGif} />
              );
          }))
        }
      </div>
    );
  }
}

export default GifsList;

import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifsList from './gifs_list.jsx';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null,
      loading: false
    }
  }

  setGif = selectedGifId => {
    this.setState({
      selectedGifId
    })
  }

  search = query => {
    this.setState({
      loading: true
    })
     const url = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&limit=10&api_key=xwsfe9zC018S9BRI8rFG2wTBTgNqMZ0U`;
     axios.get(url)
       .then(response => {
          const { data } = response.data;
          this.setState({
            gifs: data,
            selectedGifId: data[0].id,
            loading: false
          })
       })
       .catch(error => {
          this.setState({
            gifs: [],
            selectedGifId: null,
            loading: false
          })
       })
  }

  render() {
    const { selectedGifId, gifs, loading } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={gifs} setGif={this.setGif} isLoading={loading} />
        </div>
      </div>
    );
  }
}

export default App;

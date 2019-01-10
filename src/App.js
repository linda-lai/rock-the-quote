import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    quote: [],
    author: null,
    image: ''
  }
  componentDidMount() {
    this.handleQuote();
  }
  handleQuote = () => {
    console.log('Clicked!')

    const getRandomQuote = axios.get('/api/quotes')
      .then(resp => {
        console.log(resp.data);
        this.setState({
          quote: resp.data.content,
          author: resp.data.attribution
        })
      })

    const getRandomImage = axios.get('/api/images')
      .then(resp => {
        console.log(resp.data)
        this.setState({
          image: resp.data.urls.regular
        })
      })
  }

  render() {
    const imageURL = this.state.image
    return (
      <div className="quotes-wrapper" style={{ backgroundImage: `url(${imageURL})` }}>
        <h1 className="quote-main">{this.state.quote}</h1>
        <h2 className="quote-author">{this.state.author}</h2>
        <div className="quote-button-container">
          <button className="quote-button" onClick={this.handleQuote}>HAPPIFY!</button>
        </div>
      </div>
    );
  }
}

export default App;

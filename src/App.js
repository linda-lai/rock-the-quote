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
        <h2 className="quote-main">{this.state.quote}</h2>
        <h3 className="quote-author">{this.state.author}</h3>
        <div className="quote-button">
          <button onClick={this.handleQuote}>MOTIVATE ME!</button>
        </div>

        {/* <img className= "quote-image" src={imageURL} alt="A random image from Unsplash API"/> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import grid from './grid.svg';
import './App.css';

import Snake from './Snake.js'


class App extends Component {
  // Initialize state
  state = { words: "WORD", snake_pos_x: 0, snake_pos_y: 0 }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getWords();
  }

  getWords() {
    fetch('/hello')
      .then((responseText) => responseText.json())
      .then((response) => this.setState({words: response.thing}));
  }

  render() {
    console.log(this.state.words)
    //WORKS!!
    var width = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

    var height = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;


    console.log(width + "x" + height)
    return (
      <div className="fake-border">
        <div className="container">

          <div className="content">
            <div className="name-container">
              <h1 className="name">Karthick</h1>
              <h1 className="name">Shankar</h1>
            </div>
          </div>
          <Snake/>
        </div>
      </div>
      )
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with {this.state.words}
          </a>
        </header>
      </div>
    );*/
  }
}

export default App;

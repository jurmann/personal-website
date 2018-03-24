import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Joe Urmann</h1>
        </header>
        </div>
        <p className="right-text"><a href="https://www.linkedin.com/in/joseph-urmann">LinkedIn</a></p>
        <p className="right-text"><a href="https://github.com/jurmann">Github</a></p>
        <ul>
        <li>
        <a href="www.google.com">Google</a>
        </li>
        </ul>
      </div>
    );
  }
}

export default App;

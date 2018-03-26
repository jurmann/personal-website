import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GitHub from './github-logo.png';
import LinkedIn from './linkedin-logo.png';
import Email from './email.png'

class App extends Component {
  render() {
    return (
        <div className='App'
        style={{
            height: '100vh',
            width: '100vw',
            position: 'absolute',
            overflow: 'hidden',
        }}>
        <div className="background-photo" />
        <div className="App">
        <header>
          <h1 className="App-title">Joe Urmann</h1>
        </header>
        </div>
        <div className="images">

        <div className="inline">
        <a title={'GitHub'} href="https://github.com/jurmann">
            <img
            src={GitHub}
            alt={'GitHub'}
            height={30}
            width={30}
            />
        </a>
        </div>
        <div className="inline">
        <a title={'LinkedIn'} href="https://www.linkedin.com/in/joseph-urmann">
            <img
            src={LinkedIn}
            alt={'LinkedIn'}
            height={30}
            width={35}
            />
        </a>
        </div>
        <div className="inline">
        <a title={'Email'} href="mailto:urmannj@gmail.com">
            <img
            src={Email}
            alt={'Email'}
            height={30}
            width={30}
            />
        </a>
        </div>
        </div>
      </div>
    );
  }
}

export default App;


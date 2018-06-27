import React, { Component } from 'react';
import './App.css';
import GitHub from './assets/github-logo.png';
import LinkedIn from './assets/linkedin-logo.png';
import Email from './assets/email.png'
import StreamingCompare from './assets/streamingcompare.ico'

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
                <a title={'GitHub'} href="https://github.com/jurmann" target="_blank" rel="noopener noreferrer">
                    <img
                    src={GitHub}
                    alt={'GitHub'}
                    height={30}
                    width={30}
                    />
                </a>
            </div>
            <div className="inline">
                <a title={'LinkedIn'} href="https://www.linkedin.com/in/joseph-urmann" target="_blank" rel="noopener noreferrer">
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
            <div className="inline">
                <a title={'StreamingCompare'} href="https://www.streamingcompare.com" target="_blank">
                    <img
                    src={StreamingCompare}
                    alt={'StreamingCompare'}
                    height={30}
                    width={30}
                    />
                </a>
            </div>

        </div>
        <div className="photo-credit">
            <p>Photo taken in the <a href="https://en.wikipedia.org/wiki/Boundary_Waters_Canoe_Area_Wilderness" target="_blank" rel="noopener noreferrer">BWCA</a></p>
        </div>
      </div>
    );
  }
}

export default App;


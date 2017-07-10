import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Terminal from './components/Terminal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Container className="App-header-wrap">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </Container>
        </div>
        <Container className="App-body">
          <Terminal className="App-container" inverted raised>
            {'Hello!\nTesting'}
          </Terminal>
        </Container>
      </div>
    );
  }
}

export default App;

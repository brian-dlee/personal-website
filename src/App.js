import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import ContactCard from './components/ContactCard';
import Terminal from './components/Terminal';
import data from './terminal-data';

import './App.css';
import logo from './logo-light.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Container>
            <img width="56" className="logo" src={logo} alt="Logo" />
          </Container>
        </div>
        <Container className="App-body">
          <Grid stackable>
            <Grid.Column width={4}>
              <ContactCard />
            </Grid.Column>
            <Grid.Column width={12}>
              <Terminal
                greeting={'Hello! Read more on some of the work I\'ve done throughout my career by following a path below.'}
                menu={data}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;

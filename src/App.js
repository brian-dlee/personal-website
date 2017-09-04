import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import InfoCard from './components/InfoCard';
import Profile from './components/Profile';
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
            <img className="logo" src={logo} alt="Logo" />
          </Container>
        </div>
        <Container className="App-body">
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column width={6}>
                <Profile />
              </Grid.Column>
              <Grid.Column width={10} stretched verticalAlign="middle">
                <InfoCard />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Terminal
                  greeting={'Hello! Read more on some of the work I\'ve done throughout my career by following a path below.'}
                  menu={data}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;

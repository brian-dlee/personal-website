import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import ContactCard from './components/ContactCard';
import Terminal from './components/Terminal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="App-body">
          <Grid>
            <Grid.Column width={4}>
              <ContactCard />
            </Grid.Column>
            <Grid.Column width={12}>
              <Terminal inverted raised>
                {'Hello!\nTesting\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA'}
              </Terminal>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;

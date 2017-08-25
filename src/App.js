import React, { Component } from 'react';
import { Container, Dimmer, Grid } from 'semantic-ui-react';

import ContactCard from './components/ContactCard';
import Terminal from './components/Terminal';
import data from './terminal-data';

import './App.css';
import logo from './logo-light.svg';

class App extends Component {
  state = {
    fullscreen: false
  };

  toggleFullscreen = () => {
    if (!this.state.fullscreen)
      window.scrollTo(0, 0);

    this.setState({ fullscreen: !this.state.fullscreen });
  }

  render() {
    const { fullscreen } = this.state;
    return (
      <div className="App">
        <Dimmer
          active={fullscreen}
          onClick={this.toggleFullscreen}
        />
        <div className="App-header">
          <Container>
            <img width="56" className="logo" src={logo} alt="Logo" />
          </Container>
        </div>
        <Container className="App-body">
          <Grid stackable>
            <Grid.Column width={5}>
              <ContactCard />
            </Grid.Column>
            <Grid.Column width={11}>
              <Terminal
                onFullscreenClick={this.toggleFullscreen}
                fullscreen={fullscreen}
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

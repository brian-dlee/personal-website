import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Cursor from './Cursor';
import Prompt from './Prompt';


const getRandomTime = () => Math.random() * 100 + 50;

class Terminal extends Component {
  constructor() {
    super();

    this.state = {
      shellText: ''
    };
  }

  setShellUpdateTimeout() {
    setTimeout(this.writeNextCharacter.bind(this), getRandomTime());
  }

  writeNextCharacter() {
    this.setState({
      shellText: this.props.children.slice(0, this.charCount)
    });

    this.charCount++;

    if (this.charCount <= this.props.children.length) {
      this.setShellUpdateTimeout();
    }
  }

  componentDidMount() {
    this.charCount = 0;
    this.setShellUpdateTimeout();
  }

  render() {
    const style = {
      background: '#060606',
      border: '2px solid #212121',
      borderRadius: '2px',
      color: '#81b3b9'
    };

    const promptLines = this.state.shellText.split(/\n/);
    let content = [];

    for (let i = 0; i < promptLines.length; i++) {
      content.push(
        <div key={'promptLine' + i}>
          <code><Prompt />{promptLines[i]}{promptLines.length - 1 === i ? <Cursor /> : ''}</code>
        </div>
      );
    }

    return (
      <Segment style={style} {...this.props}>
        {content}
      </Segment>
    );
  }
}

export default Terminal;

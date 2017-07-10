import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class Prompt extends Component {
  render() {
    const grey = '#818181';
    const yellow = '#bbba30';

    const lb = <code style={{color:grey}}>[</code>;
    const mid = <code style={{color:yellow}}>brian.lee</code>;
    const rb = <code style={{color:grey}}>]</code>;

    return (
      <code>
        {lb}{mid}{rb}<Icon name="angle right"/>
      </code>
    );
  }
}

export default Prompt;

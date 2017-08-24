import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import { colors } from './Terminal';

class Prompt extends Component {
  render() {
    const promptSymbol = <Icon style={{color: colors.blue}} name="angle right"/>

    return (
      <code>
        {promptSymbol}
      </code>
    );
  }
}

export default Prompt;

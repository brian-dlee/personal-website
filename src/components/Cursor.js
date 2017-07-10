import React, { Component } from 'react';

class Cursor extends Component {
  render() {
    const style = {
      color: '#fefefe'
    };

    return <code className="cursor" style={style}>█</code>
  }
}

export default Cursor;

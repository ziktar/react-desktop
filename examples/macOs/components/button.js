import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';

export default class extends Component {
  static defaultProps = {
    theme: 'light'
  };
  
  render() {
    return (
      <div>
        <Button theme={this.props.theme} onClick={() => console.log('Clicked regular!')}>
          Press me!
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button theme={this.props.theme} color="blue" onClick={() => console.log('Clicked blue!')}>
          I'm blue
        </Button>
      </div>
    );
  }
}

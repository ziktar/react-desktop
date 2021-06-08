import React, { Component } from 'react';
import { Checkbox } from 'react-desktop/macOs';

export default class extends Component {
  static defaultProps = {
    theme: 'light'
  };
  
  render() {
    return (
      <Checkbox
        label="Check me!"
        theme={this.props.theme}
        onChange={(e) => console.log(e.target.value)}
        defaultValue="I got checked!"
        defaultChecked
      />
    );
  }
}

import React, { Component } from 'react';
import { TextInput } from 'react-desktop/macOs';

export default class extends Component {
  static defaultProps = {
    theme: 'light'
  };

  handleChange = e => console.log(e.target.value);

  render() {
    return (
      <TextInput
        theme={this.props.theme}
        label="My Input"
        placeholder="My Input"
        defaultValue=""
        onChange={this.handleChange}
      />
    );
  }
}

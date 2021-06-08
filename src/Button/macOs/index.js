import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowFocus from '../../windowFocus';
import { ThemeContext, themePropTypes, themeContextTypes } from '../../style/theme/windows';
import Hidden, { hiddenPropTypes } from '../../style/hidden';
import FontSize, { fontSizePropTypes } from '../../style/fontSize';
import Padding, { paddingPropTypes, removeDuplicatePaddingProps } from '../../style/padding';
import Margin, { marginPropTypes } from '../../style/margin';
import styles from './styles/10.11';
import Radium from 'radium';

@WindowFocus()
@Padding()
@Margin()
@Hidden()
@FontSize()
@ThemeContext()
@Radium
class Button extends Component {
  static propTypes = {
    ...hiddenPropTypes,
    ...fontSizePropTypes,
    ...paddingPropTypes,
    ...marginPropTypes,
    ...themePropTypes,
    type: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onClick: PropTypes.func,
    onEnter: PropTypes.func,
    disabled: PropTypes.bool
  };

  static contextTypes = {
    ...themeContextTypes
  };

  componentDidMount() {
    if (window && this.props.onEnter) {
      window.addEventListener('keyup', this.handleKeyUp);
    }
  }

  componentWillUnmount() {
    if (window && this.props.onEnter) {
      window.removeEventListener('keyup', this.handleKeyUp);
    }
  }

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      if (this.props.onEnter && !this.props.disabled) this.props.onEnter(e);
    }
  };

  render() {
    let { style, type, children, color, onClick, isWindowFocused, disabled, ...props } = this.props;
    delete props.onEnter;

    let componentStyle = { ...styles.button };
    if (this.context.theme === 'dark') {
      componentStyle = { ...componentStyle, ...styles.buttonDark };
    }

    if (!disabled && color === 'blue' && isWindowFocused) {
      componentStyle = { ...componentStyle, ...styles.blue };
    } else if (disabled) {
      componentStyle = { ...componentStyle, opacity: '.5' };
    }

    componentStyle = { ...componentStyle, ...style };

    return (
      <button
        ref="element"
        type={type || 'button'}
        onClick={onClick}
        style={removeDuplicatePaddingProps(componentStyle, this.props)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;

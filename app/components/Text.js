import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text as RText } from 'react-native'
import { StyleSheet } from 'react-native'

import Colors from '../theme/Colors'

export default class Text extends Component {
  // Prop type warnings
  static propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    monospace: PropTypes.bool,
    italic: PropTypes.bool,
    bold: PropTypes.bool,
  }

  // Defaults for props
  static defaultProps = {
    light: false,
    dark: false,
    small: false,
    large: false,
    monospace: false,
    italic: false,
    bold: false,
  }

  render() {
    const { style, children, ...rest } = this.props
    return (
      <RText
        { ...rest }
        style={[
          styles.default,
          this.props.light && styles.light,
          this.props.dark && styles.dark,
          this.props.small && styles.small,
          this.props.large && styles.large,
          this.props.monospace && styles.monospace,
          this.props.italic && styles.italic,,
          this.props.bold && styles.bold,
          style,
        ]}
      >
        {children}
      </RText>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    color: Colors.mediumText,
    fontFamily: 'sans-serif',
    fontSize: 16
  },
  light: {
    color: Colors.lightText
  },
  dark: {
    color: Colors.darkText
  },
  small: {
    fontSize: 12
  },
  large: {
    fontSize: 20
  },
  monospace: {
    fontFamily: 'monospace'
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  }
})

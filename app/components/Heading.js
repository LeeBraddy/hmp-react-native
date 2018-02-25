import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native'
import Text from './Text'

import Colors from '../theme/Colors'

export default class Heading extends Component {
  // Prop type warnings
  static propTypes = {
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
  }

  // Defaults for props
  static defaultProps = {
    h1: false,
    h2: false,
    h3: false,
  }

  render() {
    const { style, children, h1, h2, h3, ...rest } = this.props

    return (
      <Text
        { ...rest }
        style={[
          defaultStyle,
          h1 && styles.h1,
          h2 && styles.h2,
          h3 && styles.h3,
          style,
        ]}
      >
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'sans-serif',
    fontSize: 30
  },
  h2: {
    fontFamily: 'sans-serif',
    fontSize: 24
  },
  h3: {
    fontFamily: 'sans-serif',
    fontSize: 18
  },
})

const defaultStyle = styles.h2
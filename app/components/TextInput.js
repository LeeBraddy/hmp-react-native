import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, StyleSheet, TextInput as RTextInput } from 'react-native'
import Text from './Text'
import Section from './Section'
import Colors from '../theme/Colors'
import Metrics from '../theme/Metrics'

export default class TextInput extends Component {

  render() {
    const { style, ...rest } = this.props
    return (
      <RTextInput
        style={[styles.main, style]}
        {...rest}
      />
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white
  }
});

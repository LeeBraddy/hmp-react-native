import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native'
import Text from './Text'

import Colors from '../theme/Colors'

export default class Screen extends Component {

  render() {
    const { style, children, ...rest } = this.props
    return (
      <View style={[styles.container, style]}>
        { children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
});

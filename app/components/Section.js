import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native'
import Text from './Text'

import Colors from '../theme/Colors'
import Metrics from '../theme/Metrics'

export default class Section extends Component {

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
    backgroundColor: Colors.white,
    padding: Metrics.baseMargin
  }
});

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native'
import Text from './Text'
import Section from './Section'
import Colors from '../theme/Colors'
import Metrics from '../theme/Metrics'

export default class Card extends Component {

  render() {
    const { style, children, ...rest } = this.props
    return (
      <Section style={[styles.container, style]}>
        { children }
      </Section>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white
  }
});

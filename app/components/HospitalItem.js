import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native'
import Card from './Card'
import Heading from './Heading'
import Money from './Money'
import Text from './Text'
import Section from './Section'
import Colors from '../theme/Colors'
import Metrics from '../theme/Metrics'

export default class HospitalItem extends Component {

  render() {
    const {
      name,
      discharges,
      averageCharges,
      averageMedicarePayments
    } = this.props;

    return (
      <Card>
        <Heading h3 bold>{name}</Heading>
        <View style={styles.row}>
          <Text>Discharges:</Text>
          <Text monospace>{discharges}</Text>
        </View>
        <View style={styles.row}>
          <Text>Average Charges:</Text>
          <Money amount={averageCharges} />
        </View >
        <View style={styles.row}>
          <Text>Average Medicare Payments:</Text>
          <Money amount={averageMedicarePayments} />
        </View>
      </Card >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});

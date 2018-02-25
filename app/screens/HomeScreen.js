import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import Heading from '../components/Heading'
import HospitalItem from '../components/HospitalItem'
import Screen from '../components/Screen'
import Section from '../components/Section'
import Text from '../components/Text'
import TextInput from '../components/TextInput'
import TextSuggestInput from '../components/TextSuggestInput'
import Colors from '../theme/Colors'

import regions from '../data/region.json'
import drgs from '../data/drg.json'
import { appToken } from '../../env'


export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      region: null,
      drg: null,
      results: [],
    }
  }

  _tryQuery = (region, drg) => {
    if ( !drg || !region) {
      return;
    }

    let base = "https://data.cms.gov/resource/5xma-hdru.json";
    let select = "$select=provider_name,drg_definition,total_discharges,"
      + "average_covered_charges,average_medicare_payments";

    let eDrgs = encodeURIComponent(`'${drg}'`);
    let eRegion = encodeURIComponent(`'${region}'`);

    let where = '$where=drg_definition='
      + `${eDrgs}`
      + ' AND hospital_referral_region_hrr_description='
      + `${eRegion}`;

    let order = '$order=provider_name';

    let url = `${base}?${select}&${where}&${order}`;

    let options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-App-Token': appToken
      }
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          results: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _onChangeTextRegion = (text) => {
    this.setState({
      region: text,
    })
  }

  _onChangeTextDrg = (text) => {
    this.setState({
      drg: text,
    })
  }

  _onSuggestPressRegion = (region) => {
    this.setState((prevState, props) => {
      this._tryQuery(region, prevState.drg)
      return { region }
    })
  }

  _onSuggestPressDrg = (drg) => {
    this.setState((prevState, props) => {
      this._tryQuery(prevState.region, drg)
      return { drg }
    })
  }

  _itemSeparator = () => (<View style={styles.separator}></View>)
  _keyExtractor = (item, index) => `${index}`
  _renderItem = ({ item }) => {
    return (
      <HospitalItem
        name={item.provider_name}
        discharges={item.total_discharges}
        averageCharges={item.average_covered_charges}
        averageMedicarePayments={item.average_medicare_payments}
      />
    )
  }

  render() {
    return (
      <Screen>
        <Section style={styles.headerSection}>
          <View style={styles.title}>
            <Heading h1>Hospital Medicare Payments</Heading>
          </View>
          <TextSuggestInput
            value={this.state.region}
            placeholder="Region"
            autoCapitalize={"none"}
            autoCorrect={false}
            suggestions={regions}
            onSuggestPress={this._onSuggestPressRegion}
            onChangeText={this._onChangeTextRegion}
          />
          <TextSuggestInput
            value={this.state.drg}
            placeholder="Diagnosis"
            autoCapitalize={"none"}
            autoCorrect={false}
            suggestions={drgs}
            onSuggestPress={this._onSuggestPressDrg}
            onChangeText={this._onChangeTextDrg}
          />
        </Section>
        <FlatList
          data={this.state.results}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._itemSeparator}
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  headerSection: {
    elevation: 5,
  },
  title: {
    alignItems: "center",
  },
  separator: { height: 2, backgroundColor: Colors.canvas },
  listHeader: { height: 2, backgroundColor: Colors.white },
});

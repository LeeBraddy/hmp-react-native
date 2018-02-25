import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Text from './Text'
import TextInput from './TextInput'
import Section from './Section'
import Colors from '../theme/Colors'
import Metrics from '../theme/Metrics'

export default class TextSuggestInput extends Component {
  static propTypes = {
    suggestions: PropTypes.arrayOf(PropTypes.string),
    onSuggestPress: PropTypes.func,
    onChangeText: PropTypes.func,
    minChars: PropTypes.number
  }

  constructor(props) {
    super(props)

    this.state = {
      filteredSuggestions: []
    }
  }

  _onChangeText = (text) => {
    this.setState({
      filteredSuggestions: this._filterTerm(text)
    })
    this.props.onChangeText(text)
  }

  _filterTerm = (term: string) => {
    if ( this.props.minChars > term.length) {
      return [];
    }
  
    return this.props.suggestions.filter(
      value => value.toUpperCase().includes(term.toUpperCase())
    );
  }

  _onSuggestPress = (term) => {
    this.setState({ filteredSuggestions: [] })
    this.props.onSuggestPress(term)
  }

  _keyExtractor = (item, index) => `${index}`

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this._onSuggestPress(item)}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { style, onChangeText, ...rest } = this.props
    return (
      <View>
        <TextInput
          style={[styles.main, style]}
          onChangeText={this._onChangeText}
          {...rest}
        />
        <FlatList
          data={this.state.filteredSuggestions}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white
  }
});

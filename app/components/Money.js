import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Text from './Text'
import accounting from 'accounting'

export default class Money extends Component {
  // Prop type warnings
  static propTypes = {
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  // Defaults for props
  static defaultProps = {
    amount: 0
  }

  render() {
    const { amount, ...rest } = this.props

    return (
      <Text monospace { ...rest } >
        {accounting.formatMoney(amount)}
      </Text>
    )
  }
}

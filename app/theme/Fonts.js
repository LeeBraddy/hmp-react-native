const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  tiny: 8,
  small: 12,
  medium: 14,
  large: 20,
  input: 18,
}

const style = {
  normal: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  heading: {
    fontFamily: type.bold,
    fontSize: size.large
  }
}

export default {
  type,
  size,
  style
}

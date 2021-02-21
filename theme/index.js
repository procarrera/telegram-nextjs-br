// theme.js
import { extendTheme } from '@chakra-ui/react'

// Global styles
import styles from './styles'
// Global spacing adjusts
import sizes from './sizes'
// Color palette
import colors from './foudations/colors'
// typography
import fonts from './foudations/fonts'
import fontSizes from './foudations/fontSizes'
// Custom breakpoints
import breakpoints from './breakpoints'

import Heading from './components/heading'
import Button from './components/button'

const overrides = {
  styles,
  sizes,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  components: {
    Heading,
    Button
  }
}

export default extendTheme(overrides)
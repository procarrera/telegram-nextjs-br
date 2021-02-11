// theme.js
import { extendTheme } from '@chakra-ui/react'

// Global styles
import styles from './styles'
// Global spacing adjusts
import sizes from './sizes'

// Custom breakpoints
import breakpoints from './breakpoints'

const overrides = {
  styles,
  sizes,
  breakpoints
}

export default extendTheme(overrides)
import React from 'react'
import { Box } from '@chakra-ui/react'
import Container from '../Container'

const Section: React.FC = (props) => {
  return (
    <Box
      as="section"
      minH="100vh"
      py={8}
    >
      <Container>
        {props.children}
      </Container>
    </Box>
  )
}

export default Section
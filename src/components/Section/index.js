import { Box } from '@chakra-ui/react'
import Container from '../Container'

function Section({ minH, id, children }) {
  return (
    <Box
      as="section"
      id={id}
      minH={minH}
      py={20}
    >
      <Container>
        {children}
      </Container>
    </Box>
  )
}

export default Section
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  GridItem,
  HStack,
  VStack,
  Code,
  List,
  ListItem,
  Link as ChakraLink,
  Grid,
} from "@chakra-ui/react";
import Headroom from 'react-headroom'
import Link from 'next/link'
import ColumnSplit from "../src/components/ColumnSplit";
import Container from "../src/components/Container";


const section = {
  minH: ['', , , , '82vh'],
  py: [6, , 6, 12,]
}

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



export default function Links() {
  return (
    <>
      <Box as="section" minH={section.minH} py={section.py}>
        <Container>
          <Box color="orange.600" textStyle="h1">Links Úteis</Box>
          <Box textStyle="paragraph" mb={6}>
            Links catalogados por ordem alfabética.
          </Box>
        </Container>
        <Headroom>
          <Box bgColor="white.50">
            <Container>
              <HStack w="100%" display={['none', , 'block']} className="index" pb={12}>
                {alfabeto.map((letter, i) => {
                  return (
                    <Link href={`#${letter}`}>
                      <Text
                        as="span"
                        key={i}
                        cursor="pointer"
                        color="indigoBlue.500"
                        display="inline-block"
                        _hover={{
                          color: 'orange.500',
                          _after: {
                            color: 'indigoBlue.500'
                          }
                        }}
                        fontFamily="body"
                        fontWeight="normal"
                        pos="relative"
                        _notLast={{
                          _after: {
                            content: '" - "',
                            color: 'indigoBlue.500',
                          }
                        }}
                      >
                        {letter}
                      </Text>
                    </Link>
                  )
                })}
              </HStack>
            </Container>
          </Box>
        </Headroom>
        <Container>
          <VStack w="100%" display={['block', , 'none']} className="index" pb={12}>
            {alfabeto.map((letter, i) => {
              return (
                <Link href={`#${letter}`}>
                  <Text
                    as="span"
                    key={i}
                    cursor="pointer"
                    color="indigoBlue.500"
                    display="inline-block"
                    _hover={{
                      color: 'orange.500',
                      _after: {
                        color: 'indigoBlue.500'
                      }
                    }}
                    fontFamily="body"
                    fontWeight="normal"
                    pos="relative"
                    _notLast={{
                      _after: {
                        content: '" - "',
                        color: 'indigoBlue.500',
                      }
                    }}
                  >
                    {letter}
                  </Text>
                </Link>
              )
            })}
          </VStack>
          <ColumnSplit>
            {alfabeto.map((letter, i) => {
              return (
                <Grid
                  gridTemplateColumns={['.2fr .8fr']}
                  mb={4}
                >
                  <GridItem
                    borderTop="1px"
                    borderColor="blueGreen.400"
                    pt={2}
                    id={letter}
                    as={Heading}
                    colSpan={1}
                    colStart={1}
                    mt="0"
                    mb="auto"
                    fontSize='4xl'>{letter}</GridItem>
                  <GridItem
                    borderTop="1px"
                    borderColor="blueGreen.400"
                    pt={2}

                    colSpan={1}
                    colStart={2}
                    as={List}
                  >
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>
                    <ListItem
                      p={2}
                      borderRadius="lg"
                      cursor="pointer"
                      transition="all .2s ease-in-out"
                      _hover={{
                        bgColor: 'white.100'
                      }}
                    >
                      <Code>comando-associado</Code> - <ChakraLink fontFamily="body" color="indigoBlue.700" fontWeight="normal" _hover={{ textDecor: 'none' }} >link</ChakraLink>
                    </ListItem>

                  </GridItem>
                </Grid>
              )
            })}

          </ColumnSplit>
        </Container>
      </Box>
    </>
  );
}
